import { usePathname } from "next/navigation";
import { useEffect } from "react";


const PageTitleUpdater = () => {
    
    const pathname = usePathname();
    
        // Mapeamento de rotas para nomes de páginas
        const pageNames: Record<string, string> = {
        "/dashboard": "Início",
        "/releases": "Lançamentos",
        "/settings": "Configurações",
        "/reports": "Relatórios",
        };

        
        
    

    return document.title = pageNames[pathname]; // Componente auxiliar, não precisa renderizar nada
};

export default PageTitleUpdater;
