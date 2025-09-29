export interface SendNotificationProps {
    conteudo: string,
    idUsuario: string
}

export interface NotificationDataProps {
    idUsuario: string;
    conteudo: string;
    data: Date;
    idNotificacao: string;
    estado: string;
    isVisivel: boolean;
}
