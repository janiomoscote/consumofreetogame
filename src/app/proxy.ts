// proxy.ts
import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'


export function proxy(request: NextRequest) {
  // Example: Redirecting unauthenticated users
  console.log(`metodo: ${request.method}, url: ${request.nextUrl.pathname}`)

const response= NextResponse.next()

//CORS - Pemitir peticiones desde cualquier origen
response.headers.set('Access-Control-Allow-Origin', '*')
response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization') 

//Manejo de preflight requests (OPTIONS)
if (request.method === 'OPTIONS') {
  return new NextResponse(null, { status: 200, headers: response.headers })
}

// Ejemplo de autenticación simple
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      console.error(error)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  return NextResponse.next()
}

// Optional: Use a matcher to limit where the proxy runs
export const config = {
  matcher: '/dashboard/:path*',
}