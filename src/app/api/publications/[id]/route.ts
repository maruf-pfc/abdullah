import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Publication from "@/models/Publication";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await req.json();
    const publication = await Publication.findByIdAndUpdate(id, body, { new: true });
    if (!publication) {
      return NextResponse.json({ error: "Publication not found" }, { status: 404 });
    }
    return NextResponse.json(publication);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update publication" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const publication = await Publication.findByIdAndDelete(id);
    if (!publication) {
      return NextResponse.json({ error: "Publication not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Publication deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete publication" }, { status: 500 });
  }
}
