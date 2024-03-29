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
const pricingSectionEl = document.getElementById('pricing');
const pricingWrapperEl = document.getElementById('pricing-wrapper');
const pricingInnerWrapperEl = document.getElementById('pricing-inner-wrapper');

const pricingItemEls = document.querySelectorAll('.pricing-item');

let pricingItemCurrent = 0;

const pricingSlideBtnBack = document.getElementById('pricing-slide-button-back');
const pricingSlideBtnForward = document.getElementById('pricing-slide-button-forward');


const setPricingColor = () => {
  console.log(pricingItemCurrent);
  // 
  switch(pricingItemCurrent) {
    case 0 : {
      pricingSectionEl.classList = "pricing basic";
      break;
    }

    case 1 : {
      pricingSectionEl.classList = "pricing pro";
      break;
    }

    case 2 : {
      pricingSectionEl.classList = "pricing premium";
      break;
    }
  }
}

pricingSlideBtnForward.addEventListener('click', () => {
  if(pricingItemCurrent < pricingItemEls.length - 1) {
    pricingItemCurrent++;

    pricingInnerWrapperEl.style.transform = `translateX(-${pricingItemCurrent * 100}%)`;

  }

  setPricingColor();

});

pricingSlideBtnBack.addEventListener('click', () => {
  if(pricingItemCurrent > 0) {
    pricingItemCurrent--;

    pricingInnerWrapperEl.style.transform = `translateX(-${pricingItemCurrent * 100}%)`;    
  }

  setPricingColor();
})

