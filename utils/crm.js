export async function ingestLead(formId, data) {
  const ENDPOINT = "https://https://lead-os-mr.vercel.app/api/leads/ingest";
  const TOKEN = "lead_os_ingest_secret_2026";

  try {
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
      console.error(`CRM Ingestion failed for ${formId}: ${response.statusText}`);
    }
    return response.ok;
  } catch (error) {
    console.error(`CRM Ingestion error for ${formId}:`, error);
    return false;
  }
}
