import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const photos = await db
      .collection("photo_gallery")
      .find({})
      .sort({ order: 1, createdAt: -1 })
      .toArray();
    return NextResponse.json(photos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    if (!body.url) {
      return NextResponse.json({ error: "Image URL is required" }, { status: 400 });
    }

    const photo = {
      url: body.url,
      thumbnailUrl: body.thumbnailUrl || body.url,
      caption: body.caption || "",
      category: body.category || "others",
      university: body.university || "",
      country: body.country || "",
      order: body.order || 0,
      featured: body.featured || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("photo_gallery").insertOne(photo);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
