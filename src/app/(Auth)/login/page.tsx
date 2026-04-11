export default function LoginPage() {

    return (
        <form className="space-y-4">
            <input type="email" placeholder="Correo" className="w-full border p-2 rounded" />
            <input type="password" placeholder="Contraseña" className="w-full border p-2 rounded" />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
                Iniciar Sesión
            </button>
        </form>
    )
}