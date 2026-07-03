import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

/**
 * GET /api/admin/has-new
 *
 * Returns a boolean per tool indicating whether the tool has at least one
 * submission with seenAt: null. Used by the admin dashboard sidebar to
 * decide which tabs to flag with a blink.
 *
 * Tools: contact, apply, predictor, budget, compare, roi
 *   (Blog and Video Testimonials are intentionally excluded.)
 */
const TOOL_TO_COLLECTION = {
  contact:   "contact_submissions",
  apply:     "apply_submissions",
  predictor: "college_predictor_submissions",
  budget:    "budget_calculator_submissions",
  compare:   "smart_comparison_submissions",
  roi:       "roi_planner_submissions",
};

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    const entries = await Promise.all(
      Object.entries(TOOL_TO_COLLECTION).map(async ([tool, collection]) => {
        // limit: 1 — we only need to know "is there at least one unread row".
        const count = await db
          .collection(collection)
          .countDocuments({ seenAt: null }, { limit: 1 });
        return [tool, count > 0];
      })
    );

    return NextResponse.json(Object.fromEntries(entries), { status: 200 });
  } catch (error) {
    console.error("has-new API Error:", error);
    return NextResponse.json(
      {
        contact: false,
        apply: false,
        predictor: false,
        budget: false,
        compare: false,
        roi: false,
      },
      { status: 500 }
    );
  }
}
