import { prisma } from "@/database/prisma"
import { NotificationDataProps, SendNotificationProps } from "@/interfaces/notificationInterface"
import { ReportDataProps, SendReportProps } from "@/interfaces/reportInterface"

export class notification {
    sendReport = async (reportData: SendReportProps): Promise<any> => {
        const report = await prisma.denuncia.create({
            data: {
                titulo: reportData.titulo,
                descricao: reportData.descricao,
                urlArquivo: reportData.urlArquivo && reportData.urlArquivo,
                idUsuario: reportData.idUsuario,
                idTipoDenuncia: reportData.idTipoDenuncia
            },
        })
        return report as ReportDataProps
    }

    deleteReport = async (idDenuncia: number): Promise<any> => {

        //1º remover o arquivo relacionado a denuncia, (deve ter uma função para remover arquivos e deve ser chamada na controller)

        //2º remover a denuncia
        const report = await prisma.denuncia.delete({
            where: {
                idDenuncia
            },
        })
        return report as ReportDataProps
    }

    changeReportState = async (idDenuncia: number, estado: string): Promise<any> => {
        const report = await prisma.denuncia.update({
            where: {
                idDenuncia
            },
            data: {
                estado
            }
        })
        return report as ReportDataProps
    }
}