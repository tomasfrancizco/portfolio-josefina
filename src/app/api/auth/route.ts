import { NextResponse, NextRequest } from "next/server";
import CryptoJS from 'crypto-js';

// Function to hash passwords consistently
function hashPassword(password: string) {
  return CryptoJS.SHA256(password).toString();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body;

    // Hash the provided password
    const passwordHash = hashPassword(password);
    
    // Hash the correct password from env
    const correctPasswordHash = hashPassword(process.env.NEXT_PUBLIC_PASSWORD as string);

    if (passwordHash === correctPasswordHash) {
      const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

      // Store the hash of the correct password in the cookie
      response.cookies.set("authHash", correctPasswordHash, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day
      });

      return response;
    } else {
      return NextResponse.json({ message: "Invalid password" }, { status: 401 });
    }
  } catch (e) {
    console.error("Error processing request:", e);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
