import { PayloadProps, ReplyProps } from "@/interfaces/replyInterface";
import { Art } from "@/models/client/artModel";
import { Recommendation } from "@/models/shared/recommendationModel";
import { FastifyReply, FastifyRequest } from "fastify";

export default {
    getAllFavoritesArts: async (request: FastifyRequest, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const payload = request.user as PayloadProps
            const _ = new Art()
            const arts = await _.getAllFavoritesArts(payload.idUsuario)
            result = { success: true, status: 200, message: "Obras favoritas: ", data: arts } as ReplyProps
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },
    getAllFavoritesArtists: async (request: FastifyRequest, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const payload = request.user as PayloadProps
            const _ = new Art()
            const artists = await _.getAllFavoritesArtists(payload.idUsuario)
            result = { success: true, status: 200, message: "Artistas favoritas: ", data: artists } as ReplyProps
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },

    getIncri: async (request: FastifyRequest, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const payload = request.user as PayloadProps
            const _ = new Art()
            const artists = await _.getAllFavoritesArtists(payload.idUsuario)
            result = { success: true, status: 200, message: "Artistas favoritas: ", data: artists } as ReplyProps
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },



}