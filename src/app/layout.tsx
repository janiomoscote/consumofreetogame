import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Games from "../components/Games";


export const metadata: Metadata = {
  title: "Games Catalog",
  description: "Ejercicio de consulta de API con Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />


        <main className="container mx-auto h-[calc(100vh-7rem)] flex justify-center">

          {children}
        </main>
      </body>
    </html>
  );
}
