// import defineConfig from '@/../vite.config'

export const SERVER_PROTOCOL = 'http'
export const SERVER_HOST = 'localhost'
export const SERVER_PORT = 3333
export const SERVER_UPLOADS_URL = `/uploads/`


export const CLIENT_PROTOCOL = 'http'
export const CLIENT_HOST = 'localhost'
export const CLIENT_PORT = 8080 //a porta 80 para permitir usar a API FasmaPay
// export const CLIENT_PORT = 5173


//para que os dispositivos ligados na mesma rede tenham acesso ao servidor fastify, precisa-se alterar o SERVER_HOST para ip do pc na rede
// Ex:
// export const SERVER_HOST = '192.168.43.181'
// export const CLIENT_HOST = '192.168.43.181'

