import { prisma } from "@/database/prisma"
import { UserDataProps } from "@/interfaces/acessInterface";
import { ArtDataProps } from "@/interfaces/artInterface"
import { RoomDataProps } from "@/interfaces/roomInterface"
import { Prisma } from "@prisma/client";

interface FiltroAnoConclusaoProps {
    ano1: number,
    ano2: number,
}
export class Filter {

    //filtro de Obras
    filterArt = async (filtroCategoria?: Array<string>, filtroAnoConclusao?: FiltroAnoConclusaoProps, filtroEstrelas?: string, filtroPreco?: string, filtroEstado?: boolean): Promise<any> => {

        /*const arts = await prisma.obra.findMany({
            where: {
                //quanto a categoria
                //se não tiver categorias no filtro, buscar obras de todas as categorias
                Categoria: filtroCategorias.length == 0 ?
                    {} :
                    {
                        descricao: {
                            in: filtroCategorias
                        }
                    },

                //quanto ao estado 
                // (true:aberto ou false:fechado)
                isOpen: filtroEstado && filtroEstado, //só vai filtrar caso seja definido um estado em específico

                //quanto ao preco 
                // (gratis:preco igual a null ou pago:preco diferente de null)
                preco: filtroPreco && (
                    filtroPreco == "gratis" ?
                        null :
                        {
                            not: null
                        }),

                //quanto ao ano de conclusão da obra 
                anoConclusao: {
                    gte: filtroAnoConclusao.ano1,
                    lte: filtroAnoConclusao.ano1,
                }

                //quanto as estrelas
                //se não tiver estrelas no filtro, buscar obras sem e com estrelas

                // Obs: não é possivel usar AVG dentro do findMany
            }
        })*/

        // const categoriasFormatadas = filtroCategorias.map(categoria => `'${categoria}'`).join(', '); //transforma de ["a","b"] para 'a','b'

        //condicoes - toda condicao dentro do where e do having tem de ser do tipo Boolean
        const condicaoCategoria = (filtroCategoria == undefined) ?
            Boolean("true") :
            Prisma.sql`("Categoria"."descricao" IN (${Prisma.join(filtroCategoria)}))`;

        const condicaoPreco = (filtroPreco == undefined) ?
            Boolean("true") :
            (filtroPreco === "gratis" ? Prisma.sql`"Obra"."preco" IS NULL` : Prisma.sql`"Obra"."preco" IS NOT NULL`);

        const condicaoEstado = (filtroEstado == undefined) ?
            Boolean("true") :
            Prisma.sql`("Obra"."isOpen" = ${filtroEstado})`;

        const condicaoAnoConclusao = (filtroAnoConclusao == undefined) ?
            Boolean("true") :
            Prisma.sql`("Obra"."anoConclusao" BETWEEN ${filtroAnoConclusao.ano1} AND ${filtroAnoConclusao.ano2} )`

        const condicaoEstrelas = (filtroEstrelas == undefined) ?
            Boolean("true") :
            Prisma.sql`AVG("ClassificacaoObra"."estrelas") >= ${Number(filtroEstrelas)}`

        let arts = await prisma.$queryRaw`
            SELECT "Obra".*, "Categoria"."descricao", "ClassificacaoObra"."idObra", AVG("ClassificacaoObra"."estrelas") AS "estrelas"
            FROM "Obra" INNER JOIN "Categoria"
            ON  "Obra"."idCategoria" = "Categoria"."idCategoria"
            LEFT JOIN "ClassificacaoObra" 
            ON "Obra"."idObra" = "ClassificacaoObra"."idObra"
            
            WHERE

            ${condicaoCategoria} AND
            ${condicaoPreco} AND
            ${condicaoEstado} AND
            ${condicaoAnoConclusao}

            GROUP BY 
            "Obra"."idObra",
            "Categoria"."descricao",
            "ClassificacaoObra"."idObra"

            HAVING
                ${condicaoEstrelas}
            `

        //Prisma.join(filtroCategorias) - transforma de ['a','b'] para 'a','b'

        return arts as Array<ArtDataProps>
    }

    //filtro de Salas de Exposicões
    filterRoom = async (filtroQtdAcesso?: string, filtroVisibilidade?: string, filtroEstado?: boolean): Promise<any> => {

        // const rooms = await prisma.salaExposicao.findMany({
        //     where: {

        //         //quanto a visibilidade
        //         visibilidade: filtroVisibilidade && filtroVisibilidade,

        //         //quanto ao estado 
        //         // (true:aberto ou false:fechado)
        //         isOpen: filtroEstado && filtroEstado, //só vai filtrar caso seja definido um estado em específico

        //         //quanto a qtd de acesso
        //         //obs: só é possivel filtrar com sql puro
        //     }
        // })

        const condicaoVisibilidade = (filtroVisibilidade == undefined) ?
            Boolean("true") :
            Prisma.sql`("SalaExposicao"."visibilidade" = ${filtroVisibilidade})`;

        const condicaoEstado = (filtroEstado == undefined) ?
            Boolean("true") : Prisma.sql`("SalaExposicao"."isOpen" = ${filtroEstado})`;

        const condicaoQtdAcesso = (filtroQtdAcesso == undefined) ?
            Boolean("true") :
            Prisma.sql`COUNT("Acesso"."idAcesso") >= ${Number(filtroQtdAcesso)}`

        //CONVERSAO DE TIPOS EM SQL:
        //1 CAST(COUNT("Acesso"."idAcesso") AS integer) AS "acessos" (Conversão de Tipo usando a funcao CAST)
        //2 COUNT("Acesso"."idAcesso")::integer AS "acessos" (sintaxe do PostgreSQL)

        // let rooms = await prisma.$queryRaw`
        //     SELECT "SalaExposicao".*, "Acesso".*, CAST(COUNT("Acesso"."idAcesso") AS integer) AS "acessos"
        //     FROM "SalaExposicao" LEFT JOIN "Acesso"
        //     ON "SalaExposicao"."idSalaExposicao" = "Acesso"."idSalaExposicao"

        //     WHERE
        //     ${condicaoVisibilidade} OR
        //     ${condicaoEstado}

        //     GROUP BY 
        //     "SalaExposicao"."idSalaExposicao",
        //     "Acesso"."idSalaExposicao",
        //     "Acesso"."idAcesso"

        //     HAVING
        //     ${condicaoQtdAcesso} OR true

        //     `

        let rooms = await prisma.$queryRaw`
           SELECT
            "SalaExposicao".*,
            CAST(COUNT("Acesso"."idAcesso") AS INTEGER) AS "acessos",
            CAST(JSON_AGG(
                JSON_BUILD_OBJECT(
                    'idAcesso', "Acesso"."idAcesso",
                    'modo', "Acesso"."modo",
                    'idUsuario', "Acesso"."idUsuario"
                )
                ) AS JSONB) AS "Acesso"
            FROM
                "SalaExposicao"
            LEFT JOIN
                "Acesso" ON "SalaExposicao"."idSalaExposicao" = "Acesso"."idSalaExposicao"
            WHERE
                ${condicaoVisibilidade}
                AND ${condicaoEstado}
            GROUP BY
                "SalaExposicao"."idSalaExposicao"
            HAVING
                ${condicaoQtdAcesso}
           
            `


        return rooms as RoomDataProps[]
    }

    //filtro de Artistas
    filterArtist = async (filtroQtdSalas?: string, filtroVerificacao?: boolean): Promise<any> => {

        const condicaoVerificacao = (filtroVerificacao == undefined) ?
            Boolean("true") :
            Prisma.sql`("Usuario"."isVerificado" = ${filtroVerificacao})`;

        const condicaoQtdSalas = (filtroQtdSalas == undefined) ?
            Boolean("true") :
            Prisma.sql`COUNT("SalaExposicao"."idSalaExposicao") >= ${Number(filtroQtdSalas)}`

        let artists = await prisma.$queryRaw`
            SELECT "Usuario".*, CAST(COUNT("SalaExposicao"."idSalaExposicao") AS integer) AS "salas"
            FROM "Usuario" LEFT JOIN "SalaExposicao"
            ON "Usuario"."idUsuario" = "SalaExposicao"."idUsuario"
            
            WHERE
            ${condicaoVerificacao}

            GROUP BY 
            "Usuario"."idUsuario",
            "SalaExposicao"."idSalaExposicao"
           
            HAVING
            ${condicaoQtdSalas}
            `

        return artists as UserDataProps[]
    }
}

// As pesquisas de obras poderam incluir o titulo, a descricao, o preco, autor, anoConclusao...

// gt: Greater than (Maior que) >

// gte: Greater than or equal (Maior ou igual a) >=

// lt: Less than (Menor que) <

// lte: Less than or equal (Menor ou igual a) <=

// equals: Igual a =

// not: Não é igual a !=