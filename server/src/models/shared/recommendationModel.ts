import { prisma } from "@/database/prisma"
import { ArtDataProps } from "@/interfaces/artInterface"
import { Prisma } from "@prisma/client";
import { Acess } from "./acessModel";
import { UserDataProps } from "@/interfaces/acessInterface";

export class Recommendation {

    //idUsuario - id do cliente, que virá do payload (request.user)
    getRecommendedArts = async (idUsuario: string | null): Promise<any> => {
        let recommendedArts
        const condicaoIsOpen = Prisma.sql`("Obra"."isOpen" = true)`;

        //se o cliente estiver logado - buscar as obras das categorias preferidas do cliente
        if (idUsuario) {
            const _ = new Acess()
            const usuario = await _.getUserdataWithId(idUsuario)

            if (usuario) {
                const preferencias = usuario.PerfilUsuario?.preferencias
                const condicaoCategoria = Prisma.sql`("Categoria"."descricao" IN (${Prisma.join(preferencias)}))`;

                recommendedArts = await prisma.$queryRaw`
                SELECT "Obra".*,
                CAST(AVG("ClassificacaoObra"."estrelas") AS decimal) AS "estrelas",
                "Categoria"."descricao" AS "categoria"
                FROM "Obra" INNER JOIN "ClassificacaoObra"
                ON "Obra"."idObra" = "ClassificacaoObra"."idObra" 
                INNER JOIN "Categoria"
                ON "Obra"."idCategoria" = "Categoria"."idCategoria" 

                WHERE
                ${condicaoIsOpen} AND
                ${condicaoCategoria}

                GROUP BY 
                "Obra"."idObra",
                "Categoria"."descricao"

                ORDER BY 
                "estrelas" DESC

                LIMIT 5
                `
            }



        } else {
            recommendedArts = await prisma.$queryRaw`
            SELECT "Obra".*, 
            CAST(AVG("ClassificacaoObra"."estrelas") AS decimal) AS "estrelas",
            "Categoria"."descricao" AS "categoria"
            FROM "Obra" INNER JOIN "ClassificacaoObra"
            ON "Obra"."idObra" = "ClassificacaoObra"."idObra"
            INNER JOIN "Categoria"
            ON "Obra"."idCategoria" = "Categoria"."idCategoria" 


            WHERE
            ${condicaoIsOpen}

            GROUP BY 
            "Obra"."idObra",
            "Categoria"."descricao"

            ORDER BY 
            "estrelas" DESC

            LIMIT 5
            `
        }


        return recommendedArts as Array<ArtDataProps>
    }

    getRecommendedArtists = async (): Promise<any> => {
        let recommendedArtists
        const condicaoPermissao = Prisma.sql`("Usuario"."estado" = true)`;
        const condicaoRole = Prisma.sql`("Role"."descricao" = 'artist')`;
        const condicaoVerificacao = Prisma.sql`("Usuario"."isVerificado" = true)`;

        //tanto se o cliente estiver logado ou não - buscar os artistas verificados e com as maiores médias de estrelas
        recommendedArtists = await prisma.$queryRaw`
            SELECT "Usuario".*, 
            CAST(AVG("ClassificacaoArtista"."estrelas") AS decimal) AS "estrelas"
            FROM "Usuario" INNER JOIN "ClassificacaoArtista"
            ON "Usuario"."idUsuario" = "ClassificacaoArtista"."idUsuario"
            INNER JOIN "Role"
            ON "Usuario"."idRole" = "Role"."idRole" 

            WHERE
            ${condicaoRole} AND
            ${condicaoPermissao} AND
            ${condicaoVerificacao}

            GROUP BY 
            "Usuario"."idUsuario",
            "Role"."descricao"

            ORDER BY 
            "estrelas" DESC

            LIMIT 5
            `

        return recommendedArtists as Array<UserDataProps>
    }
}