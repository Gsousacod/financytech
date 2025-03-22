"use client";
import { Children, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Bell, ClipboardList, Home, LogOut, Menu, Package, Settings, Store, Wallet } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import PageTitleUpdater from "../PageTitleUpdate";
import NotificationButton from "../header/NotificationButton";

type SidebarProps={
  children: React.ReactNode;
}
export default function Sidebar({children}:SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 flex flex-col border-r bg-background transition-all duration-300 bg-[#279b48] text-white",
          isSidebarOpen ? "w-52" : "w-14"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-start p-4">
          <Link href="/" className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            {isSidebarOpen && <span className="text-lg font-bold">FinancyTech</span>}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-start gap-2 ml-2 py-5 mt-8">
          <SidebarNavLink name="Início" href="/dashboard" active={isActive("/dashboard")} isSidebarOpen={isSidebarOpen}>
            <Home className="h-6 w-6" />
          </SidebarNavLink>
          <SidebarNavLink name="Lançamentos" href="/dashboard/releases" active={isActive("/dashboard/releases")} isSidebarOpen={isSidebarOpen}>
            <Wallet className="h-6 w-6" />
          </SidebarNavLink>
          <SidebarNavLink name="Realtórios" href="/dashboard/reports" active={isActive("/dashboard/reports")} isSidebarOpen={isSidebarOpen}>
            <ClipboardList className="h-6 w-6" />
          </SidebarNavLink>
          <SidebarNavLink name="Configurações" href="/dashboard/settings" active={isActive("/dashboard/settings")} isSidebarOpen={isSidebarOpen}>
            <Settings className="h-6 w-6" />
          </SidebarNavLink>
        </nav>

        <nav className="mt-auto flex flex-col items-start gap-2 px-2 py-5">
          <SidebarNavLink name="Sair" href="/logout" active={isActive("/logout")} isSidebarOpen={isSidebarOpen}>
            <LogOut className="h-6 w-6" />
          </SidebarNavLink>
        </nav>
      </aside>

    
      <div className={cn("flex flex-col flex-1 transition-all duration-300", isSidebarOpen ? "ml-52" : "ml-14")}>
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between  bg-white px-4 shadow-sm">
          
         <div className="flex justify-center items-center">
         <Button size="icon" variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="w-6 h-6" />
            <span className="sr-only">Abrir/Fechar menu</span>
          </Button>
              <p className="pl-4"> 
                <PageTitleUpdater />
                </p>
         </div>

       
          <div className="flex items-center gap-4">

            <p className="px-4">Nome</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <NotificationButton />
          </div>
        </header>

        {/* Conteúdo */}
        <main className="p-4 flex justify-center">
            <div className="w-5xl">
            {children}
            </div>
          </main>
      </div>
    </div>
  );
}

/* Componente de Link na Sidebar */
type SidebarNavLinkProps = {
  name: string;
  href: string;
  active: boolean;
  isSidebarOpen: boolean;
  children: React.ReactNode;
};

function SidebarNavLink({ name, href, active, isSidebarOpen, children }: SidebarNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 p-2 flex-1 transition-colors hover:bg-emerald-500 w-full",
        active && "border-white border-r-8  text-white"
      )}
    >
      {children}
      <span className={cn("text-sm transition-all", isSidebarOpen ? "opacity-100" : "opacity-0 hidden")}>{name}</span>
    </Link>
  );
}
