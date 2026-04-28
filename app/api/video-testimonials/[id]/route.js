import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    const video = await db.collection("video_testimonials").findOne({ _id: new ObjectId(id) });
    if (!video) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }
    return NextResponse.json(video, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateData = {
      updatedAt: new Date(),
    };

    if (body.youtubeId) updateData.youtubeId = body.youtubeId;
    if (body.title) updateData.title = body.title;
    if (body.university) updateData.university = body.university;
    if (body.country) updateData.country = body.country;
    if (body.order !== undefined) updateData.order = body.order;
    if (body.featured !== undefined) updateData.featured = body.featured;

    const result = await db.collection("video_testimonials").updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();
    const result = await db.collection("video_testimonials").deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
