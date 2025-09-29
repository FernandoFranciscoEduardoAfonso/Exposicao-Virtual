import { prisma } from "@/database/prisma"
import { ArtFeedbackDataProps, ArtistFeedbackDataProps, CreateArtFeedbackProps, CreateArtistFeedbackProps } from "@/interfaces/feedbackInterface"

export class Feddback {

    //feedback de artistas
    createArtistFeedback = async (feedbackData: CreateArtistFeedbackProps): Promise<any> => {
        let feedback = await prisma.classificacaoArtista.create({
            data: {
                comentario: feedbackData.comentario,
                estrelas: feedbackData.estrelas,
                idAvaliadador: feedbackData.idAvaliadador,
                idUsuario: feedbackData.idUsuario,
            },
        })
        return feedback as ArtistFeedbackDataProps
    }

    deleteArtistFeedback = async (idClassificacao: number): Promise<any> => {
        const feedback = await prisma.classificacaoArtista.delete({
            where: {
                idClassificacao
            },
        })
        return feedback as ArtistFeedbackDataProps
    }

    editArtistFeedback = async (feedbackData: ArtistFeedbackDataProps): Promise<any> => {
        const feedback = await prisma.classificacaoArtista.update({
            where: {
                idClassificacao: feedbackData.idClassificacao
            },
            data: {
                comentario: feedbackData.comentario,
                estrelas: feedbackData.estrelas,
            }
        })
        return feedback as ArtistFeedbackDataProps
    }

    getAllArtistFeedback = async (idUsuario: string): Promise<any> => {
        const feedback = await prisma.classificacaoArtista.findMany({
            where: {
                idUsuario
            },
        })
        return feedback as ArtistFeedbackDataProps[]
    }

    getSingleArtistFeedback = async (idClassificacao: number): Promise<any> => {
        const feedback = await prisma.classificacaoArtista.findUnique({
            where: {
                idClassificacao
            },
        })
        return feedback as ArtistFeedbackDataProps
    }

    //feedback de obras
    createArtFeedback = async (feedbackData: CreateArtFeedbackProps): Promise<any> => {
        let feedback = await prisma.classificacaoObra.create({
            data: {
                comentario: feedbackData.comentario,
                estrelas: feedbackData.estrelas,
                idAvaliadador: feedbackData.idAvaliadador,
                idObra: feedbackData.idObra,
            },
        })
        return feedback as ArtFeedbackDataProps
    }

    deleteArtFeedback = async (idClassificacao: number): Promise<any> => {
        const feedback = await prisma.classificacaoObra.delete({
            where: {
                idClassificacao
            },
        })
        return feedback as ArtFeedbackDataProps
    }

    editArtFeedback = async (feedbackData: ArtFeedbackDataProps): Promise<any> => {
        const feedback = await prisma.classificacaoObra.update({
            where: {
                idClassificacao: feedbackData.idClassificacao
            },
            data: {
                comentario: feedbackData.comentario,
                estrelas: feedbackData.estrelas,
            }
        })
        return feedback as ArtFeedbackDataProps
    }

    getAllArtFeedback = async (idObra: string): Promise<any> => {
        const feedback = await prisma.classificacaoObra.findMany({
            where: {
                idObra
            },
        })
        return feedback as ArtFeedbackDataProps[]
    }

    getSingleArtFeedback = async (idClassificacao: number): Promise<any> => {
        const feedback = await prisma.classificacaoObra.findUnique({
            where: {
                idClassificacao
            },
        })
        return feedback as ArtFeedbackDataProps
    }

}