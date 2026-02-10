import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ModeToggle } from "@/components/ui/mode-toggle"
import Notification from "@/components/ui/Notification"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { AppSidebar } from "@/sections/artist/components/app-sidebar"
import LogotipoApp from "@/sections/shared/components/LogotipoApp"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-sidebar">
                <Header />
                <Content />
            </SidebarInset>
        </SidebarProvider>
    )
}

function Header() {
    const { open, openMobile, isMobile } = useSidebar()
    return (
        <header className={`bg-background shadow-[0_2px_2px_-1px_rgba(0,0,0,0.05) border-l border-b border-muted-foreground/10
                left-auto right-auto max-w-[inherit] flex h-16 shrink-0 items-center justify-between gap-2 z-50 fixed top-0 pr-4
                /* A largura será: 100% menos a largura da sidebar */
                ${(open && !isMobile) ? 'w-[calc(100%-var(--sidebar-width))]' : 'w-full'}
            `}>
            <div className="flex items-center gap-2 px-4">

                {
                    isMobile ?
                        (!openMobile) &&
                        <LogotipoApp /> :
                        (!open) &&
                        <LogotipoApp />
                }
                {
                    !open &&
                    <Separator
                        orientation="vertical"
                        className="ml-2 data-[orientation=vertical]:h-4"
                    />
                }

                <SidebarTrigger className="mx-1 z-999 border" />

                {
                    !isMobile &&
                    <>
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </>
                }

            </div>
            <div className="flex items-center gap-2">
                <Notification />
                <ModeToggle />
            </div>

        </header>
    )
}

function Content() {
    return (
        <main>
            <div className="mx-4 mb-4 mt-20">
                <Outlet />
            </div>
        </main>
    )
}
