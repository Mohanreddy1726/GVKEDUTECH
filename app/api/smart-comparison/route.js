import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, courseType, comparisonType, selectedItems, itemCount } = body || {};

    if (!name || !phone || !comparisonType || !Array.isArray(selectedItems)) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection("smart_comparison_submissions");

    const data = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      courseType: courseType || "",
      comparisonType, // "countries" | "universities"
      selectedItems,
      itemCount: itemCount ?? selectedItems.length,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(data);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Smart Comparison API Error:", error);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const submissions = await db
      .collection("smart_comparison_submissions")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json({ smartComparisonSubmissions: submissions }, { status: 200 });
  } catch (error) {
    console.error("Smart Comparison GET Error:", error);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}
