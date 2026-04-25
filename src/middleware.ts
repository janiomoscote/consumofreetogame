// src/proxy.ts
import { NextResponse, NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
    // Check if the 'token' cookie exists
    const token = request.cookies.get('token')?.value

    // If there's no token and they are trying to access the main page
    if (!token && request.nextUrl.pathname === '/') {
        // Redirect them to the login page
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// Optionally, configure which routes this proxy runs on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
