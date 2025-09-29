import { ReplyProps } from "@/interfaces/replyInterface";
import { Recommendation } from "@/models/shared/recommendationModel";
import { FastifyReply, FastifyRequest } from "fastify";


export default {
     getRecommendedArts: async (request: FastifyRequest, reply: FastifyReply) => {
        const _ = new Recommendation()
        // const arts: any = await _.getRecommendedArts("e4e9dfd8-6c5c-4dbc-bec2-40af03019039")
        const arts: any = await _.getRecommendedArtists()

        return { success: true, status: 200, message: "Resultado", data: arts } as ReplyProps
    }
}