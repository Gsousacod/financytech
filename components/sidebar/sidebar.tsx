"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Home,
  LogOut,
  Menu,
  Package,
  Settings,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="flex w-ful flex-col  bg-white">
      
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5 ">
          <TooltipProvider>
            <Link
              href="#"
              className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
            >
              <Package className="h-4 w-4 " />
              <span className="sr-only">Dashboard avatar</span>
            </Link>
            <DashboardSidebarNavLink
              name="Inicio"
              href="../pages/home"
              active={isActive("/pages/home")}
              className=""
            >
               <Home className="h-4 w-4 " />
            </DashboardSidebarNavLink>
           
            <DashboardSidebarNavLink
              name="Tarefas"
              href="../pages/tasks"
              active={isActive("/pages/tasks")}
              className=""
            >
              <Store className="h-4 w-4 " />
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              name="Configurações"
              href="../pages/settings"
              active={isActive("/pages/settings")}
              className=""
            >
              <Settings className="h-4 w-4 " />
            </DashboardSidebarNavLink>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <DashboardSidebarNavLink
              active={isActive("/page/login")}
              name="Sair"
              href="/logout"
              className=""
            >
              <LogOut className="" />
            </DashboardSidebarNavLink>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex  flex-col sm:gap-4 sm:py-4 sm:pl-14 ">
        <header className="sticky top-0 z-30 flex h-14 bg-blue-500 justify-between sm:justify-end items-center px-4 border-b  gap-4 sm:h-auto sm:border-0 sm:bg-transparent">
          
          <Sheet>
          
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Abrir/Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full items-center justify-center text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do Projeto</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Inicio
                </Link>

                <Link
                  href="#"
                  className="flex items-center  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Store className="h-5 w-5 transition-all" />
                  Pedidos
                </Link>

                <Link
                  href="#"
                  className="flex items-center  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="h-5 w-5 transition-all" />
                  Produtos
                </Link>

                <Link
                  href="#"
                  className="flex items-center  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  Clientes
                </Link>

                <Link
                  href="#"
                  className="flex items-center  gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings className="h-5 w-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <p className="px-4">Name</p>
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
      </div>
    </div>
  );
}

type DashboardSidebarGenericProps = {
  className: string;
  children: React.ReactNode;
  href: string;
  active: boolean;
  name: string;
};
export function DashboardSidebarNavLink({
  className,
  children,
  href,
  active,
  name,
}: DashboardSidebarGenericProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-950 transition-colors hover:text-foreground",
            active && "bg-teal-500",
            className
          )}
        >
          <span className="sr-only">{name}</span>
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent side="left">{name}</TooltipContent>
    </Tooltip>
  );
}