import { UserLoginSchema, UserRegisterSchema } from "@/schemas/acessSchema";
import z from "zod";

export type UserLoginProps = z.infer<typeof UserLoginSchema>
export type UserRegisterProps = z.infer<typeof UserRegisterSchema>
