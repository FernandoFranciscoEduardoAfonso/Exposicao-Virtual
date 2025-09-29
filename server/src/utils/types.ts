import { PayloadProps } from '@/interfaces/replyInterface'
import { JWT } from '@fastify/jwt'


declare module 'fastify' {
  interface FastifyRequest {
    jwt: JWT
  }
  export interface FastifyInstance {
    authenticate: any
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: PayloadProps
  }
}

// adicionar o campo 'user' na interface de Request
declare module 'fastify' {
  interface FastifyRequest {
    user: PayloadProps
  }
}