
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Close menu after clicking a link (mobile only)
    if (window.innerWidth <= 768) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});
