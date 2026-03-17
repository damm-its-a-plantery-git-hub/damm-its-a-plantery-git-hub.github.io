const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  console.log("checking",lastScrollY,window,scrollY)
  if (lastScrollY < window.scrollY) {
    // Scrolling Down - hide the navbar
    //nav.style.top = "-200px";
    nav.classList.add('navbar--hidden');
  } else {
    // Scrolling Up - show the nav
    //nav.style.top = "10px";
    nav.classList.remove('navbar--hidden')
  }

  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});

