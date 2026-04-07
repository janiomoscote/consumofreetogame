import type { Metadata } from "next";
import "./globals.css";
import { UserProvider } from "./context/userContext";
import ContactForm from "./Formulario/Form";

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
      <body>
        <UserProvider>
          <main>
            {children}
            <ContactForm />
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
