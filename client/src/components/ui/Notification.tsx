import { Bell } from "lucide-react"
import { Button } from "./button"
const Notification = () => {
    return (
        <Button className="shadow-none relative" variant="outline" size="icon">
            <Bell className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <span className="sr-only">Toggle theme</span>
            <span
                className="absolute top-2 right-2 size-2 bg-red-500 rounded-full  dark:border-slate-900"></span>
        </Button>
    )
}

export default Notification
