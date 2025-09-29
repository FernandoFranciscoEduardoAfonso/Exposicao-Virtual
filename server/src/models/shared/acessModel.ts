import { prisma } from "@/database/prisma";
import { UserDataProps } from "@/interfaces/acessInterface";
import { hashPassword } from "@/lib/bcrypt";
import { UserRegisterProps } from "@/types/acessTypes";

export class Acess {

    getUserdataWithEmail = async (email: string): Promise<UserDataProps> => {
        const usuario = await prisma.usuario.findUnique({
            where: {
                email,
            },
            //o comando include - seleciona por padrão todos os campos da tabela principal, incluindo o relacionamento especificado
            include: {
                Role: true, // Inclui todos os campos da tabela 'Role'
                PerfilUsuario:true
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
                Role:true,
                PerfilUsuario: true
            }
        })
        return usuario as UserDataProps
    }

    deleteVerificationCode = async (email: string, role: string) => {
        await prisma.confirmacaoEmail.deleteMany({
            where: {
                email: email,
                Role: { descricao: role }
            }
        })
    }

    createUser = async (userData: UserRegisterProps, role: string) => {
        //encriptar a senha
        const hashedPassword = await hashPassword(userData.senha);

        const newUser = await prisma.usuario.create({
            data: {
                nome: userData.nome,
                email: userData.email,
                senha: hashedPassword,
                Role: {
                    connect: {
                        descricao: role,
                    }
                },
                PerfilUsuario: {
                    create: {}
                }
            }
        })
        return newUser
    }
}