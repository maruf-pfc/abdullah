import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Publication from "@/models/Publication";

export async function GET() {
  try {
    await connectToDatabase();
    const publications = await Publication.find({}).sort({ createdAt: -1 });
    return NextResponse.json(publications);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch publications" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const publication = await Publication.create(body);
    return NextResponse.json(publication, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create publication" }, { status: 500 });
  }
}
