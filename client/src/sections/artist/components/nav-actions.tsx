import {
  MoreHorizontal,
  type LucideIcon
} from "lucide-react"


import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavActions({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon,
    isPrimary?: boolean
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu className="gap-3">
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild
              className={`flex items-center w-full px-2 py-4.5 rounded-md shadow hover:brightness-97 ${item.isPrimary ? "bg-(--secondary-base) hover:bg-(--secondary-base) text-white hover:text-white active:text-white" : "bg-sidebar hover:bg-sidebar"} `}>
              <a
                href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
