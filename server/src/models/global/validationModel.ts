import axios from "axios"
import { prisma } from "../../database/prisma"


//validate user
export const existUserEmail = async (email: string) => {
    const exist = await prisma.usuario.findUnique({
        where: { email: email }
    })
    return exist ? true : false
}

export const existUserId = async (idUser: string, role: string) => {
    const exist = await prisma.usuario.findUnique({
        where: { idUsuario: idUser, Role: { descricao: role } }
    })
    return exist ? true : false
}

export const removeWhiteSpace = (texto: string) => {
    return String(texto).replaceAll(/[!@#\$%^&*]/g, "");
}

export const isValidRole = async (role: string) => {
    const exist = await prisma.role.findUnique({
        where: {
            descricao: role
        }
    })

    return exist ? true : false
}


//validar NIF
export const validateNif = async (nif: string) => {
    try {
        //validar o nif tanto colectivo ou singular com a api desevolvida por Edgar Singui
        const response: any = await axios.get(`https://consulta.edgarsingui.ao/consultar/${nif}/nif`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.data.error) {
            console.log(response)
            return { success: true, name: response.data.name, message: "NIF válido" }
        } else {
            console.log(response)
            return { success: false, name: null, message: "NIF inválido" }
        }

    } catch (error) {
        console.log(error)
        return { success: false, name: null, message: "Erro ao verificar o NIF" }
    }
}

//validar telefone
export const validateTelefone = async (telefone: string) => {
    try {
        //validar o telefone com a angola api
        const codigoPais = "+244" //de angola
        const response: any = await axios.get(`https://angolaapi.onrender.com/api/v1/validate/phone/${codigoPais}${telefone}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.data.operator) {
            console.log(response)
            return { success: true, message: "Telefone válido" }
        } else {
            console.log(response)
            return { success: false, message: "Telefone inválido" }
        }

    } catch (error) {
        console.log(error)
        return { success: false, message: "Erro ao verificar o telefone" }
    }
}






