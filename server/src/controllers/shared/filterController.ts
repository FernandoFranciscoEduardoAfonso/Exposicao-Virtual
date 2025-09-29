import { ReplyProps } from "@/interfaces/replyInterface";
import { Filter } from "@/models/shared/filterModel";
import { Recommendation } from "@/models/shared/recommendationModel";
import { FastifyReply, FastifyRequest } from "fastify";


//OBS: quando não quero incluir um campo no filtro coloco o seu valor como undefined
export default {
    filterArt: async (request: FastifyRequest, reply: FastifyReply) => {
        const _ = new Filter()
        // const arts: any = await _.filterArt(["Pintura", "Artesanato"], { ano1: 2022, ano2: 2025 }, "0.5", "gratis", true)
        const arts: any = await _.filterArt(undefined, { ano1: 2022, ano2: 2025 }, "0.5", "gratis", true)

        return { success: true, status: 200, message: "Resultado", data: arts } as ReplyProps
    },

    filterRoom: async (request: FastifyRequest, reply: FastifyReply) => {
        const _ = new Filter()
        const rooms: any = await _.filterRoom(undefined, "publico", true)

        return { success: true, status: 200, message: "Resultado", data: rooms } as ReplyProps
    },

    filterArtist: async (request: FastifyRequest, reply: FastifyReply) => {
        const _ = new Filter()
        const rooms: any = await _.filterArtist("1", false)

        return { success: true, status: 200, message: "Resultado", data: rooms } as ReplyProps
    },

}