import { closeConnection, prisma } from "@/database/prisma";
import { VerificationCodeProps } from "@/interfaces/acessInterface";
import { PayloadProps, ReplyProps } from "@/interfaces/replyInterface";
import { hashPassword, isCorrectPassword } from "@/lib/bcrypt";
import { generateToken, verifyToken } from "@/lib/jwt";
import { definirTempoExpiracaoCodigo, gerarCodigoConfirmacao, sendEMail } from "@/lib/nodeMailer";
import { existUserEmail, isValidRole } from "@/models/global/validationModel";
import { Acess } from "@/models/shared/acessModel";
import { UserLoginSchema, UserRegisterSchema } from "@/schemas/acessSchema";
import { UserLoginProps, UserRegisterProps } from "@/types/acessTypes";
import { verificationEmail } from "@/utils/emailContent";
import { isPast } from "date-fns";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export default {
    //se o cookie for válido, retorna os dados do usuário
    getUserData: async (request: FastifyRequest<{ Body: any, Params: number }>, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const payload = request.user as PayloadProps
            const _ = new Acess()
            const userData = await _.getUserdataWithId(payload.idUsuario)

            result = { success: true, status: 200, message: "Dados do usuário", data: userData  }
            console.log(userData)
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }

    },

    login: async (request: FastifyRequest<{ Body: UserLoginProps, Params: number }>, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const ParamsSchema = z.object({
                role: z.string({ message: "Role inválido" }),
            })
            const { role } = ParamsSchema.parse(request.params) //tipo de usuario

            //validar a role
            if (!(await isValidRole(role))) {
                closeConnection()
                result = { success: false, status: 404, message: "Tipo de usuário inválido" }
                return
            }

            //validar com zod
            const BodySchema = UserLoginSchema
            const userData = BodySchema.parse(request.body)

            const existUsuario = await existUserEmail(userData.email)
            if (!existUsuario) {
                closeConnection()
                //"Não existe usuário com este email" - mensagem não recomendada, pois estará dando uma informação valiosa a um atacante
                result = { success: false, status: 401, message: "Email ou senha inválidos" }
                return
            }

            const _ = new Acess()
            const usuario = await _.getUserdataWithEmail(userData.email)

            //verificar se o tipo de usuario é o mesmo
            if (usuario.Role?.descricao != role) {
                closeConnection()
                result = { success: false, status: 401, message: "Email ou senha inválidos" }
                return
            }

            //verificar se o usuario está autorizado
            if (usuario.estado == false) {
                closeConnection()
                result = { success: false, status: 401, message: "A sua conta está bloqueada. Enviamo-lhe um email informativo." }
                return
            }

            //verificar a senha
            const correct = await isCorrectPassword(userData.senha, usuario.senha)
            if (correct) {
                // atribuir um token
                const payload = { idUsuario: usuario.idUsuario } as PayloadProps
                const token = generateToken(payload);

                const expiresIn = 3600; //o tempo de expiração é definido em segundos (3600 equivale a 1h / 60 min)
                reply.setCookie('access_token', token, {
                    path: '/', //Define para quais rotas do seu servidor o cookie será enviado. '/' (disponível em todo o site).
                    httpOnly: true, // Impede que o JavaScript do navegador (via document.cookie) acesse o cookie.
                    secure: true, // Garante que o cookie seja enviado apenas em conexões HTTPS.
                    sameSite: 'strict', // O cookie só é enviado se a requisição vier do próprio site. Evita o envio do cookie em requisições cross-site, protegendo contra ataques CSRF.
                    signed: true, // Adiciona uma assinatura ao cookie para evitar adulteração. Impede que o usuário altere o valor do cookie manualmente no navegador, pois o servidor perceberá que a assinatura não bate.
                    maxAge: expiresIn, // duração de vida do cookie (melhor que seja o mesmo que o tempo de expiração do cookie)
                    // domain: 'localhost', // Define o domínio para o qual o cookie é válido.
                })

                closeConnection()

                const { nome, ...userData } = usuario
                const primeiroNome = nome.split(' ')[0]

                result = { success: true, status: 200, message: `Bem vindo de volta, ${primeiroNome}`, data: usuario }
                return
            } else {
                closeConnection()
                //"Senha errada" - mensagem não recomendada, pois estará dando uma informação valiosa a um atacante
                result = { success: false, status: 401, message: "Email ou senha inválidos" }
                return
            }
        } catch (error: any) {
            closeConnection()
            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
            } else {
                result = { status: 500, message: error }
            }

        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },

    register: async (request: FastifyRequest<{ Body: UserRegisterProps; }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const ParamsSchema = z.object({
                role: z.string({ message: "Role inválido" }),
            })
            const { role } = ParamsSchema.parse(request.params) //tipo de usuario

            //validar a role
            if (!(await isValidRole(role))) {
                closeConnection()
                result = { success: false, status: 404, message: "Tipo de usuário inválido" }
                return
            }

            const BodySchema = UserRegisterSchema
            const userData = BodySchema.parse(request.body)

            //verificar se no nome contem números
            for (let i = 0; i < 9; i++) {
                if (userData.nome.includes(i.toString())) {
                    result = { status: 400, message: 'O nome só deve conter letras' }
                    return
                }
            }

            //verificar o email
            const existsE = await existUserEmail(userData.email)
            if (existsE) {
                closeConnection()
                result = { success: false, status: 403, message: "Este email já está em uso" }
                return
            }

            //comparar as senhas
            if (userData.senha !== userData.senhaConfirmada) {
                closeConnection()
                result = { success: false, status: 400, message: "As senhas não combinam" }
                return
            }

            //eliminar todos os espaços em branco no início e fim do nome
            let userName = (userData.nome).trimStart().trimEnd()
            const _ = new Acess()
            //eliminar os codigo de verificação de email usados
            const idRole = await _.getIdRole(role)
            await _.deleteVerificationCode(userData.email, idRole!)

            const newUser = await _.createUser(userData, idRole!)

            // atribuir um token
            const payload = { idUsuario: newUser.idUsuario } as PayloadProps
            const token = generateToken(payload);

            const expiresIn = 3600; //o tempo de expiração é definido em segundos (3600 equivale a 1h / 60 min)
            reply.setCookie('access_token', token, {
                path: '/', //Define para quais rotas do seu servidor o cookie será enviado. '/' (disponível em todo o site).
                httpOnly: true, // Impede que o JavaScript do navegador (via document.cookie) acesse o cookie.
                secure: true, // Garante que o cookie seja enviado apenas em conexões HTTPS.
                sameSite: 'strict', // O cookie só é enviado se a requisição vier do próprio site. Evita o envio do cookie em requisições cross-site, protegendo contra ataques CSRF.
                signed: true, // Adiciona uma assinatura ao cookie para evitar adulteração. Impede que o usuário altere o valor do cookie manualmente no navegador, pois o servidor perceberá que a assinatura não bate.
                maxAge: expiresIn, // duração de vida do cookie (melhor que seja o mesmo que o tempo de expiração do cookie)
                // domain: 'localhost', // Define o domínio para o qual o cookie é válido.
            })

            const { nome, ...user } = newUser
            const primeiroNome = nome.split(' ')[0]

            closeConnection()

            result = { success: true, status: 201, message: `Bem vindo a Mukutu, ${primeiroNome}`, data: newUser }

        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }

            } else {
                result = { status: 500, message: error }
            }

        }
        finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },

    //funções para verificar um email
    sendVerificationCode: async (request: FastifyRequest<{ Body: any; }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição56" }//por padrão
        try {
            const BodySchema = z.object({
                email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
                role: z.string({ message: "Role inválido" }),
            })

            const userRegister = BodySchema.parse(request.body)
            //verificar o email
            const existsE = await existUserEmail(userRegister.email)
            if (existsE) {
                closeConnection()
                result = { success: false, status: 400, message: "Este email já está em uso" }
                return
            }
            console.log(1)

            //codigo de confirmacao
            const codigoConfirmacao = gerarCodigoConfirmacao()

            //data de expiracao - 10 min
            const dataExpiracao = definirTempoExpiracaoCodigo(10)//10 minutos para expirar

            //enviar um código de confirmação por email
            const emailContent = verificationEmail(codigoConfirmacao)
            const subject = "Verificação de Email" //ou o assunto do email
            const send: any = await sendEMail(userRegister.email, subject, emailContent)

            if (!send?.success) {
                result = { success: false, status: 400, message: send.message, data: send?.data }
                return
            }
            console.log(2)


            const _ = new Acess()
            //buscar o id do role
            const idRole = await _.getIdRole(userRegister.role)
            console.log(3)
            console.log(idRole)

            //se já existir outros códigos para o mesmo email e mesmo role(formador ou estudante), eliminar
            await _.deleteVerificationCode(userRegister.email, idRole!)
            console.log(4)

            //adicionar na tabela ConfirmacaoEmail
            const verificationCode: VerificationCodeProps = {
                email: userRegister.email,
                codigo: codigoConfirmacao,
                idRole: idRole,
                dataExpiracao: dataExpiracao
            }

            await _.createVerificationCode(verificationCode)

            closeConnection()

            result = { success: true, status: 201, message: `Código de verificação enviado`, data: { email: userRegister.email } }

        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
                return
            } else {
                result = { status: 500, message: error }
                return
            }
        }
        finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },

    getVerificationCode: async (request: FastifyRequest<{ Body: any; }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const ParamsSchema = z.object({
                email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
            })

            const { email } = ParamsSchema.parse(request.params)

            //verificar o email
            const existsE = await existUserEmail(email)
            if (existsE) {
                closeConnection()
                result = { success: false, status: 400, message: "Este email já está em uso" }
                return
            }

            //buscar o codigo de confirmacao correspondente ao email
            const confirmacaoEmail = await prisma.confirmacaoEmail.findFirst({
                where: {
                    email: email
                },
                orderBy: {
                    idConfirmacao: "desc"
                }
            })

            closeConnection()

            result = { success: true, status: 200, message: `Código de verificação`, data: confirmacaoEmail }
        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
                return

            } else {
                result = { status: 500, message: error }
                return
            }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }

    },

    //funções para autorizar a recuperação de senha
    sendAuthorizationCode: async (request: FastifyRequest<{ Body: any; }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const BodySchema = z.object({
                email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
            })

            const userRegister = BodySchema.parse(request.body)

            //verificar o email
            const existsE = await existUserEmail(userRegister.email)
            if (existsE) {
                closeConnection()
                result = { success: false, status: 400, message: "Este email já está em uso" }
                return
            }

            //codigo de confirmacao
            const codigoConfirmacao = gerarCodigoConfirmacao()

            //data de expiracao - 10 min
            const dataExpiracao = definirTempoExpiracaoCodigo(10)//10 minutos para expirar

            //enviar um código de confirmação por email
            const emailContent = verificationEmail(codigoConfirmacao)
            const subject = "Recuperação de Senha" //ou o assunto do email
            const send: any = await sendEMail(userRegister.email, subject, emailContent)

            if (!send?.success) {
                result = { success: false, status: 400, message: send.message, data: send?.data }
                return
            }

            const _ = new Acess()
            const usuario = await _.getUserdataWithEmail(userRegister.email)

            //se já existir outros códigos para o mesmo email e mesmo role(formador ou estudante), eliminar
            await _.deleteVerificationCode(usuario.email, usuario.idUsuario)

            //adicionar na tabela ConfirmacaoEmail
            const verificationCode: VerificationCodeProps = {
                email: usuario.email,
                codigo: codigoConfirmacao,
                idRole: usuario.idRole,
                dataExpiracao: dataExpiracao
            }

            await _.createVerificationCode(verificationCode)

            closeConnection()

            result = { success: true, status: 201, message: `Código de autorização enviado`, data: { email: userRegister.email } }

        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
                return
            } else {
                result = { status: 500, message: error }
                return
            }
        }
        finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },

    getAuthorizationCode: async (request: FastifyRequest<{ Body: any; }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const ParamsSchema = z.object({
                email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
            })

            const { email } = ParamsSchema.parse(request.params)

            //verificar o email
            const existsE = await existUserEmail(email)
            if (existsE) {
                closeConnection()
                result = { success: false, status: 400, message: "Este email já está em uso" }
                return
            }

            //buscar o codigo de confirmacao correspondente ao email
            const confirmacaoEmail = await prisma.confirmacaoEmail.findFirst({
                where: {
                    email: email
                },
                orderBy: {
                    idConfirmacao: "desc"
                }
            })

            closeConnection()

            result = { success: true, status: 200, message: `Código de autorização`, data: confirmacaoEmail }
        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
                return

            } else {
                result = { status: 500, message: error }
                return
            }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }

    },

    deleteExpiredEmailVerification: async (request: FastifyRequest<{ Body: any, Params: any }>, reply: FastifyReply) => {
        const _ = new Acess()
        await _.deleteExpiredEmailVerification()
    },

    logout: async (rquest: FastifyRequest, reply: FastifyReply) => {
        reply.clearCookie('access_token')
        // return reply.send({ message: 'Logout successful' })
        let result = { success: true, status: 200, message: "Sessão terminada" }
        reply.status(result.status).send(result)
    },

    redefinirSenha: async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply): Promise<any> => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão

        try {
            const ParamsSchema = z.object({
                email: z.string({ message: "Email inválido" }).email({ message: "Email inválido" }),
            })
            const { email } = ParamsSchema.parse(request.params)

            const BodySchema = z.object({
                senhaNova: z.string().min(8, { message: "A senha nova tem de ter no mínimo 8 caracteres" }),
                confirmarSenhaNova: z.string().min(8, { message: "A senha confirmada tem de ter no mínimo 8 caracteres" }),
            })
            const { senhaNova, confirmarSenhaNova } = BodySchema.parse(request.body)

            const existsE = await existUserEmail(email)
            if (!existsE) {
                closeConnection()
                result = { success: false, status: 500, message: "Email inválido" }
                return
            }

            //comparar as senhas
            if (senhaNova !== confirmarSenhaNova) {
                closeConnection()
                result = { success: false, status: 400, message: "As senhas não combinam" }
                return
            }

            //encriptar a senha
            const hashedPassword = await hashPassword(senhaNova);

            await prisma.usuario.update({
                data: {
                    senha: hashedPassword
                },
                where: {
                    email: email
                }
            })

            closeConnection()
            result = { status: 200, message: 'Senha redefinida', data: hashedPassword }
        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                result = { status: 500, message: error.issues[0].message }
                return

            } else {
                result = { status: 500, message: error }
                return
            }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    }


}