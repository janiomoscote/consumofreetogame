// proxy AKA middleware
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const token = request.cookies.get('session-token')?.value;

    // Rutas públicas (login, registro, home, etc)
    const publicPaths = ['/', '/login', '/register'];
    if (publicPaths.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    // Si no está autenticado, redirige a login
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Aquí podrías agregar lógica para roles, expiración de sesión, etc.
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login'],
};