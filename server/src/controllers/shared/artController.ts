import { ReplyProps } from "@/interfaces/replyInterface";
import { Art } from "@/models/shared/artModel";
import { Recommendation } from "@/models/shared/recommendationModel";
import { FastifyReply, FastifyRequest } from "fastify";

export default {
    getAllArts: async (request: FastifyRequest, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const _ = new Art()
            const arts = await _.getAllArts()
            console.log(arts)
            result = { success: true, status: 200, message: "Obras: ", data: arts } as ReplyProps
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },



}