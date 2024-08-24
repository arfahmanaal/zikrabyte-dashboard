import { redirect } from 'next/dist/server/api-utils';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup';
  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
  if(path === '/' && token){
    console.log("not signed in and you are at homepage so no redirection");
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl));
  }
  if(path === '/' && !token){
    console.log("not signed in and want to go back to hompage so go ..");
    return NextResponse.next();
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/login',
    '/signup'
  ],
};
