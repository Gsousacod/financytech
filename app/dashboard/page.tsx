import LogoutButton from "@/components/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {    
    const session = await getServerSession();
   

    if(!session) {  
        redirect('/');
    }
    return (
        <>
        <div>
            Olá, {session?.user?.name}
        </div>
        <div >
            <LogoutButton />
        </div>
        <p>Seu token JWT: </p>
        </>
    )
}