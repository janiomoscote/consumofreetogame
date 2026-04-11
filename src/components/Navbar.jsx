"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="container rounded-md  bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
      <div className="flex items-center gap-10">
        <Link href="/">
          <h1 className="text-3xl font-bold">Libertad De Jugar</h1>
        </Link>

        <ul className="flex items-center gap-2">
          <li>
            <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/platform">
              Plataforma
            </Link>
          </li>

          <li>
            <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/genre">
              Categoria
            </Link>
          </li>

          <li>
            <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/publisher">
              Editorial
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-2">
        <Link className="bg-green-300 text-black px-4 py-2 rounded hover:bg-blue-600" href="/auth/sign-up">Registro</Link>
        <Link className="bg-green-300 text-black px-4 py-2 rounded hover:bg-blue-600" href="/auth/login">Ingreso</Link>
      </div>

    </nav>
  )
}

