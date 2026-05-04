import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Profile from "@/models/Profile";

export async function GET() {
  try {
    await connectToDatabase();
    // Assuming there's only one profile document
    let profile = await Profile.findOne({});
    if (!profile) {
      // Create default if none exists
      profile = await Profile.create({});
    }
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    let profile = await Profile.findOne({});
    
    if (profile) {
      profile = await Profile.findByIdAndUpdate(profile._id, body, { new: true });
    } else {
      profile = await Profile.create(body);
    }
    
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
