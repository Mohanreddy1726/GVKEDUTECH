import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formId, data } = body;

    const ENDPOINT = "https://lead-os-mr.vercel.app/api/leads/ingest";
    const TOKEN = "lead_os_ingest_secret_2026";

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

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `CRM API responded with ${response.status}: ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CRM Proxy Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error during CRM ingestion" },
      { status: 500 }
    );
  }
}
