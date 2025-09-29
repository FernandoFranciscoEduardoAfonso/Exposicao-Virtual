export interface UserDataProps {
    idUsuario: string;
    nome: string;
    email: string;
    senha: string;
    idRole: string;
    Role: any;
    nif: string | null;
    idPerfil: number;
    PerfilUsuario: any;
    dataRegistro: Date;
    dataAtualizacao: Date;
    estado: boolean;
    idProvincia: string | null;
}