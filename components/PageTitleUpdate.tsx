"use client"; // Garante que o código só roda no cliente

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PageTitleUpdater = () => {
  const pathname = usePathname();

 
  
      const pageNames: Record<string, string> = {
        "/dashboard": "Início",
        "/dashboard/releases": "Lançamentos",
        "/dashboard/settings": "Configurações",
        "/dashboard/reports": "Relatórios",
      };
      console.log(pathname)
      
    
    

  return pageNames[pathname];
};

export default PageTitleUpdater;
