import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
const cookieName = process.env.NODE_ENV === "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token" ;

   const token =  await getToken({req:request , cookieName})
   const {pathname} = request.nextUrl;



const authRouts = ["/login" , "/register"]
const protectedRouts = ["/cart" , "/checkout" , "/profile"]


if(token && authRouts.includes(pathname)){
  return NextResponse.redirect(new URL("/", request.url))
}

if(!token && protectedRouts.includes(pathname)){
  return NextResponse.redirect(new URL("/login", request.url))
}
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/cart", '/login' , '/register'],
};