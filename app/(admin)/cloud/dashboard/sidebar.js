import { Home, BookOpenCheck, School, FileText, BrainCog } from "lucide-react";

import { SidebarTrigger } from "@/components/ui/sidebar";

import Image from "next/image";

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
} from "@/components/ui/sidebar";
import { Link } from 'next-view-transitions'
import { SignOut } from "./sign-out";

import { auth } from "@/app/auth";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/cloud/dashboard",
    icon: Home,
  },
  {
    title: "Classes",
    url: "/cloud/dashboard/classes",
    icon: School,
  },
  {
    title: "Services",
    url: "/cloud/dashboard/services",
    icon: BrainCog,
  },
  {
    title: "Lessons",
    url: "/cloud/dashboard/lessons",
    icon: BookOpenCheck,
  },
  {
    title: "About",
    url: "/cloud/dashboard/about",
    icon: FileText,
  },
];

export async function AppSidebar() {
  const session = await auth();
  const name = session?.user?.name

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className='relative top-4'>
        <ul>
          <li className="flex gap-2 items-center">
            <Image src={'//wsrv.nl/?url=almasjid-site.s3.eu-north-1.amazonaws.com/logo.png&w=80&h=80'} width={40} height={40} alt="almasjid logo" unoptimized />
            <span className='truncate relative top-1'>
              <h2 className="font-semibold text-lg m-0 p-0">
                Al Masjid Cloud
              </h2>
              <p className="mt-0 text-sm relative bottom-1">{name}</p>
            </span>
          </li>
        </ul>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="h-[90%]">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ul>
          <li>
            <SidebarTrigger className="mb-4" />
          </li>
          <li className="flex gap-4 items-center">
            <SignOut />
            <span className="truncate text-sm relative right-2">Log Out</span>
          </li>
        </ul>
      </SidebarFooter>
    </Sidebar>
  );
}
