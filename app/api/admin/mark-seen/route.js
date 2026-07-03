import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

/**
 * POST /api/admin/mark-seen
 *
 * Body: { "tool": "contact" | "apply" | "predictor" | "budget" | "compare" | "roi" }
 *
 * Sets seenAt = now() on every currently-unread submission (seenAt: null)
 * for the requested tool. The next call to /api/admin/has-new will report
 * this tool as "no new submissions" until a brand new row arrives.
 *
 * Blog and Video Testimonials are not in the whitelist — they are not
 * submission-driven and are excluded from the blink feature by design.
 */
const TOOL_TO_COLLECTION = {
  contact:   "contact_submissions",
  apply:     "apply_submissions",
  predictor: "college_predictor_submissions",
  budget:    "budget_calculator_submissions",
  compare:   "smart_comparison_submissions",
  roi:       "roi_planner_submissions",
};

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const tool = body?.tool;

    if (!tool || !TOOL_TO_COLLECTION[tool]) {
      return NextResponse.json(
        { ok: false, error: "Invalid or missing tool" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const result = await db
      .collection(TOOL_TO_COLLECTION[tool])
      .updateMany(
        { seenAt: null },
        { $set: { seenAt: new Date() } }
      );

    return NextResponse.json(
      { ok: true, tool, modifiedCount: result.modifiedCount },
      { status: 200 }
    );
  } catch (error) {
    console.error("mark-seen API Error:", error);
    return NextResponse.json(
      { ok: false, error: "Database error" },
      { status: 500 }
    );
  }
}
