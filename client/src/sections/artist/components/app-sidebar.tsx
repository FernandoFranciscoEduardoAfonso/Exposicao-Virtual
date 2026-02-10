import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal
} from "lucide-react"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar"
import { NavActions } from "@/sections/artist/components/nav-actions"
import { NavMain } from "@/sections/artist/components/nav-main"
import { NavSecondary } from "@/sections/artist/components/nav-secondary"
import { NavUser } from "@/sections/artist/components/nav-user"
import LogotipoApp from "@/sections/shared/components/LogotipoApp"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Obras",
      url: "obras",
      icon: BookOpen,
    },
     {
      title: "Exposições",
      url: "exposicoes",
      icon: Map,
    },
     {
      title: "Leilões",
      url: "leiloes",
      icon: Bot,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Registar nova obra",
      url: "#",
      icon: Frame,
      isPrimary: true
    },
    {
      name: "Abrir uma exposição",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Novo leilão",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton size="lg" asChild> */}
              <a href="/app-artista">
                <LogotipoApp />
              </a>
            {/* </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavActions projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
