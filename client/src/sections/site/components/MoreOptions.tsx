import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Button as ButtonHero } from "@heroui/button"

import { Book, Flag, MoreHorizontalIcon } from "lucide-react"

export default function MoreOptions() {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>Acões</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex gap-2">
              <Book />
              Guardar
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2">
              <Flag />
              Denunciar
            </DropdownMenuItem>
            {/* <DropdownMenuItem disabled>Download</DropdownMenuItem> */}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
