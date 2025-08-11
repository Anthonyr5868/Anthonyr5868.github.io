// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', function () {
    document.getElementById('navLinks').classList.remove('active');
  });
});
