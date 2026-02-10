import { FastifyReply, FastifyRequest } from "fastify";
import { PayloadProps, ReplyProps } from "../interfaces/replyInterface";
import { prisma } from "../database/prisma";
import { verifyToken } from "../lib/jwt";

import fastifyJwt from '@fastify/jwt';
//o fastifjwt vai permitir criar variaveis nas requisições

//Autenticar o usuário por meio do cookie
export const authCookieUsuario = async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply) => {
    let result: ReplyProps = { success: false, status: 400, message: "Falha na requisição" }//por padrão
    try {
        if (!request.cookies['access_token']) {
            result = { success: false, status: 401, message: "Nenhum cookie encontrado" }
            return reply.status(result.status).send(result);
        }
        const cookieAssinado = request.cookies['access_token'] as string

        // o método unsignCookie limpa a assinatura do Fastify
        const unsignedCookie = request.unsignCookie(cookieAssinado);

        // verifica se o cookie é válido
        const cookieLimpo = unsignedCookie.valid ? unsignedCookie.value : null;

        if (!cookieLimpo) {
            result = { success: false, status: 401, message: "Nenhum cookie encontrado" }
            return reply.status(result.status).send(result);
        }

        //verificar o token | o cookieLimpo é o token
        const payload = verifyToken(cookieLimpo) as PayloadProps
        if (!payload) {
            result = { success: false, status: 401, message: "Token inválido" }
            return reply.status(result.status).send(result);
        }

        // Aqui você pode armazenar o payload no request para uso posterior
        //o fastifjwt vai permitir criar variaveis nas requisições
        request.user = payload;

        // Se a autenticação for bem-sucedida, não envie uma resposta aqui
        // O fluxo continuará para o manipulador da rota        
    } catch (error) {
        console.log(error);
        const response: ReplyProps = { success: false, status: 401, message: "Não autenticado: Token inválido ou expirado." };
        return reply.status(response.status).send(response);
    }
};
