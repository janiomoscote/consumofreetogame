"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="container bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
      <div className="flex items-center gap-10">
      <Link href="/">
        <h1 className="text-2xl font-bold">Games Store</h1>
      </Link>

      <ul className="flex items-center gap-2">
        <li>
          <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"href="/platform">
          Plataforma
          </Link>
        </li>

         <li className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          <Link href="/genre">
          Categoria
          </Link>
        </li>

         <li className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
          <Link href="/publisher">
          Editorial
          </Link>
        </li>
      </ul>
      </div>
    </nav>
  )
}

