import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Attachment from "@/models/Attachment";

export async function GET() {
  try {
    await connectToDatabase();
    const attachments = await Attachment.find({}).sort({ createdAt: -1 });
    return NextResponse.json(attachments);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch attachments" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const attachment = await Attachment.create(body);
    return NextResponse.json(attachment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create attachment" }, { status: 500 });
  }
}
