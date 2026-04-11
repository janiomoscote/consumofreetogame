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
<<<<<<< HEAD
      </div>
<<<<<<< HEAD

      <div className="flex items-center gap-2">
                <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/auth/sign-up">Sign up!</Link>
                <Link className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50" href="/auth/login">Login</Link>
            </div>
=======
>>>>>>> parent of af47792 (Add contact form and server action for form submission)
=======
>>>>>>> parent of 4206e30 (Liberación de los cambios pendientes)
    </nav>
  )
}

