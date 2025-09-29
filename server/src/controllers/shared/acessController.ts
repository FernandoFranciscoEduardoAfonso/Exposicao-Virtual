import { closeConnection, prisma } from "@/database/prisma";
import { PayloadProps, ReplyProps } from "@/interfaces/replyInterface";
import { hashPassword, isCorrectPassword } from "@/lib/bcrypt";
import { generateToken } from "@/lib/jwt";
import { existUserEmail, isValidRole } from "@/models/global/validationModel";
import { Acess } from "@/models/shared/acessModel";
import { UserLoginSchema, UserRegisterSchema } from "@/schemas/acessSchema";
import { UserLoginProps, UserRegisterProps } from "@/types/acessTypes";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export default {

    login: async (request: FastifyRequest<{ Body: UserLoginProps, Params: number }>, reply: FastifyReply) => {
        try {
            const ParamsSchema = z.object({
                role: z.string({ message: "Role inválido" }),
            })
            const { role } = ParamsSchema.parse(request.params) //tipo de usuario

            //validar a role
            if (!(await isValidRole(role))) {
                closeConnection()
                return { success: false, status: 404, message: "Tipo de usuário inválido" } as ReplyProps
            }

            //validar com zod
            const BodySchema = UserLoginSchema
            const userData = BodySchema.parse(request.body)

            const existUsuario = await existUserEmail(userData.email)
            if (!existUsuario) {
                closeConnection()
                //"Não existe usuário com este email" - mensagem não recomendada, pois estará dando uma informação valiosa a um atacante
                return { success: false, status: 404, message: "Email ou senha inválidos" } as ReplyProps
            }

            const _ = new Acess()
            const usuario = await _.getUserdataWithEmail(userData.email)

            //verificar se o tipo de usuario é o mesmo
            if (usuario.Role?.descricao != role) {
                closeConnection()
                return { success: false, status: 404, message: "Email ou senha inválidos" } as ReplyProps
            }

            //verificar se o usuario está autorizado
            if (usuario.estado == false) {
                closeConnection()
                return { success: false, status: 401, message: "A sua conta está bloqueada. Enviamo-lhe um email informativo." } as ReplyProps
            }

            //verificar a senha
            const correct = await isCorrectPassword(userData.senha, usuario.senha)
            if (correct) {
                // atribuir um token
                const payload = { idUsuario: usuario.idUsuario } as PayloadProps
                const token = generateToken(payload);

                const expiresIn = 3600; //o tempo de expiração é definido em segundos (3600 equivale a 1h / 60 min)
                reply.setCookie('access_token', token, {
                    path: '/',
                    httpOnly: true,
                    secure: true,
                    maxAge: expiresIn, // duração de vida do cookie (melhor que seja o mesmo que o tempo de expiração do cookie)
                })

                closeConnection()

                const { nome, ...userData } = usuario
                const primeiroNome = nome.split(' ')[0]

                return { success: true, status: 200, message: `Bem vindo de volta, ${primeiroNome}`, data: { nome, token } } as ReplyProps
            } else {
                closeConnection()
                //"Senha errada" - mensagem não recomendada, pois estará dando uma informação valiosa a um atacante
                return { success: false, status: 400, message: "Email ou senha inválidos" } as ReplyProps
            }

        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                return { status: 400, message: error.issues[0].message } as ReplyProps

            } else {
                return { status: 500, message: error } as ReplyProps
            }

        }
    },

    register: async (request: FastifyRequest<{ Body: UserRegisterProps; }>, reply: FastifyReply): Promise<any> => {
        try {
            const ParamsSchema = z.object({
                role: z.string({ message: "Role inválido" }),
            })
            const { role } = ParamsSchema.parse(request.params) //tipo de usuario

            //validar a role
            if (!(await isValidRole(role))) {
                closeConnection()
                return { success: false, status: 404, message: "Tipo de usuário inválido" } as ReplyProps
            }

            const BodySchema = UserRegisterSchema
            const userData = BodySchema.parse(request.body)

            //verificar se no nome contem números
            for (let i = 0; i < 9; i++) {
                if (userData.nome.includes(i.toString())) {
                    return { status: 400, message: 'O nome só deve conter letras' } as ReplyProps
                }
            }

            //verificar o email
            const existsE = await existUserEmail(userData.email)
            if (existsE) {
                closeConnection()
                return { success: false, status: 403, message: "Este email já está em uso" } as ReplyProps
            }

            //comparar as senhas
            if (userData.senha !== userData.senhaConfirmada) {
                closeConnection()
                return { success: false, status: 400, message: "As senhas não combinam" } as ReplyProps
            }


            //eliminar todos os espaços em branco no início e fim do nome
            let userName = (userData.nome).trimStart().trimEnd()

            const _ = new Acess()
            //eliminar os codigo de verificação de email usados
            await _.deleteVerificationCode(userData.email, role)

            const newUser = await _.createUser(userData, role)

            // atribuir um token
            const payload = { idUsuario: newUser.idUsuario } as PayloadProps
            const token = generateToken(payload);

            const expiresIn = 3600; //o tempo de expiração é definido em segundos (3600 equivale a 1h / 60 min)
            reply.setCookie('access_token', token, {
                path: '/',
                httpOnly: true,
                secure: true,
                maxAge: expiresIn, // duração de vida do cookie (melhor que seja o mesmo que o tempo de expiração do cookie)
            })

            const { nome, ...user } = newUser
            const primeiroNome = nome.split(' ')[0]

            closeConnection()

            return { success: true, status: 201, message: `Bem vindo a Mukutu, ${primeiroNome}`, data: { nome, token } } as ReplyProps

        } catch (error: any) {
            closeConnection()

            if (error.name === 'ZodError') {
                return { status: 400, message: error.issues[0].message } as ReplyProps

            } else {
                return { status: 500, message: error } as ReplyProps
            }

        }
    },

    logout: async (rquest: FastifyRequest, reply: FastifyReply) => {
        reply.clearCookie('access_token')
        // return reply.send({ message: 'Logout successful' })
        return { success: true, status: 200, message: "Sessão terminada" } as ReplyProps
    }


}