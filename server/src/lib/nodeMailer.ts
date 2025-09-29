import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import SendMailTransport from 'nodemailer/lib/sendmail-transport';


import * as dotenv from 'dotenv'
dotenv.config()

//substituir com as variaveis do .env
export const sendEMail = async (to: string, subject: string, html: string) => {

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465, //porta para a conexão smtp, geralmente 587 para TLS
            secure: true, //true para 465 (porta do smtp do gmail) e false para outras portas
            auth: {
                user: "geral.mukutu@gmail.com",
                pass: "ifjeefericsvlivd" //senha gerada no gmail para usar nesta aplicação
            },
        } as SMTPTransport.Options)

        const emailOptions: any = {
            from: "Plataforma Mukutu <geral.mukutu@gmail.com>",
            to: to,
            subject: subject,
            html: html,
            attachments: { //este é um array que permite adicionar anexos no conteúdo do email, como imagens, vídeos, áudios, pdf, ...
                filename: "Logotipo Mukutu", //nome do arquivo, que aparece quando o arquivo for baixado
                path: "@/../../client/src/sections/shared/assets/images/mukutuSite.png", //endereco da imagem no meu servidor
                cid: "logotipoMukutu" //content-id : é um identificador do anexo, e deve ser o mesmo ao cid definido no endereco do anexo(se for uma imagem é definido dentro do atributo src)
            }
        }

        const info = await transporter.sendMail(emailOptions);
        console.log('Email enviado com sucesso:', info.messageId);
        return { success: true, message: "Email enviado com sucesso", data: to };

    } catch (error) {
        console.error('Erro no envio do email:', error);
        return { success: false, message: "Erro no envio do email", data: error };
    }
}

export const gerarCodigoConfirmacao = (): string => {
    let codigo = '';
    for (let i = 0; i < 6; i++) {
        //por padrão o Math.random() gera um nº entre 0 e 1, neste caso vai multiplicar o número gerado por 10
        codigo += Math.floor(Math.random() * 10).toString(); //gerar um número entre 0 e 10( 0 <= n < 10)
    }
    return codigo;
}

export const definirTempoExpiracaoCodigo = (minutos: number): string => {
    const dataAtual = new Date();
    const tempoExpiracaoMs = minutos * 60 * 1000; // minutos em milissegundos
    const dataExpiracao = new Date(dataAtual.getTime() + tempoExpiracaoMs);

    const ano = dataExpiracao.getFullYear();
    const mes = (dataExpiracao.getMonth() + 1).toString().padStart(2, '0'); // Adiciona 1 ao mês pois os browsers consideram Janeiro como mês zero e formata com 2 dígitos
    const dia = dataExpiracao.getDate().toString().padStart(2, '0');
    const hora = dataExpiracao.getHours().toString().padStart(2, '0');
    const minuto = dataExpiracao.getMinutes().toString().padStart(2, '0');

    //o metodo padStart vai adicionar '0', se o tamanho da string for menor que 2

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}

