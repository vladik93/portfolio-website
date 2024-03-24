console.log('script.js is running');

// SIDENAV
const togglerEl = document.getElementById("toggler");

// SIDENAV
const sidenavOverlayEl = document.getElementById('sidenav-overlay');
const sidenavEl = document.getElementById('sidenav');

// PRICING ANIMATION
const pricingWrapperEl = document.getElementById('pricing-wrapper');


togglerEl.addEventListener('click', (e) => {
  togglerEl.classList.toggle('open');
  sidenavOverlayEl.classList.toggle('open');
  sidenavEl.classList.toggle('open');
  // document.body.style.overflow = "hidden";
})

// SKILLS ANIMATION
const skillTransitionEls = document.querySelectorAll('.skill-transition-wrapper');

let observer = new IntersectionObserver((entries => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.querySelector('.skill').classList.add('show');
    } 
  })
}), {
  threshold: 0.8
});

skillTransitionEls.forEach(skillTransitEl => {
  observer.observe(skillTransitEl);
})

// PRICING SECTION

const pricingSlideBtnRight = document.getElementById('pricing-slide-button-right');
const pricingSlideBtnLeft = document.getElementById('pricing-slide-button-left');

const pricingInnerWrapperEl = document.getElementById('pricing-inner-wrapper');

pricingSlideBtnRight.addEventListener('click', () => {
  console.log(pricingInnerWrapperEl);
  pricingInnerWrapperEl.style.transform = "translateX(-100%)";
});