import acessController from "@/controllers/shared/acessController";
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
    app.post("/acess/:role/login", {
        schema: {
            tags: ["Site"],
            description: "Login user",
            body: UserLoginSchema, // validar a requisição
        }
    }, acessController.login)

    app.post("/acess/:role/register", {
        schema: {
            tags: ["Site"],
            description: "Register user",
            body: UserRegisterSchema, // validar a requisição
        }
    }, acessController.register)

    app.delete("/logout", {
        schema: {
            tags: ["Usuário"],
            description: "Logout Session",
            preHandler: authCookieUsuario //middleware de autenteticação
        }
    }, acessController.logout)

    //teste
    app.get("/test", {
        schema: {
            tags: ["Test"],
            description: "Filter Arts",
        }
    }, recommendationController.getRecommendedArts)
}