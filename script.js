// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Resume link placeholder — replace href once resume.pdf is added
const resumeLink = document.getElementById('resume-link');
resumeLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Résumé coming soon — replace this button\'s link in index.html once resume.pdf is uploaded to the assets folder.');
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('main > section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));
