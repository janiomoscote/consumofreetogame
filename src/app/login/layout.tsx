// app/login/layout.tsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('');

    async function handleSubmit(formData: FormData) {
        // Aquí se llama a la Server Action
        setStatus('Enviando...');
        // ... lógica
        setStatus('¡Enviado!');
    }

    return (
        <div
            className="hiscreen flex items-center justify-center">
            <form className="bg-slate-800 p-10 rounded-2xl" action={handleSubmit}>
                <label htmlFor='title' className="font-bold text-sm text-green-400">Nombre</label>
                <input
                    className="border border-gray-400 p-2 w-full text-white rounded"
                    name="nombre" type="text" placeholder="Tu nombre" required />
                <label htmlFor='title' className="font-bold text-sm text-green-400">Apellido</label>
                <input
                    className="border border-gray-400 p-2 w-full text-white rounded"
                    name="apellido" type="text" placeholder="Tu apellido" required />
                <label htmlFor='title' className="font-bold text-sm text-green-400">Email</label>
                <input
                    className="border border-gray-400 p-2 w-full text-white rounded"
                    name="email" type="email" placeholder="Tu email" required />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    type="submit">Enviar</button>
                <p>{status}</p>
            </form>
        </div>
    );
}