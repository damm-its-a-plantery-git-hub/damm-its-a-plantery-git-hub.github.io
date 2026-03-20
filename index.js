const nav = document.getElementById("navbar");
let lastScrollY = window.scrollY;

async function set_navbar() {
  //let navbar = fetch("navbar.html").then(Response.text(nav.innerHTML = navbar))
  //fetch("navbar.html")
   // .then(Response => Response.text()).then(myconvertedtext => console.log(myconvertedtext))
  
  //console.log("Putting html in",fetch("navbar.html"), "vs the actal code", nav.innerHTML)
  const url = "navbar.json"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.json();
  console.log(result);
  nav.innerHTML = result.content
  } catch (error) {
    console.error(error.message);
  }
}


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

