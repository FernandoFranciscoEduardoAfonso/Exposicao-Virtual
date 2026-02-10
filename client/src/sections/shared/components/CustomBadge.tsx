import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/components/ui/theme-provider";

type BadgeType = "success" | "error" | "warning" | "info"
export default function CustomBadge({ text, type }: { text: any, type: BadgeType }) {
    const { theme } = useTheme()

    return (
        <Badge className={` text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider
            ${type == "success" ? `${theme == 'light' ? 'bg-green-100' : 'bg-muted'} text-green-500` :
                type == "error" ? `${theme == 'light' ? 'bg-red-100' : 'bg-muted'} text-red-400` :
                    type == "warning" ? `${theme == 'light' ? 'bg-orange-100' : 'bg-muted'} text-orange-400` :
                        type == "info" && `${theme == 'light' ? 'bg-blue-100' : 'bg-muted'} text-blue-400`
            }
`}>
            {text}
        </Badge>
    )
}