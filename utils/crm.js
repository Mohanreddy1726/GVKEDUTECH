export async function ingestLead(formId, data) {
  const PROXY_ENDPOINT = "/api/crm-proxy";

  // Ensure phone number starts with +91 for CRM compatibility
  const processedData = { ...data };
  if (processedData.phone) {
    let phone = processedData.phone.trim();
    if (!phone.startsWith("+")) {
      phone = "+91" + phone.replace(/^91/, "");
    }
    processedData.phone = phone;
  }

  console.log(`[CRM Ingest] Sending lead to proxy for ${formId}...`, { data: processedData });

  try {
    const response = await fetch(PROXY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId,
        data: processedData,
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
