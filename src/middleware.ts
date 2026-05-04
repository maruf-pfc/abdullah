import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "super_secret_fallback_key_for_development"
);

export async function middleware(req: NextRequest) {
  const url = req.nextUrl

  if (url.pathname.startsWith('/admin')) {
    // Exclude login page from middleware protection to avoid loop
    if (url.pathname === '/admin/login') {
      return NextResponse.next()
    }

    const token = req.cookies.get("admin_token")?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }

    try {
      await jwtVerify(token, JWT_SECRET)
      return NextResponse.next()
    } catch (err) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
