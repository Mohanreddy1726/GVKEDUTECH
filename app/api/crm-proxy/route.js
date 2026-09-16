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

    const ENDPOINT = "https://lead-os-mr.vercel.app/api/leads/ingest";
    const TOKEN = "lead_os_ingest_secret_2026";

    console.log(`[Server Proxy] Forwarding ${formId} lead to CRM...`);

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
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
      console.error(`[Server Proxy] CRM API error ${response.status}: ${responseText}`);
      return NextResponse.json(
        { error: `CRM API responded with ${response.status}: ${responseText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Server Proxy] Exception:", error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
}
