import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Thesis from "@/models/Thesis";

export async function GET() {
  try {
    await connectToDatabase();
    const theses = await Thesis.find({}).sort({ createdAt: -1 });
    return NextResponse.json(theses);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch theses" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const thesis = await Thesis.create(body);
    return NextResponse.json(thesis, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create thesis" }, { status: 500 });
  }
}
