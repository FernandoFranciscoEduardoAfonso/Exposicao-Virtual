import { FastifyReply, FastifyRequest } from "fastify";
import { ReplyProps } from "../interfaces/replyInterface";
import { prisma } from "../database/prisma";
import { verifyToken } from "../lib/jwt";

import fastifyJwt from '@fastify/jwt';
//o fastifjwt vai permitir criar variaveis nas requisições

//Autenticar o usuário por meio do token enviado, usando o LocalStorage ou SessionStorage
export const authUsuario = async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply) => {
    try {
        const { authorization } = request.headers;

        const [authType, authToken]: any = authorization?.split(' ')

        if (authType !== "Bearer" || !authorization) {
            const response: ReplyProps = { success: false, status: 401, message: "Não autenticado: Token inválido ou ausente." };
            return reply.status(response.status).send(response);

        } else {
            // Verificar se o token é válido, se for vai retornar o payload
            const payload = verifyToken(authToken)

            //verificar se o usuario existe na base dados
            const user = await prisma.usuario.findUnique({ where: { idUsuario: payload.idUsuario } })

            if (!payload || !user) {
                const response: ReplyProps = { success: false, status: 401, message: "Não autenticado: Usuário não encontrado." };
                return reply.status(response.status).send(response);
            }

            // Aqui você pode armazenar o payload no request para uso posterior
            //o fastifjwt vai permitir criar variaveis nas requisições
            request.user = payload;

            // Se a autenticação for bem-sucedida, não envie uma resposta aqui
            // O fluxo continuará para o manipulador da rota        
        }

    } catch (error) {
        console.log(error);
        const response: ReplyProps = { success: false, status: 401, message: "Não autenticado: Token inválido ou expirado." };
        return reply.status(response.status).send(response);
    }
};
