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
    matcher: ['/'], // Only runs proxy on the main page
}
