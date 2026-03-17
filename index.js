const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
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

