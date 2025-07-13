import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  if (request.nextUrl.pathname === '/hygiene') {
    return NextResponse.redirect(new URL('/classes/hygiene', request.url))
  }
  return NextResponse.redirect(new URL('/classes/sanatayn', request.url))
}
 
export const config = {
  matcher: ['/hygiene', '/sanatayn'],
}