import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/db";
import AdminUser from "@/models/AdminUser";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "super_secret_fallback_key_for_development"
);

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { payload } = await jwtVerify(token, JWT_SECRET);
    if (!payload.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const { oldPassword, newPassword } = await req.json();

    const admin = await AdminUser.findOne({ email: payload.email });
    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(oldPassword, admin.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid old password" }, { status: 400 });
    }

    admin.passwordHash = await bcrypt.hash(newPassword, 10);
    await admin.save();

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Password change error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
