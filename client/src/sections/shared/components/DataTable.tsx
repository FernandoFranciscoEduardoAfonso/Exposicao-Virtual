import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type VisibilityState,
} from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@heroui/input"
import { Search } from "lucide-react"
import { useRef, useState } from "react"
import CustomBadge from "./CustomBadge"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    title?: string
    description?: string
}

export function DataTable<TData, TValue>({
    columns,
    data,
    title,
    description
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [globalFilter, setGlobalFilter] = useState<string>("")

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters, // Filtro por coluna
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter, // Filtro de todas as colunas
        onColumnVisibilityChange: setColumnVisibility,
        //Número de linhas por página
        initialState: {
            pagination: {
                pageSize: 10, //o padrão é 10
            },
        },
        state: {
            sorting,
            columnFilters,
            globalFilter,
            columnVisibility,
        },
    })

    const searchRef = useRef<HTMLInputElement>(null); //o useRef não dispara outra renderização, o onchange sim
    return (
        <div className="card-border bg-background p-6 rounded-md shadow-sm hover:shadow-md transition-shadow">
            <div>
                <h4 className="text-base font-bold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex items-center py-4">
                {/* <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                /> */}

                <div className="w-md relative">
                    <Search className={`${searchRef.current?.value?.length as any > 0 ? "hidden" : "absolute z-2 right-2 top-2 text-gray-400 text-[18px]"}`} />
                    <Input ref={searchRef} type="search"
                        placeholder="Pesquisar em todos os campos..."
                        // 1. Usamos o estado global da tabela em vez de uma coluna específica
                        value={(table.getState().globalFilter as string) ?? ""}
                        // 2. Aplicamos o filtro globalmente
                        onChange={(event) => table.setGlobalFilter(event.target.value)}
                        className="w-full"
                    />
                </div>


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Colunas
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id} className="bg-(--secondary-base) hover:bg-(--secondary-base) hover:brightness-100">
                                {/* Coluna de numeração */}
                                {/* <TableHead className="text-white">
                                    #
                                </TableHead> */}
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="text-white [&_button]:hover:text-white [&_button]:hover:bg-(--secondary-base) [&_button]:hover:brightness-125">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, index) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {/* <TableCell>
                                        {index + 1 + (table.getState().pagination.pageIndex * table.getState().pagination.pageSize)}
                                    </TableCell> */}
                                    {row.getVisibleCells().map((cell) => {
                                        const textoColuna = cell.getValue()
                                        const child = cell.column.id == "actions" ?
                                            flexRender(cell.column.columnDef.cell, cell.getContext()) :
                                            cell.column.id == "status" ?
                                                <CustomBadge text={flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    type={textoColuna == "Aberto" ? 'success' : 'error'} /> :
                                                cell.getValue() as any
                                        return (
                                            (
                                                <TableCell key={cell.id}>
                                                    {child}
                                                </TableCell>
                                            )
                                        )
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Página {table.getState().pagination.pageIndex + 1} de{" "}
                    {table.getPageCount()} {table.getPageCount() === 1 ? "página" : "páginas"}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>

        </div >

    )
}