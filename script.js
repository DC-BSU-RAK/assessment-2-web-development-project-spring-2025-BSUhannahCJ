// keeps track of which slide is currently visible 
let current = 0;
// selects elements with '.fade' and '.aboutus_images' 
const slides = document.querySelectorAll('.aboutus_images .fade');

setInterval(() => {
  slides[current].classList.remove('startfade');
  current = (current + 1) % slides.length;
  slides[current].classList.add('startfade');
}, 3000); //runs the code every 3 seconds
