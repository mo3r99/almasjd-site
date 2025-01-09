import { NextResponse } from "next/server";

import { auth } from "./auth";

export default async function middleware({req}) { 
    const session = await auth();

    if (req.nextUrl.pathname.startsWith('/cloud'))

    if (session?.user?.email !== 'm.rauf@almasjid.co.uk') {
        return NextResponse.redirect(new URL('/api/auth/error?error=AccessDenied', req.url));
    }
    
    return NextResponse.next();
}