import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Attachment from "@/models/Attachment";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await req.json();
    const attachment = await Attachment.findByIdAndUpdate(id, body, { new: true });
    if (!attachment) {
      return NextResponse.json({ error: "Attachment not found" }, { status: 404 });
    }
    return NextResponse.json(attachment);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update attachment" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const attachment = await Attachment.findByIdAndDelete(id);
    if (!attachment) {
      return NextResponse.json({ error: "Attachment not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Attachment deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete attachment" }, { status: 500 });
  }
}
