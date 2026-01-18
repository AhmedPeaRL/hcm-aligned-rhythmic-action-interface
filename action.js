import { releaseAction } from "./release.js";

const actionInput = document.getElementById("actionInput");
const destinationInput = document.getElementById("destinationInput");
const button = document.getElementById("commit");
const status = document.getElementById("status");
const echo = document.querySelector(".agent-echo");

let sealed = false;

document.querySelector("textarea").addEventListener("blur", () => {
  if (Math.random() > 0.7) {
    echo.textContent = "Noted.";
  } else {
    echo.textContent = "";
  }
  
  button.addEventListener("click", async () => {
  if (sealed) return;

  const action = actionInput.value.trim();
  const destination = destinationInput.value.trim();

  if (!action) {
    status.textContent = "No action formed.";
    return;
  }

  sealed = true;
  actionInput.disabled = true;
  destinationInput.disabled = true;
  button.disabled = true;

  status.textContent = "Action released…";

  try {
    await releaseAction(action, destination);
    status.textContent =
`Action has left this field.

No confirmation expected.
No response awaited.
No memory retained.`;
  } catch {
    status.textContent =
`Action released without witness.

This field remains intact.`;
  }
});
