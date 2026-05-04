import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import connectToDatabase from "@/lib/db";
import AdminUser from "@/models/AdminUser";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "super_secret_fallback_key_for_development"
);

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { email, password } = await req.json();

    let admin = await AdminUser.findOne({ email });

    // Auto-seed from .env if no admin exists
    if (!admin && email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await AdminUser.create({
        email: process.env.ADMIN_EMAIL,
        passwordHash: hashedPassword,
      });
    }

    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, admin.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create JWT token using jose
    const token = await new SignJWT({ email: admin.email, id: admin._id.toString() })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(JWT_SECRET);

    const response = NextResponse.json({ message: "Logged in successfully" });
    
    // Set HttpOnly cookie
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
