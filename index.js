const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;
const top_buffer = 125
window.addEventListener("scroll", () => {
  //if (window.scrollY < top_buffer) 
  //  {nav.style.position = "static"}
  //else {nav.style.position = "sticky"}
    
  if (lastScrollY < window.scrollY ) {
    // Scrolling Down - hide the navbar
    nav.classList.add('navbar--hidden');
  } else {
    // Scrolling Up - show the nav
    nav.classList.remove('navbar--hidden')
  }
  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});

