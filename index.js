const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;
const buffer = 10
window.addEventListener("scroll", () => {
  console.log("checking",lastScrollY," ",window,scrollY)
  var diffrence = Math.abs(lastScrollY - window.scrollY)
  if (diffrence > buffer){
    if (lastScrollY < window.scrollY) {
      // Scrolling Down - hide the navbar
      nav.classList.add('navbar--hidden');
    } else {
      // Scrolling Up - show the nav
      nav.classList.remove('navbar--hidden')
    }
  }
  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});

