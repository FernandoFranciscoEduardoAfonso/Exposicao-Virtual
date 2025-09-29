import { prisma } from "@/database/prisma";
import { UserDataProps } from "@/interfaces/acessInterface";
import { AlterEmailProps, AlterPasswordProps, UserEditProps } from "@/interfaces/profileInterface";
import { hashPassword } from "@/lib/bcrypt";
import { UserRegisterProps } from "@/types/acessTypes";


export class Profile {
    editProfile = async (userData: UserEditProps): Promise<UserDataProps> => {
        const usuario = await prisma.usuario.update({
            where: {
                idUsuario: userData.idUsuario,
            },
            data: {
                nome: userData.nome,
                PerfilUsuario: {
                    update: {
                        biografia: userData.biografia,
                        imagemPerfil: userData.imagemPerfil,
                    }
                }
            },
        })
        return usuario as UserDataProps
    }

    alterPassword = async (userData: AlterPasswordProps): Promise<UserDataProps> => {
        const usuario = await prisma.usuario.update({
            where: {
                idUsuario: userData.idUsuario,
            },
            data: {
                senha: userData.novaSenha,
            },
        })
        return usuario as UserDataProps
    }

    isEqualPassword = async (userData: AlterPasswordProps): Promise<boolean> => {
        const usuario = await prisma.usuario.findUnique({
            where: {
                idUsuario: userData.idUsuario,
                senha: userData.novaSenha,
            },
        })
        return usuario ? true : false
    }

    alterEmail = async (userData: AlterEmailProps): Promise<UserDataProps> => {
        const usuario = await prisma.usuario.update({
            where: {
                idUsuario: userData.idUsuario,
            },
            data: {
                email: userData.novoEmail,
            },
        })
        return usuario as UserDataProps
    }

    isEqualEmail = async (userData: AlterEmailProps): Promise<boolean> => {
        const usuario = await prisma.usuario.findUnique({
            where: {
                idUsuario: userData.idUsuario,
                senha: userData.novoEmail,
            },
        })
        return usuario ? true : false
    }
}