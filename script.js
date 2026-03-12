// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on scroll using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('[data-animate]').forEach((section) => {
  observer.observe(section);
});

// Smooth scroll for "View recent work" button
const viewWorkBtn = document.getElementById('view-work-btn');
if (viewWorkBtn) {
  viewWorkBtn.addEventListener('click', () => {
    const target = document.querySelector('#portfolio');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Formspree will handle form submission; optional custom behavior can go here.