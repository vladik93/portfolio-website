console.log('script.js is running');

// SIDENAV
const togglerEl = document.getElementById("toggler");

// SIDENAV
const sidenavOverlayEl = document.getElementById('sidenav-overlay');
const sidenavEl = document.getElementById('sidenav');


togglerEl.addEventListener('click', (e) => {
  togglerEl.classList.toggle('open');
  sidenavOverlayEl.classList.toggle('open');
  sidenavEl.classList.toggle('open');
  // document.body.style.overflow = "hidden";
})

// SKILLS ANIMATION
const skillEls = document.querySelectorAll('.skill');

let observer = new IntersectionObserver((entries => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
  })
}), {
  threshold: 0.9
});

skillEls.forEach(skillEl => {
  observer.observe(skillEl);
})