import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Games from "../components/Games";


export const metadata: Metadata = {
  title: "Games Catalog",
  description: "Ejercicio de consulta de API con Nextjs",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        {/* Aquí puedes poner un logo común */}
        <h1 className="text-2xl font-bold text-center">Mi Aplicación</h1>
        {children}
      </div>
    </div>
  );
}
