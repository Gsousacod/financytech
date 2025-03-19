import { ChartFinancy } from "@/components/dashboard/chartFinancy";
import FinanceCards from "@/components/dashboard/financyCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {    
    const session = await getServerSession();
   

    // if(!session) {  
    //     redirect('/');
    // }
    return (
        <>
            <h1 className="text-2xl mb-2">Visão geral</h1>
            <FinanceCards />
            <div className="h-min w-1/3 mt-4">
                <ChartFinancy className=""/>

            </div>
        </>
       )
}