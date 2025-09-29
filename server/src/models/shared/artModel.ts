import { prisma } from "@/database/prisma"
import { ArtDataProps, CreateArtProps, CreateFavoriteArtistProps, CreateFavoriteArtProps, FavoriteArtDataProps, FavoriteArtistDataProps } from "@/interfaces/artInterface"

export class Art {

    createArt = async (artData: CreateArtProps): Promise<any> => {
        let art = await prisma.obra.create({
            data: {
                titulo: artData.titulo,
                descricao: artData.descricao,
                preco: artData.preco && artData.preco,
                anoConclusao: artData.anoConclusao,
                dataCriacao: artData.descricao,
                dataAtualizacao: artData.dataAtualizacao,
                idCategoria: artData.idCategoria,
                idSalaExposicao: artData.idSalaExposicao
            },
        })
        return art as ArtDataProps
    }

    deleteArt = async (idObra: string): Promise<any> => {
        //1º remover o arquivo relacionado a obra, (deve ter uma função para remover arquivos e deve ser chamada na controller)

        //2º remover a obra
        const art = await prisma.obra.delete({
            where: {
                idObra
            },
        })
        return art as ArtDataProps
    }

    editArt = async (artData: ArtDataProps): Promise<any> => {
        const room = await prisma.obra.update({
            where: {
                idObra: artData.idObra
            },
            data: {
                titulo: artData.titulo && artData.titulo, //se artData.nome for null, o campo nome não será atualizado.
                descricao: artData.descricao,
                preco: artData.preco && artData.preco,
                anoConclusao: artData.anoConclusao,
                idCategoria: artData.idCategoria && artData.idCategoria,
                isOpen: artData.isOpen ? true : false,
            }
        })
        return room as ArtDataProps
    }

    //imagens de uma obra
    addImageToArt = async (idObra: string, urlImagem: string, descricao: string | null, isMain: boolean): Promise<any> => {
        let imagem = await prisma.imagensObra.create({
            data: {
                urlImagem,
                descricao,
                idObra: idObra,
                isMain
            }
        })
        return imagem
    }

    editImageOfArt = async (idImagem: string, urlImagem: string, descricao: string | null, isMain: boolean): Promise<any> => {
        let imagem = await prisma.imagensObra.update({
            data: {
                urlImagem,
                descricao: descricao && descricao,
                isMain
            },
            where: {
                idImagem
            }
        })
        return imagem
    }

    deleteImageOfArt = async (idImagem: string): Promise<any> => {
        let imagem = await prisma.imagensObra.delete({
            where: {
                idImagem
            }
        })
        return imagem
    }

    getSingleArt = async (idObra: string): Promise<any> => {
        const art = await prisma.obra.findUnique({
            where: {
                idObra
            },
            include: {
                Categoria: true,
                ImagensObra: true
            }

        })
        return art as ArtDataProps
    }

    //todas as obras de um artista
    getAllArts = async (idSalaExposicao: string): Promise<any> => {
        const art = await prisma.obra.findMany({
            where: {
                idSalaExposicao,
            },
            include: {
                Categoria: true,
                ImagensObra: true
            }
        })
        return art as Array<ArtDataProps>
    }

    //para os clientes

    //obras favoritas de um cliente
    addFavoriteArt = async (favoriteArtData: CreateFavoriteArtProps): Promise<any> => {
        const art = await prisma.obrasFavoritas.create({
            data: {
                idCliente: favoriteArtData.idCliente,
                idObra: favoriteArtData.idObra
            },
        })
        return art as FavoriteArtDataProps
    }

    deleteFavoriteArt = async (idFavorito: string): Promise<any> => {
        const art = await prisma.obrasFavoritas.delete({
            where: {
                idFavorito
            },
        })
        return art as FavoriteArtDataProps
    }

    getAllFavoritesArts = async (idCliente: string): Promise<any> => {
        const arts = await prisma.obrasFavoritas.findMany({
            where: {
                idCliente,
            },
            include: {
                Obra: true
            }
        })
        return arts as Array<FavoriteArtDataProps>
    }

    //artistas favoritos de um cliente
    addFavoriteArtist = async (favoriteArtistData: CreateFavoriteArtistProps): Promise<any> => {
        const artist = await prisma.artistasFavoritos.create({
            data: {
                idCliente: favoriteArtistData.idCliente,
                idUsuario: favoriteArtistData.idUsuario
            },
        })
        return artist as FavoriteArtistDataProps
    }

    deleteFavoriteArtist = async (idFavorito: string): Promise<any> => {
        const artist = await prisma.artistasFavoritos.delete({
            where: {
                idFavorito
            },
        })
        return artist as FavoriteArtistDataProps
    }

    getAllFavoritesArtists = async (idCliente: string): Promise<any> => {
        const art = await prisma.artistasFavoritos.findMany({
            where: {
                idCliente,
            },
            include: {
                Usuario: true
            }
        })
        return art as Array<FavoriteArtistDataProps>
    }



}