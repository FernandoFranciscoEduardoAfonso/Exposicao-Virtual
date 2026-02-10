import { prisma } from "@/database/prisma"
import { AcessoDataProps, CreateRoomProps, InviteDataProps, RoomDataProps } from "@/interfaces/roomInterface"

export class Room {

    //salas acessadas pelo cliente
    getAllAccessedRooms = async (idCliente: string): Promise<any> => {
        const rooms = await prisma.acesso.findMany({
            where: {
                idUsuario: idCliente
            },
            include:{
                SalaExposicao:{
                    include:{
                        Usuario: true
                    }
                }
            }
        })
        return rooms as Array<AcessoDataProps>
    }

    //acesso a sala
    addAccessToRoom = async (idSalaExposicao: string, idUsuario: string, modo: string): Promise<any> => {
        await prisma.acesso.create({
            data: {
                idSalaExposicao,
                idUsuario,
                modo
            }
        })
    }

}