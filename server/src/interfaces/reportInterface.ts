export interface SendReportProps {
    idUsuario: string
    titulo: string,
    descricao: string,
    urlArquivo?: string,
    idTipoDenuncia: number
}

export interface ReportDataProps {
    idDenuncia: number 
    titulo: string
    descricao: string
    dataCriacao: Date
    dataAtualizacao: Date
    urlArquivo: string
    estado: string
    Usuario: any
    idUsuario: string
    TipoDenuncia: any,
    idTipoDenuncia: number
}
