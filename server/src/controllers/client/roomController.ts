import { PayloadProps, ReplyProps } from "@/interfaces/replyInterface";
import { Room } from "@/models/client/roomModel";
import { Recommendation } from "@/models/shared/recommendationModel";
import { FastifyReply, FastifyRequest } from "fastify";

export default {

    getAllAccessedRooms: async (request: FastifyRequest, reply: FastifyReply) => {
        let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
        try {
            const payload = request.user as PayloadProps
            const _ = new Room()
            const rooms = await _.getAllAccessedRooms(payload.idUsuario)
            result = { success: true, status: 200, message: "Salas acessadas: ", data: rooms } as ReplyProps
        } catch (error: any) {
            result = { success: false, status: 400, message: error }
        } finally {
            //resposta
            reply.status(result.status).send(result)
        }
    },
   


}