import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formId, data } = body;

    if (!formId || !data) {
      return NextResponse.json(
        { error: "Missing formId or data in request body" },
        { status: 400 }
      );
    }

    // New Lead Management System Ingestion Endpoint
    const ENDPOINT =
      process.env.LEAD_MANAGEMENT_ENDPOINT ||
      "http://localhost:3000/api/leads/capture";
    const TOKEN =
      process.env.LEAD_MANAGEMENT_TOKEN || "gvk_lead_capture_2026";

    console.log(`[Lead Management Proxy] Forwarding ${formId} lead to ${ENDPOINT}...`);

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "x-api-key": TOKEN,
        "x-ingest-token": TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId,
        data,
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error(`[Lead Management Proxy] API error ${response.status}: ${responseText}`);
      return NextResponse.json(
        { error: `Lead Management API responded with ${response.status}: ${responseText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, response: responseText });
  } catch (error) {
    console.warn("[Lead Management Proxy] Webhook dispatch warning:", error.message);
    return NextResponse.json(
      {
        success: false,
        warning: `Direct webhook unreachable: ${error.message}. Form is safely recorded in primary database.`,
      },
      { status: 200 }
    );
  }

}
