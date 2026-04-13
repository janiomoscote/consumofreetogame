"use client"
import { UserContext } from "../context/userContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Home() {

    const [user, setUser] = useState("");
    const setuser = useContext(UserContext);
    const router = useRouter()

    function handlerUser(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        setUser(e.target.value);
    }
    function handleLogin() {
        const newUser = {
            name: user,
            email: "jmoscote@ucompensar.edu.co",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmlvIE1vc2NvdGUiLCJlbWFpbCI6Imptb3Njb3RlQHVjb21wZW5zYXIuZWR1LmNvIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.G4BTc3KRG4a11tqNGaofPK7FJ2CW4KnnBpf2qBktG90"
        }
        setuser?.setUser(newUser)
        document.cookie = `token=${newUser.token}; path=/; max-age=86400` /*tiempo de validez 24 horas"*/
        router.push('/Dashboard')
    }
    return (

        <form className=" mx-5 ">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <input onChange={handlerUser} name="user" type="text" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                <button onClick={handleLogin} type="button" className="absolute end-1.5 bottom-1.5 text-white bg-black hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Login</button>
            </div>
        </form>

    );
}
