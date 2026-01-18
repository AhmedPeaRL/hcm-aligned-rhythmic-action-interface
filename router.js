export async function routeAction(tool, content) {

  // Deliberately no response handling
  await fetch(tool.endpoint, {
    method: tool.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action: content,
      source: "HCM-Rhythmic-Action-Field"
    })
  });

}
