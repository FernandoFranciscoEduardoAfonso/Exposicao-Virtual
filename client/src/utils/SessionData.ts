import type { ReplyProps } from "@/interfaces/replyInterface";
import { Axios } from "@/lib/axios";

//se o cookie for válido, retorna os dados do usuário
export const getUserData = async (): Promise<ReplyProps> => {
    try {
        const response: any = await Axios.get(`/acesso/dadosUsuario`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response.data

    } catch (error: any) {
        console.log(error.response.data)
        return error.response.data

    }
}
