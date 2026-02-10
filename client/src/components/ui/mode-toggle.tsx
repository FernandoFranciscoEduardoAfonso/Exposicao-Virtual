import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "./theme-provider"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    return (
        <Button className="shadow-none" variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {
                theme == "light" ?
                    <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:rotate-0" /> :
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            }
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}