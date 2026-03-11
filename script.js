const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  slides[0].classList.add('is-visible');
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  slides.forEach((slide) => {
    observer.observe(slide);
  });
} else {
  slides.forEach((slide) => {
    slide.classList.add('is-visible');
  });
}