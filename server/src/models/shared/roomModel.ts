import { prisma } from "@/database/prisma"
import { CreateRoomProps, InviteDataProps, RoomDataProps } from "@/interfaces/roomInterface"

export class Room {

    //funcoes para a area do site
    getAllRooms = async (): Promise<any> => {
        const rooms = await prisma.salaExposicao.findMany({
            orderBy: {
                dataCriacao: "desc"
            },
        })
        return rooms as Array<RoomDataProps>
    }

    getSingleRoom = async (idSalaExposicao: string): Promise<any> => {
        const room = await prisma.salaExposicao.findUnique({
            where: {
                idSalaExposicao
            }
        })
        return room as RoomDataProps
    }

    //salas de destaque
    getFeaturedRooms = async (): Promise<any> => {
        const rooms = await prisma.salaExposicao.findMany({
            orderBy: {
                Acesso: {
                    _count: "desc"
                },
            },
            take: 5
            
        })
        return rooms as Array<RoomDataProps>
    }

    //funcoes para Artistas

    createRoom = async (roomData: CreateRoomProps): Promise<any> => {
        let room = await prisma.salaExposicao.create({
            data: {
                nome: roomData.nome,
                visibilidade: roomData.visibilidade,
                idUsuario: roomData.idUsuario,
                dataAbertura: roomData.dataAbertura && roomData.dataAbertura,
            },
        })

        //senão tiver a data de abertura, definir a abertura da sala com a data de criação
        if (!roomData.dataAbertura) {
            room = await prisma.salaExposicao.update({
                where: {
                    idSalaExposicao: room.idSalaExposicao
                },
                data: {
                    dataAbertura: String(room.dataCriacao),
                },
            })
        }

        return room as RoomDataProps
    }

    deleteRoom = async (idSalaExposicao: string): Promise<any> => {
        //1º remover o arquivo relacionado a sala, (deve ter uma função para remover arquivos e deve ser chamada na controller)

        //2º remover a sala

        const room = await prisma.salaExposicao.delete({
            where: {
                idSalaExposicao
            },
        })
        return room as RoomDataProps
    }

    editRoom = async (roomData: RoomDataProps): Promise<any> => {
        const room = await prisma.salaExposicao.update({
            where: {
                idSalaExposicao: roomData.idSalaExposicao
            },
            data: {
                nome: roomData.nome && roomData.nome, //se roomData.nome for null, o campo nome não será atualizado.
                visibilidade: roomData.visibilidade && roomData.visibilidade,
                urlArquivo: roomData.urlArquivo && (roomData.urlArquivo as string | null),
                isOpen: roomData.isOpen ? true : false,
                dataAbertura: roomData.dataAbertura && roomData.dataAbertura,
            }
        })
        return room as RoomDataProps

    }


    //Convites de acesso - são feitas pelo artista
    sendAcessInviteToRoom = async (codigo: string, dataExpiracao: string, idUsuario: string, idSalaExposicao: string): Promise<any> => {

        //a funcao que envia o email e a notificao será chamada na controller
        const invite = await prisma.conviteAcesso.create({
            data: {
                codigo,
                idUsuario,
                idSalaExposicao,
                dataExpiracao
            },
        })
        return invite as InviteDataProps
    }

    getAllAcessInviteToRoom = async (idSalaExposicao: string): Promise<any> => {
        const invites = await prisma.conviteAcesso.findMany({
            where: {
                idSalaExposicao
            }
        })
        return invites as Array<InviteDataProps>
    }

    acceptAcessRequestToRoom = async (idSolicitacao: number, modo: string): Promise<any> => {
        const request = await prisma.solicitacaoAcesso.findUnique({
            where: {
                idSolicitacao
            }
        })

        if (request) {
            //1º atualizar o estado da solicitacao para "aprovada"
            await this.updateAcessRequestToRoom(request.idSolicitacao, "aprovada")

            //2º adicionar o cliente a sala
            await this.addAcessToRoom(request.idSalaExposicao, request.idUsuario, modo)

            //3º assim que aprovada a solicitação é removida, para não sobrecarregar a tabela
            await this.deleteAcessRequestToRoom(request.idSolicitacao)
        }
    }

    rejectAcessRequestToRoom = async (idSolicitacao: number, modo: string): Promise<any> => {
        const request = await prisma.solicitacaoAcesso.findUnique({
            where: {
                idSolicitacao
            }
        })

        if (request) {
            //1º atualizar o estado da solicitacao para "recusada"
            await this.updateAcessRequestToRoom(request.idSolicitacao, "recusada")

            //2º adicionar o cliente a sala
            await this.addAcessToRoom(request.idSalaExposicao, request.idUsuario, modo)

            //3º assim que aprovada a solicitação é removida, para não sobrecarregar a tabela
            await this.deleteAcessRequestToRoom(request.idSolicitacao)
        }
    }

    //funcoes para clientes

    //solicitacoes de acesso - são feitas pelo cliente
    sendAcessRequestToRoom = async (codigo: string, dataExpiracao: string, idUsuario: string, idSalaExposicao: string): Promise<any> => {
        const request = await prisma.solicitacaoAcesso.create({
            data: {
                codigo,
                idSalaExposicao,
                idUsuario
            }
        })
        return request
    }

    acceptAcessInviteToRoom = async (idConvite: number, modo: string): Promise<any> => {

        const invite = await prisma.conviteAcesso.findUnique({
            where: {
                idConvite
            }
        })

        if (invite) {

            //1º adicionar o cliente a sala
            await this.addAcessToRoom(invite.idSalaExposicao, invite.idUsuario, modo)

            //2º assim que aprovada o convite é removido, para não sobrecarregar a tabela
            await this.deleteAcessInviteToRoom(invite.idConvite)
        }
    }

    getAllAcessInviteToRoomOfOneCliente = async (idSalaExposicao: string, idUsuario: string): Promise<any> => {
        const invites = await prisma.conviteAcesso.findMany({
            where: {
                idSalaExposicao,
                idUsuario
            }
        })
        return invites as Array<InviteDataProps>
    }


    //funcoes compartilhadas | para alunos e artistas
    updateAcessRequestToRoom = async (idSolicitacao: number, estado: string): Promise<any> => {
        await prisma.solicitacaoAcesso.update({
            where: {
                idSolicitacao
            },
            data: {
                estado
            }
        })
    }

    existAcessRequestToRoom = async (idSolicitacao: number): Promise<Boolean> => {
        const request = await prisma.solicitacaoAcesso.findUnique({
            where: {
                idSolicitacao
            },
        })

        return request ? true : false
    }

    deleteAcessRequestToRoom = async (idSolicitacao: number): Promise<any> => {
        //assim que aprovada a solicitação é removida, para não sobrecarregar a tabela
        const request = await prisma.solicitacaoAcesso.delete({
            where: {
                idSolicitacao
            },
        })
        return request
    }

    deleteAcessInviteToRoom = async (idConvite: number): Promise<any> => {
        //assim que aprovada o convite é removido, para não sobrecarregar a tabela
        const invite = await prisma.conviteAcesso.delete({
            where: {
                idConvite
            },
        })
        return invite
    }

    //acesso a sala
    addAcessToRoom = async (idSalaExposicao: string, idUsuario: string, modo: string): Promise<any> => {
        await prisma.acesso.create({
            data: {
                idSalaExposicao,
                idUsuario,
                modo
            }
        })
    }

}