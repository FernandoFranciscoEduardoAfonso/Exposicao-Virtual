import { prisma } from "@/database/prisma"
import { NotificationDataProps, SendNotificationProps } from "@/interfaces/notificationInterface"

export class notification {
    sendNotification = async (notificationData: SendNotificationProps): Promise<any> => {
        const notification = await prisma.notificacao.create({
            data: {
                conteudo: notificationData.conteudo,
                idUsuario: notificationData.idUsuario,
            },
        })
        return notification as NotificationDataProps
    }

    deleteNotification = async (idNotificacao: string): Promise<any> => {
        const notification = await prisma.notificacao.update({
            where: {
                idNotificacao
            },
            data: {
                isVisivel: false
            }
        })
        return notification as NotificationDataProps
    }

    changeAllNotificationsState = async (idNotificacao: string): Promise<any> => {
        const notifications = await prisma.notificacao.updateManyAndReturn({
            where: {
                estado: "pendente"
            },
            data: {
                estado: "lida",
            },
        })
        return notifications as Array<NotificationDataProps>
    }

}