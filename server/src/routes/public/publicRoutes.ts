import artClientController from "@/controllers/client/artController";
import roomClientController from "@/controllers/client/roomController";
import acessController from "@/controllers/shared/acessController";
import artPublicController from "@/controllers/shared/artController";
import filterController from "@/controllers/shared/filterController";
import recommendationController from "@/controllers/shared/recommendationController";
import { authCookieUsuario } from "@/middlewares/authCookieUsuario";
import { UserLoginSchema, UserRegisterSchema } from "@/schemas/acessSchema";
import { FastifyTypedInstance } from "@/types/FastifyTypedInstance";
import z from "zod";

export const publicRoutes = async (app: FastifyTypedInstance) => {
    //rota principal
    app.get("", {
        schema: {//permite adicionar informações na rota
            tags: ["Site"], //tag é um grupo de rotas
            description: "Rota inicial",
            response: { //documentar a resposta
                200: z.null().describe("Rota inicial"),
            },
        },

        // preHandler: authCookieUsuario //middleware de autenteticação
    }, async (request, reply) => {
        return reply.code(200).send()
    })

    // login e registro
    app.post("/acesso/:role/login", {
        schema: {
            tags: ["Site"],
            description: "Login user",
            body: UserLoginSchema, // validar a requisição
        }
    }, acessController.login)

    app.post("/acesso/:role/registar", {
        schema: {
            tags: ["Site"],
            description: "Register user",
            body: UserRegisterSchema, // validar a requisição
        }
    }, acessController.register)

    app.get('/acesso/dadosUsuario', { onRequest: authCookieUsuario }, acessController.getUserData) //verificar o cookie

    //rotas para enviar o código de verificação no email definido
    app.post('/acesso/autenticacao', acessController.sendVerificationCode)

    //rotas para buscar o codigo de verificação de email correspondente ao email definido
    app.get('/acesso/autenticacao/:email', acessController.getVerificationCode)

    //eliminar os códigos de verificação de email já expirados
    app.delete("/expiredEmailConfirmation", acessController.deleteExpiredEmailVerification)

    app.delete("/acesso/logout", {
        schema: {
            tags: ["Usuário"],
            description: "Logout Session",
            // preHandler: authCookieUsuario //middleware de autenteticação
        },
        // onRequest: authCookieUsuario
    }, acessController.logout)

    //teste
    app.get("/test", {
        schema: {
            tags: ["Test"],
            description: "Filter Arts",
        }
    }, recommendationController.getRecommendedArts)

    //Obras
    app.get('/obras', artPublicController.getAllArts)

    // Painel do artista
    app.get('/painel/obrasFavoritas', { onRequest: authCookieUsuario }, artClientController.getAllFavoritesArts)
    app.get('/painel/artistasFavoritos', { onRequest: authCookieUsuario }, artClientController.getAllFavoritesArtists)
    app.get('/painel/exposicoesInscritas', { onRequest: authCookieUsuario }, roomClientController.getAllAccessedRooms)

}