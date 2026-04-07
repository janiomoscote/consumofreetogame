"use client"
import Link from "next/link"

export default function Signin() {
    return (
        <nav className="container bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
            <div className="flex items-center gap-10">
                <Link href="/">
                    <h1 className="text-2xl font-bold">Games Store</h1>
                </Link>
            </div>


            <div className="flex items-center gap-2">
                <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/auth/sign-up">Sign up!</Link>
                <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/auth/login">Login</Link>
            </div>
        </nav>
    )
}