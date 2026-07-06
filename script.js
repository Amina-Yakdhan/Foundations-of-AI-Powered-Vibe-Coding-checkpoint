document.querySelector('.cta-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.getElementById('projects');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.log('Projects section coming soon!');
  }
});