import { prisma } from "@/database/prisma"
import { ArtDataProps, CreateArtProps, CreateFavoriteArtistProps, CreateFavoriteArtProps, FavoriteArtDataProps, FavoriteArtistDataProps } from "@/interfaces/artInterface"

export class Art {
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