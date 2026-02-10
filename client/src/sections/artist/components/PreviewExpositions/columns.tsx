import { type ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}


//Payment é um generico que representa a estrutura dos dados que serão exibidos na tabela.
// um generico é um tipo de dado definido no momento em que a função ou componente é utilizado, permitindo maior flexibilidade e reutilização do código.
export const columns: ColumnDef<Payment>[] = [
    {
        id: "index",
        // 1. Usamos accessorFn para retornar o index. 
        // Isso dá à tabela um valor numérico para ordenar.
        accessorFn: (_, index) => index + 1,
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="-ml-2"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    #
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        // 2. No cell, usamos o valor calculado pelo accessorFn
        cell: ({ getValue }) => <div className="text-center w-4">{getValue() as number}</div>,
        enableSorting: true,
    },
    {

        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button className="-ml-2"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="h-4 w-4" />
                </Button>
            )
        },
    },
    {
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
        accessorKey: "amount",
        header: () => <div>Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("pt-ao", {
                style: "currency",
                currency: "AOA",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },

    {
        id: "actions",
        header: () => <div className="sr-only text-right">Actions</div>,
        cell: ({ row }) => {
            const payment = row.original

            return (
                <div className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy payment ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View customer</DropdownMenuItem>
                            <DropdownMenuItem>View payment details</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        },
        enableGlobalFilter: false, // Esta coluna será ignorada na pesquisa
    },
]