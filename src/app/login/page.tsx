"use client"
import { UserContext } from "../context/userContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {
    const [status, setStatus] = useState('');
    const setuser = useContext(UserContext);
    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        setStatus('Enviando...');
        
        // Extract data from the form
        const nombre = formData.get("nombre") as string;
        const apellido = formData.get("apellido") as string;
        const email = formData.get("email") as string;

        // Create the new user object
        const newUser = {
            name: `${nombre} ${apellido}`,
            email: email, // This will now take the email they ACTUALLY type!
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibm9tYnJlIjoiSmFuaW8iLCJhcGVsbGlkbyI6Ik1vc2NvdGUiLCJlbWFpbCI6Imptb3Njb3RlQHVjb21wZW5zYXIuZWR1LmNvIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.89UgxTHabNxIPEh53RzhtgtBxd7Kp0MyCmyd0in3Pt8"
        }
        
        // Guarantee the user is saved before we reload the page
        localStorage.setItem("user", JSON.stringify(newUser));
        document.cookie = `user=${JSON.stringify(newUser)}; path=/; max-age=86400`
        document.cookie = `token=${newUser.token}; path=/; max-age=86400`
        
        setuser?.setUser(newUser)
        
        setStatus('¡Logueado! Redirigiendo...');
        
        // Now it is 100% safe to redirect
        router.push('/')
        router.refresh() // This tells Next.js to re-run the server components and middleware!
    }

    return (
        <div className="flex items-center justify-center pt-10">
            <form className="bg-slate-800 p-10 rounded-2xl w-96" action={handleSubmit}>
                <label className="font-bold text-sm text-green-400">Nombre</label>
                <input
                    className="border border-gray-400 p-2 w-full text-black rounded mb-4"
                    name="nombre" type="text" placeholder="Tu nombre" required />
                
                <label className="font-bold text-sm text-green-400">Apellido</label>
                <input
                    className="border border-gray-400 p-2 w-full text-black rounded mb-4"
                    name="apellido" type="text" placeholder="Tu apellido" required />
                
                <label className="font-bold text-sm text-green-400">Email</label>
                <input
                    className="border border-gray-400 p-2 w-full text-black rounded mb-4"
                    name="email" type="email" placeholder="Tu email" required />
                
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
                    type="submit">Enviar</button>
                    
                {status && <p className="text-white mt-4 text-center">{status}</p>}
            </form>
        </div>
    );
}
