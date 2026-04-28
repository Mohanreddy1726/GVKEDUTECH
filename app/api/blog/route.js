import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const posts = await db.collection("blog_posts").find({}).sort({ createdAt: -1 }).toArray();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();

    const post = {
      title: body.title,
      slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      excerpt: body.excerpt,
      content: body.content,
      image: body.image,
      author: body.author || "GVK Edutech",
      category: body.category,
      tags: body.tags || [],
      published: body.published !== false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("blog_posts").insertOne(post);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
