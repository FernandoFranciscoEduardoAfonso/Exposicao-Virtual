import { prisma } from "@/database/prisma";
import { UserDataProps, VerificationCodeProps } from "@/interfaces/acessInterface";
import { hashPassword } from "@/lib/bcrypt";
import { UserRegisterProps } from "@/types/acessTypes";
import { isPast } from "date-fns";

export class Acess {
   

    getUserdataWithEmail = async (email: string): Promise<UserDataProps> => {
        const usuario = await prisma.usuario.findUnique({
            where: {
                email,
            },
            //o comando include - seleciona por padrão todos os campos da tabela principal, incluindo o relacionamento especificado
            include: {
                Role: true, // Inclui todos os campos da tabela 'Role'
                PerfilUsuario: true
            },
        })
        return usuario as UserDataProps
    }

    getUserdataWithId = async (idUsuario: string): Promise<any> => {
        const usuario = await prisma.usuario.findUnique({
            where: {
                idUsuario,
            },
            include: {
                Role: true,
                PerfilUsuario: true
            }
        })
        return usuario as UserDataProps
    }

    getIdRole = async (role: string): Promise<any> => {
        const r = await prisma.role.findUnique({
            where: {
                descricao: role,
            },
        })
        return r?.idRole
    }

    createUser = async (userData: UserRegisterProps, idRole: string) => {
        //encriptar a senha
        const hashedPassword = await hashPassword(userData.senha);
        console.log(34)

        const newUser = await prisma.usuario.create({
            data: {
                nome: userData.nome,
                email: userData.email,
                senha: hashedPassword,
                Role: {
                    connect: {
                        idRole: idRole,
                    }
                },
                PerfilUsuario: {
                    create: {}
                }
            }
        })
        console.log(35)

        return newUser
    }

    //funções para verificar um email
    createVerificationCode = async (verificationCode: VerificationCodeProps): Promise<any> => {
        await prisma.confirmacaoEmail.create({
            data: {
                email: verificationCode.email,
                codigo: verificationCode.codigo,
                dataExpiracao: verificationCode.dataExpiracao,
                idRole: verificationCode.idRole
            },
        })
    }

    //eliminar os códigos de verificação de email já expirados
    deleteExpiredEmailVerification = async () => {
        const confirmacaoEmail = await prisma.confirmacaoEmail.findMany()

        confirmacaoEmail.map(async (confirmacao) => {
            const dataExpiracao = confirmacao.dataExpiracao

            const data = dataExpiracao?.toString().split('T')[0].split('-').reverse() //retorna [dia, mes, ano]
            const tempo = dataExpiracao?.toString().split('T')[1].split(':') //retorna [hora, min]

            const dia = Number(data[0])
            const mes = Number(data[1]) - 1 //pois o mês 0 representa Janeiro
            const ano = Number(data[2])

            const hora = Number(tempo[0])
            const min = Number(tempo[1])

            const dataFormatada = new Date(ano, mes, dia, hora, min)

            //verificar se a data já passou
            if (isPast(dataFormatada)) {
                //verificar mais uma vez se a confirmacao existe
                const existConfirmacao = await prisma.confirmacaoEmail.findUnique({
                    where: {
                        idConfirmacao: confirmacao.idConfirmacao
                    }
                })
                if (existConfirmacao) {
                    await prisma.confirmacaoEmail.deleteMany({
                        where: {
                            idConfirmacao: confirmacao.idConfirmacao
                        }
                    })
                }

            }

        })
    }

    deleteVerificationCode = async (email: string, idRole: string) => {
        await prisma.confirmacaoEmail.deleteMany({
            where: {
                email: email,
                idRole: idRole,
            }
        })
    }

}