export interface UserEditProps {
    idUsuario: string,
    nome: string,
    biografia: string,
    imagemPerfil: string
}

export interface AlterPasswordProps {
    idUsuario: string,
    novaSenha: string,
}

export interface AlterEmailProps {
    idUsuario: string,
    novoEmail: string,
}