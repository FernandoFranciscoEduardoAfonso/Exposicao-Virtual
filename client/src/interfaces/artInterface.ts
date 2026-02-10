export interface CreateArtProps {
    titulo: string;
    descricao: string;
    preco?: string;
    anoConclusao: number;
    dataCriacao: Date;
    dataAtualizacao: Date;
    isOpen: boolean;
    idCategoria: string;
    idSalaExposicao: string

}

export interface ArtDataProps {
    idObra: string;
    titulo: string;
    descricao: string;
    preco?: string;
    anoConclusao: number;
    dataCriacao: Date;
    dataAtualizacao: Date;
    isOpen: boolean;
    Categoria: any;
    idCategoria: string;
    ObrasFavoritas: Array<any>,
    ImagensObra: Array<any>,
    SalaExposicao: Array<any>,
    idSalaExposicao: string,
    ClassificacaoObra: Array<any>
}

//obras favoritas
export interface CreateFavoriteArtProps {
    idCliente: string;
    idObra: string;
    Obra: any
}

export interface FavoriteArtDataProps {
    idFavorito: string;
    idCliente: string;
    idObra: string;
    Obra: any
}

//artistas favoritos
export interface CreateFavoriteArtistProps {
    idCliente: string;
    idUsuario: string;
    Usuario: any
}

export interface FavoriteArtistDataProps {
    idFavorito: string;
    idCliente: string;
    idUsuario: string;
    Usuario: any
}