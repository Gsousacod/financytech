import { usePathname } from "next/navigation";

const PageTitleUpdater = () => {
    const pathname = usePathname();
    const pageNames: Record<string, string> = {
        "/dashboard": "Início",
        "/releases": "Lançamentos",
        "/settings": "Configurações",
        "/reports": "Relatórios",
        };
    return document.title = pageNames[pathname]; // Componente auxiliar, não precisa renderizar nada
};

export default PageTitleUpdater;
