import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, MoreVertical, type LucideIcon } from "lucide-react";
import { type MouseEventHandler } from "react";
import { Link } from "react-router-dom";

export type GroupDropdown = {
    index: number,
    items: ItemDropdown[]
}
export type ItemDropdown = {
    text: string,
    icon?: LucideIcon,
    color?: string
    link?: string,
    onClick?: MouseEventHandler<HTMLDivElement> | undefined,
}
export const Dropdown = ({ groups, direccion, alignContent }: { groups: GroupDropdown[], direccion: "vertical" | "horizontal", alignContent: "end" | "center" | "start" }) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-8 w-8 p-0 bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground">
                        <span className="sr-only">Open menu</span>
                        {
                            direccion == "vertical" ?
                                <MoreVertical className="h-4 w-4" /> :
                                <MoreHorizontal className="h-4 w-4" />
                        }
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={alignContent}>
                    {
                        groups.flatMap((group) => {
                            return <>
                                {
                                    group.items.map((item, index) => {
                                        return item.link ?
                                            <DropdownMenuItem>
                                                <Link to={item.link} className={`flex gap-2 size-full ${item.color && `text-${item.color}-400`}`} >
                                                    {item.icon && <item.icon className={`${item.color ? `text-${item.color}-400` : `text-muted-foreground`}`} />}
                                                    <span>{item.text}</span>
                                                </Link>
                                            </DropdownMenuItem> :
                                            <DropdownMenuItem onClick={item.onClick ? item.onClick : () => { }}
                                                className={`flex gap-2 size-full ${item.color && `text-${item.color}-400`}`}
                                            >
                                                {item.icon && <item.icon className={`${item.color ? `text-${item.color}-400` : `text-muted-foreground`}`} />}
                                                <span>{item.text}</span>
                                            </DropdownMenuItem>
                                    })
                                }
                                {
                                    // Não mostrar o separator no ultimo group
                                    group.index != groups.length - 1 &&
                                    <DropdownMenuSeparator />
                                }
                            </>
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Dropdown