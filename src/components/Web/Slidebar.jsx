import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
const Slidebar = () => {
    const items = [
        {
            title: "Home",
            url: "/home",
            icon: Home,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]

    return (
        <div>
            <Sidebar>
                <SidebarHeader />
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <div className="flex pb-2">
                                <img
                                    src="/src/assets/foxiom-logo2.png"
                                    alt="Logo"
                                    style={{ width: "24px", height: "24px", marginRight: "8px" }}
                                /><span className="text-lg">Foxiom</span>
                            </div>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton variant="outline" size="lg" asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar></div>
    )
}

export default Slidebar