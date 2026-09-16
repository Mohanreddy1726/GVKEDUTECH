export async function ingestLead(formId, data) {
  const PROXY_ENDPOINT = "/api/crm-proxy";

  console.log(`[CRM Ingest] Sending lead to proxy for ${formId}...`, { data });

  try {
    const response = await fetch(PROXY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId,
        data,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "No error body");
      console.error(`[CRM Ingest] Proxy failed for ${formId}: ${response.status} - ${errorText}`);
    } else {
      console.log(`[CRM Ingest] Successfully sent lead to proxy for ${formId}`);
    }
    return response.ok;
  } catch (error) {
    console.error(`[CRM Ingest] Network error sending to proxy for ${formId}:`, error);
    return false;
  }
}
