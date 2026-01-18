const phrases = [
  "Presence holds.",
  "Silence is valid.",
  "No response is also response.",
  "You are not late.",
  ""
];

setTimeout(() => {
  const p = document.getElementById("presence-line");
  if (!p) return;
  p.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 30000);
