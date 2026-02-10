export interface CreateRoomProps {
    nome: string
    visibilidade: string
    idUsuario: string,
    urlArquivo?: String,
    dataCriacao?: Date;
    dataAtualizacao?: Date;
    dataAbertura?: string | null;
    isOpen?: Boolean,
}

export interface RoomDataProps {
    idSalaExposicao: string,
    nome: string
    visibilidade: string
    idUsuario: string
    Usuario?: any
    Chat?: Array<any>
    ConviteAcesso?: Array<any>
    Acesso?: Array<any>
    urlArquivo: String | null,
    dataCriacao?: Date;
    dataAtualizacao?: Date;
    dataAbertura?: string | null;
    isOpen: Boolean,
}

export interface InviteDataProps {
    idConvite: number,
    codigo: string,
    dataExpiracao: string,
    SalaExposicao: any,
    idSalaExposicao: string,
    Usuario: any,
    idUsuario: string
}

export interface AcessoDataProps {
    idAcesso: number,
    modo: string,
    SalaExposicao: any,
    idSalaExposicao: string,
    Usuario: any,
    idUsuario: string
}
