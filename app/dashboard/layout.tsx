
import Sidebar from "@/components/sidebar/sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full">
      <div
        className="w-full h-full"
      >
        <Sidebar>
            {children}
        </Sidebar>
       
      </div>
    </div>
  );
}
