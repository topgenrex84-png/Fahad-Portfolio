// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// 3D Tilt
document.querySelectorAll('.tilt').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

// Navbar shadow on scroll
const nav = document.querySelector('.nav-inner');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) nav.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,.5)';
  else nav.style.boxShadow = '';
});
