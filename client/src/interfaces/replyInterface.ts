export interface PayloadProps {
    idUsuario: string
}

export interface ReplyProps {
    success?: boolean
    status: number
    message: string
    data?: any
}

export interface UsuarioDataProps {
    idUsuario: string,
    nome: string,
    email: string,
    senha?: string
    nif?: any,
    PerfilUsuario?: any,
}

export interface confirmacaoEmailProps {
    idConfirmacao: number,
    codigo: string,
    email: string,
    dataExpiracao: any,
    role: string
}
