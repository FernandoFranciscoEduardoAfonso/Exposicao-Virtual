import { FastifyReply, FastifyRequest } from "fastify";
import { ReplyProps } from "../interfaces/replyInterface";
import { prisma } from "../database/prisma";
import { verifyToken } from "../lib/jwt";

import fastifyJwt from '@fastify/jwt';
//o fastifjwt vai permitir criar variaveis nas requisições

//Autenticar o usuário por meio do cookie
export const authCookieUsuario = async (request: FastifyRequest<{ Body: any }>, reply: FastifyReply) => {
    try {
        const { access_token } = request.cookies;
        // access_token - é o nome do cookie criado ao fazer login
        console.log("Token: " + access_token)

        if (!access_token) {
            const response: ReplyProps = { success: false, status: 401, message: "Não autenticado: Token ausente." };
            return reply.status(response.status).send(response);
        } else {
            // Verificar se o token é válido, se for vai retornar o payload
            const payload = verifyToken(access_token)

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
