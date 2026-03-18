"use client"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between items-center px-20 p-3">
      <Link href="/">
        Todos
      </Link>

      <ul>
        <li>
          <Link href="/platform">
          Plataforma
          </Link>
        </li>

         <li>
          <Link href="/genre">
          Categoria
          </Link>
        </li>

         <li>
          <Link href="/publisher">
          Editorial
          </Link>
        </li>
      </ul>
    </nav>
  )
}

