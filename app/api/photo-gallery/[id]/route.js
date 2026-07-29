import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { ObjectId } from "mongodb";

function isValidObjectId(id) {
  return typeof id === "string" && /^[a-f0-9]{24}$/i.test(id);
}

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }
    const { db } = await connectToDatabase();
    const photo = await db
      .collection("photo_gallery")
      .findOne({ _id: new ObjectId(id) });
    if (!photo) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }
    return NextResponse.json(photo, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }
    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateData = { updatedAt: new Date() };

    if (body.url) updateData.url = body.url;
    if (body.thumbnailUrl !== undefined) {
      updateData.thumbnailUrl = body.thumbnailUrl || body.url || "";
    }
    if (body.caption !== undefined) updateData.caption = body.caption;
    if (body.category) updateData.category = body.category;
    if (body.university !== undefined) updateData.university = body.university;
    if (body.country !== undefined) updateData.country = body.country;
    if (body.order !== undefined) updateData.order = body.order;
    if (body.featured !== undefined) updateData.featured = body.featured;

    const result = await db
      .collection("photo_gallery")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }
    const { db } = await connectToDatabase();
    const result = await db
      .collection("photo_gallery")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
