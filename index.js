const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  console.log("checking")
  if (lastScrollY < window.scrollY) {
    // Scrolling Down - hide the navbar
    //nav.style.visibility = "hidden";
    nav.style.top = "-200px";
  } else {
    // Scrolling Up - show the nav
    //nav.style.visibility = "visible";
    nav.style.top = "10px";
  }

  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});

