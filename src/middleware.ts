import { NextRequest, NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

const PUBLIC_PATHS = [
  "/login",
];

// Function to hash passwords consistently - must match the one in the API route
function hashPassword(password: string) {
  return CryptoJS.SHA256(password).toString();
}

export function middleware(req: NextRequest) {
  // Get the stored hash from cookie
  const authHashCookie = req.cookies.get("authHash");
  
  // Generate hash of the correct password from env
  const correctPasswordHash = hashPassword(process.env.NEXT_PUBLIC_PASSWORD as string);
  
  // Check if the hash in the cookie matches the expected hash
  const isAuthenticated = authHashCookie?.value === correctPasswordHash;

  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!isAuthenticated) {
    const url = new URL("/login", req.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|profile-image.jpg).*)"],
};