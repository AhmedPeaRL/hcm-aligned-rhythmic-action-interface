// HCM Cognitive Noise Guard
// Prevents reflexive interaction, not intentional presence

(function () {
  // Disable accidental shortcuts
  window.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" ||
      e.key === "Enter" ||
      e.key === "Tab"
    ) {
      e.preventDefault();
    }
  });

  // Stabilize scroll
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    if (Math.abs(current - lastScroll) > 40) {
      window.scrollTo(0, lastScroll);
    }
    lastScroll = current;
  });

  // Prevent rapid clicking
  document.addEventListener("click", (e) => {
    if (e.detail > 1) {
      e.preventDefault();
    }
  });
})();
