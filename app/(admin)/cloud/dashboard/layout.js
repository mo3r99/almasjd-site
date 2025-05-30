import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";

import './dashboard.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className="block md:hidden"/>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
