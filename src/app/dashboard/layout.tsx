import type { Metadata } from "next";
import Navbar from "../../components/Navbar";


export const metadata: Metadata = {
  title: "Games Catalog",
  description: "Ejercicio de consulta de API con Nextjs",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar/>
      <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center">
      {children}
      </main>
    </>
  );
}