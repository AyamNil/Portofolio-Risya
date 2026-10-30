(() => {
  // Persona dynamic card response
  const cards = document.querySelectorAll(".project-card, .publication-card, .timeline-card, .tech-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.1s ease-out, box-shadow 0.1s ease-out";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transition = "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
    });
  });
})();
