//const nav = document.querySelector(".navbar");
const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  console.log("checking")
  if (lastScrollY < window.scrollY) {
    // Scrolling Down - hide the nav
    nav.style.top = "-1000px";
    //classList.add("navbar--hidden");
    console.log("adding class")
    console.log(nav.style.top)
  } else {
    // Scrolling Up - show the nav
    nav.style.top = "0px";
    console.log("removing class")
    console.log(nav.style.top)
  }

  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});

