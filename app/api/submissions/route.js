import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();

    const [contactSubmissions, collegePredictorSubmissions, budgetCalculatorSubmissions, applySubmissions] = await Promise.all([
      db.collection("contact_submissions").find({}).sort({ createdAt: -1 }).toArray(),
      db.collection("college_predictor_submissions").find({}).sort({ createdAt: -1 }).toArray(),
      db.collection("budget_calculator_submissions").find({}).sort({ createdAt: -1 }).toArray(),
      db.collection("apply_submissions").find({}).sort({ createdAt: -1 }).toArray(),
    ]);

    return NextResponse.json({
      contactSubmissions,
      collegePredictorSubmissions,
      budgetCalculatorSubmissions,
      applySubmissions,
    }, { status: 200 });
  } catch (error) {
    console.error("Submissions API Error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
