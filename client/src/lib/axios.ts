import { SERVER_HOST, SERVER_PORT } from "@/utils/serverInfo";
import axios from "axios"

//Em desenvolvimento
export const Axios = axios.create({
    baseURL: `http://${SERVER_HOST}:${SERVER_PORT}/`,
    withCredentials: true,             // Garante o envio de cookies automaticamente
});
//Em produção

