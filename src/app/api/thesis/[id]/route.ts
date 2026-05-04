import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Thesis from "@/models/Thesis";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const body = await req.json();
    const thesis = await Thesis.findByIdAndUpdate(id, body, { new: true });
    if (!thesis) {
      return NextResponse.json({ error: "Thesis not found" }, { status: 404 });
    }
    return NextResponse.json(thesis);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update thesis" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const thesis = await Thesis.findByIdAndDelete(id);
    if (!thesis) {
      return NextResponse.json({ error: "Thesis not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Thesis deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete thesis" }, { status: 500 });
  }
}
