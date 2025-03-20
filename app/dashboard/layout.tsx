
import Sidebar from "@/components/sidebar/sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen bg-[#f1f3ee]">
        <Sidebar>
            
            {children}
           
        </Sidebar>
    </div>
  );
}
