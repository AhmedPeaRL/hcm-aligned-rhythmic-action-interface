export async function releaseAction(action, destination) {

  if (!destination) {
    // Action allowed to dissolve into the field
    return;
  }

  await fetch(destination, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      action,
      origin: "HCM-Aligned-Rhythmic-Action-Interface"
    })
  });
}
