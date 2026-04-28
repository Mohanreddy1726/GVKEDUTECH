import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const videos = await db.collection("video_testimonials").find({}).sort({ order: 1, createdAt: -1 }).toArray();
    return NextResponse.json(videos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    if (!body.youtubeId) {
      return NextResponse.json({ error: "YouTube ID is required" }, { status: 400 });
    }

    const video = {
      youtubeId: body.youtubeId,
      title: body.title || "",
      university: body.university || "",
      country: body.country || "",
      order: body.order || 0,
      featured: body.featured || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("video_testimonials").insertOne(video);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
