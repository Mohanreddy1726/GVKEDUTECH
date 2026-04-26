import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { db } = await connectToDatabase();
    const collection = db.collection("budget_calculator_submissions");

    const data = {
      ...body,
      createdAt: new Date(),
    };

    const result = await collection.insertOne(data);
    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Budget Calculator API Error:", error);
    return NextResponse.json({ success: false, error: "Database error" }, { status: 500 });
  }
}
