import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const post = await db.collection("blog_posts").findOne({ slug });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error", details: error.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateData = {
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      image: body.image,
      author: body.author,
      category: body.category,
      tags: body.tags,
      published: body.published,
      updatedAt: new Date(),
    };

    const result = await db.collection("blog_posts").updateOne(
      { slug },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error", details: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("blog_posts").deleteOne({ slug });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error", details: error.message }, { status: 500 });
  }
}
