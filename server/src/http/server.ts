import fastify from 'fastify'
import fastifyCors from '@fastify/cors';
import { validatorCompiler, serializerCompiler, jsonSchemaTransform } from "fastify-type-provider-zod"
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { allRoutes } from '@/routes/@allRoutes';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import fjwt, { FastifyJWT } from '@fastify/jwt'
import fCookie from '@fastify/cookie'

import * as dotenv from 'dotenv'
dotenv.config()

// const app = fastify({ logger: true })
const app = fastify().withTypeProvider<ZodTypeProvider>()

async function setupApp() {
  app.setValidatorCompiler(validatorCompiler) //validatorCompiler -> serve para validar os dados de entrada nas requisições
  app.setSerializerCompiler(serializerCompiler) //serializerCompiler -> serve para validar os dados de saida nas respostas

  // Habilitar CORS nas requisições http
  //Em desenvolvimento
  await app.register(fastifyCors, {
    // origin: '*', // Permite requisições de qualquer origem
    // Outras opções de configuração:
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    origin: 'http://localhost:8080', // URL do seu frontend
    credentials: true,               // Permite que o navegador envie cookies
  });

  // Em produção
  // app.register(fastifyCors, {
  //   // Permite requisições de origin válidas
  //   origin: (origin: any, callback) => {
  //     const allowedOrigins = ['https://mukutu.com', 'https://dominioemproducao'];
  //     if (allowedOrigins.includes(origin) || !origin) {
  //       callback(null, true);// Permitir a origem
  //     } else {
  //       callback(new Error('Not allowed by CORS'), false);// Negar a origem
  //     }
  //   },
  //   // Outras opções de configuração:
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  //   allowedHeaders: ['Authorization', 'Content-Type'],
  // });


  // cookies
  await app.register(fCookie, {
    secret: process.env.JWT_SECRET || '',
    hook: 'onRequest',
  })

  // jwt
  await app.register(fjwt, { secret: process.env.JWT_SECRET || '' })

  //Confifuração do Swagger
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "Api | Sala de Exposição Virtual",
        version: "1.0.0",
        description: "Sala de Exposição Virtual para os Desenhistas",
      }
    },
    transform: jsonSchemaTransform //transforma o schema dos parametros das requisições em formato json
  })

  //criação de middleware para gerir o jwt e o cookie
  app.addHook('preHandler', (req, res, next) => {
    req.jwt = app.jwt
    return next()
  })

  await app.register(fastifySwaggerUi, {
    routePrefix: "/docs"
  })

  //busca todas as rotas
  await app.register(allRoutes)
}

const startServer = async () => {
  await setupApp(); // Inicializa os plugins antes do listen

  //PORT é a porta definida pelo render(ou outro hospedeiro), se tiver uma, vai ser usada e se não tiver vai usar a porta 5555
  app.listen({ port: process.env.PORT ? Number(process.env.PORT) : 3333, host: "0.0.0.0" }, (error, address) => {
    if (error)
      console.log(`Exists an error: ${error}`)

    console.log(`Server is running on ${address}`)
    // ConectDB()
  })
}

startServer()


export default app