import { FastifyBaseLogger, FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";


//Criamos o type FastifyTypedInstance e atribuimos a ele o type FastifyInstance junto com alguns types genericos
export type FastifyTypedInstance = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    FastifyBaseLogger,
    ZodTypeProvider
    //em de usar FastifyTypeProviderDefault, que é o padrão do Fastify, usamos ZodTypeProvider, isso vai permitir validar as requisições e respostas com o Zod
>