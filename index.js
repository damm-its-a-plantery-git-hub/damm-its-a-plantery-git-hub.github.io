let lastScrollY = window.scrollY;

async function SetUpPage() { //applys the footer and navbar
  const url = "basepages/navbar.md"
  const footer ="basepages/footer.md"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.text();
  document.getElementById("navbar").innerHTML = result
  } catch (error) {
    console.error(error.message);
  }
  //Uses try so it thorws errors properly 
  try {
    const response = await fetch(footer); //checks footer to see if it works
    if (!response.ok) { //checks if it is working or not if / if not working gives error
      throw new Error(`Response status: ${response.status}`); //give error
    }
  const result = await response.text(); //gets the data from the footer
  document.getElementById("footer").innerHTML = result //sets the page with thing 
  } catch (error) { //Tells me the error in the website console
    console.error(error.message);
  }
}


async function setup_page() { //Sets up the content page
  const url = "/pages/" + window.location.href.split("?p=")[1] + ".md";
  console.log(window.location.href.split("?p=")[1] + ".md")
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  const result = await response.text();
  console.log(result);
  document.getElementById("pagecontent").innerHTML = result
  console.log(url)
  } catch (error) {
    console.error(error.message);
    document.getElementById("pagecontent").innerHTML = "<p>Cannot find page ", url, "</p>"
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

