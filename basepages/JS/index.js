let lastScrollY = window.scrollY;

async function SetUpPage() {
  //let navbar = fetch("navbar.html").then(Response.text(nav.innerHTML = navbar))
  //fetch("navbar.html")
   // .then(Response => Response.text()).then(myconvertedtext => console.log(myconvertedtext))
  
  //console.log("Putting html in",fetch("navbar.html"), "vs the actal code", nav.innerHTML)
  const url = "../navbar.md"
  const footer ="../footer.md"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.text();
  console.log(result);
  document.getElementById("navbar").innerHTML = result
  } catch (error) {
    console.error(error.message);
  }
  try {
    const response = await fetch(footer);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.text();
  console.log(result);
  document.getElementById("footer").innerHTML = result
  } catch (error) {
    console.error(error.message);
  }
}


window.addEventListener("scroll", () => {
  let nav = document.getElementById("navbar")
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

