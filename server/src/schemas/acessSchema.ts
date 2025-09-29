import { error } from "console";
import z from "zod";

export const UserLoginSchema = z.object({
    email: z.email({ error: "Email inválido" }),
    senha: z.string({ error: "Senha inválida" }).min(8, { error: "A senha deve ter no mínimo 8 caracteres" })
})

export const UserRegisterSchema = z.object({
    nome: z.string({ error: "O nome só deve conter letras" }),
    email: z.email({ error: "Email inválido" }),
    senha: z.string({ error: "Senha inválida" }).min(8, { error: "A senha deve ter no mínimo 8 caracteres" }),
    senhaConfirmada: z.string({ error: "Senha confirmada inválida" }).min(8, { error: "A senha confirmada deve ter no mínimo 8 caracteres" })
})