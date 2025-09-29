import jwt from "jsonwebtoken"
import { PayloadProps } from "../interfaces/replyInterface"

import * as dotenv from 'dotenv'
dotenv.config()

export const generateToken = (payload : PayloadProps)=>{
    //retorna o token
    return jwt.sign(payload, process.env.JWT_SECRET || '', { expiresIn: '24h' })
}

export const verifyToken = (authToken : string)=>{
    //retorna o payload
    return jwt.verify(authToken, process.env.JWT_SECRET || '') as PayloadProps
}

