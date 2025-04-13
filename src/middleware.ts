import { NextResponse, type NextRequest } from "next/server"
import { auth } from "./auth"

const protectedRoutes = ["/profile"]

export default async function middleware(request:NextRequest) {
    const session = await auth()
    const {pathname} = request.nextUrl

    const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route))

    if(isProtectedRoute && !session?.user){
        return NextResponse.redirect(new URL("/login",request.url))
    }

    NextResponse.next()
}