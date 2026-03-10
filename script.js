const revealItems = document.querySelectorAll('.section, .hero-panel, .hero-copy, .pricing-card, .service-panel, .info-card, .phase-item, .closing-panel');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  }
);

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});