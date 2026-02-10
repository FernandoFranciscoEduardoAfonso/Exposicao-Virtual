import { Button } from "@/components/ui/button"
import Dropdown, { type GroupDropdown } from "@/sections/shared/components/Dropdown"
import { type ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import type { ReactElement } from "react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Exposition = {
    id: string,
    imagem: ReactElement<any, any>,
    nome: string
    status: "Aberta" | "Fechada" | any,
    acesso: "Público" | "Privado"
    inscritos: string
}


//Payment é um generico que representa a estrutura dos dados que serão exibidos na tabela.
// um generico é um tipo de dado definido no momento em que a função ou componente é utilizado, permitindo maior flexibilidade e reutilização do código.
export const columns: ColumnDef<Exposition>[] = [
    {
        accessorKey: "imagem",
        header: "Imagem"
    },
    {
        accessorKey: "nome",
        header: ({ column }) => {
            return (
                <Button className="-ml-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nome
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "status",
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button className="-ml-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "acesso",
        header: ({ column }) => {
            return (
                <Button className="-ml-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Acesso
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "inscritos",
        header: ({ column }) => {
            return (
                <Button className="-ml-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Inscritos
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "actions",
        header: () => <div className="sr-only text-right">Actions</div>,
        cell: ({ row }) => {
            const idExposicao = (row.original).id

            const groups: GroupDropdown[] = [
                {
                    index: 0,
                    items: [
                        {
                            text: "Ver reações",
                            link: `/exposicoes/${idExposicao}`,
                        },
                    ]
                },
                {
                    index: 1,
                    items: [
                        {
                            text: "Editar",
                            link: "nova",
                        },
                        {
                            text: "Eliminar",
                            color: "red",
                            onClick: () => { },
                        }
                    ]
                }
            ]

            return (
                <div className="text-right">
                    <Dropdown
                        alignContent="end"
                        direccion="vertical"
                        groups={groups}
                    />
                </div>
            )
        },
        enableGlobalFilter: false, // Esta coluna será ignorada na pesquisa
    },
]