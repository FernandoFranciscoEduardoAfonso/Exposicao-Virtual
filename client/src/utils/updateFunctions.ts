import { Axios } from "@/lib/axios"

//funções de atualização

//eliminar os códigos de verificação de email já expirados
export const deleteExpiredEmailConfirmation = async () => {
    try {
        await Axios.delete(`/expiredEmailConfirmation`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

    } catch (error: any) {
        if (error.response) {
            const err = error.response
            console.log(err.data)
        } else {
            console.log(error.message)
        }
    }
}

//eliminar os códigos de verificação de email já expirados
export const deleteExpiredConviteAcesso = async () => {
    try {
        await Axios.delete(`/expiredConviteAcesso`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

    } catch (error: any) {
        if (error.response) {
            const err = error.response
            console.log(err.data)
        } else {
            console.log(error.message)
        }
    }
}