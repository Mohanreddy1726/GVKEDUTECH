export async function ingestLead(formId, data) {
  const ENDPOINT = "https://lead-os-mr.vercel.app/api/leads/ingest";
  const TOKEN = "lead_os_ingest_secret_2026";

  console.log(`[CRM Ingest] Attempting to send lead for ${formId}...`, { data });

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
      const errorText = await response.text().catch(() => "No error body");
      console.error(`[CRM Ingest] Failed for ${formId}: ${response.status} ${response.statusText} - ${errorText}`);
    } else {
      console.log(`[CRM Ingest] Successfully sent lead for ${formId}`);
    }
    return response.ok;
  } catch (error) {
    console.error(`[CRM Ingest] Network error for ${formId}:`, error);
    return false;
  }
}
