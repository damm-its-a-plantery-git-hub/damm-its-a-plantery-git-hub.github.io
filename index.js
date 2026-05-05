let lastScrollY = window.scrollY;

async function SetUpPage(type,onetype) { //applys the footer and navbar
  if(onetype == false) {
    
    if (type == "blogs" ){
      find_content("blogs",false)
    
    } else if(type == "guides" ){
        find_content("guides",false)
    
    } else if(type == "all"){
      find_content("guides",false)
      find_content("blogs",false)
    }
  } else if (onetype == true) {
      
    if (type == "blogs"){
        find_content("blogs",true)
        find_content("blogs2",'true2')
        find_content("blogs2",'extra',true)
      
      } else if(type == "guides" ){
          find_content("guides",true)
          find_content("guides2",'true2')
          find_content("guides2",'extra',true)
      }
    }
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
  if (window.location.href.split("?searchbar=")[1]){
    document.getElementById("searchbar").value = decodeURIComponent(window.location.href.split("?searchbar=")[1]).replaceAll("+"," ")
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
  SetUpPage(false)
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
  //this is a version 2 thing
  //console.log("the window pos is: ",window.scrollY,"nav size is: ",nav.height)
  //&& window.scrollY > nav.height
  if (lastScrollY < window.scrollY) {
    // Scrolling Down - hide the navbar
    nav.classList.add('navbar--hidden');
  } else {
    // Scrolling Up - show the nav
    nav.classList.remove('navbar--hidden')
  }
  // Update the position for the next scroll event
  lastScrollY = window.scrollY;
});



async function find_content(type,onetype,modifyed = false) { //Sets up the content page
    const indexurl = "indexs/contentindex" + type + ".json"
    console.log("finding content for: ", type, onetype)
    let max_headlines = 5
    let current_headlines = 1
    if (modifyed == true) {
      max_headlines = 50
    }
    
    try {
    const response = await fetch(indexurl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    let result = await response.json();
    
    //let entries = result.length;
    let highest_entry = -1
    let best 
    
    
    Object.values(result).forEach (value => {
      Object.values(result).forEach (value => {
        if (value.fetured > highest_entry && !value.applyed){
          console.log("setting",value)
          highest_entry = value.fetured
          best = value
        }
      })

      if (!best.applyed && current_headlines <= max_headlines) {
                best.applyed = true
                current_headlines = current_headlines + 1
                apply_content(best,type,onetype)
                console.log(current_headlines,max_headlines)
                best = "none"
            }
      highest_entry = -1

    })

    } catch (error) {
        console.error(error.message)
    }  
}

async function apply_content(best,type,onetype) {
    try {
        let response = await fetch("/headlines/" + best.internalname + ".md");
        if (onetype == "extra"){
          response = await fetch("/headline-small/" + best.internalname + ".md");
          console.log("type was extra")
        }
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        console.log(document.getElementById(type),"type is : ",type )
        const result = await response.text();
        if (onetype == true){
          document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + result
        } else if (onetype == 'true2') {
          document.getElementById("content2").innerHTML = document.getElementById("content2").innerHTML + result
        } else if (onetype == "extra"){
          document.getElementById("extra").innerHTML = document.getElementById("extra").innerHTML + result
        } else {
          document.getElementById(type).innerHTML = document.getElementById(type).innerHTML + result
        }
        
    } catch (error) {
        console.error(error.message);
    }
    //Uses try so it thorws errors properly 
}


