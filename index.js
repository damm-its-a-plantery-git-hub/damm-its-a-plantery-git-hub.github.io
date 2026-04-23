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
      
    if (type == "blogs" ){
        find_content("blogs",true)
        find_content("blogs2",'true2')
      
      } else if(type == "guides" ){
          find_content("guides",true)
          find_content("guides2",'true2')
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



async function find_content(type,onetype) { //Sets up the content page
    const indexurl = "indexs/contentindex" + type + ".json"
    console.log("finding content for: ", type, onetype)
    let max_headlines = 10
    let current_headlines = 0
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
                current_headlines =+ 1
                apply_content(best,type,onetype)  
                console.log('applyed content: ', best)
            }
      highest_entry = -1
    })
    
    Object.values(result).forEach (value => {
            
    })
    } catch (error) {
        console.error(error.message)
    }  
}

async function apply_content(best,type,onetype) {
  console.log("running apply content ")
    try {
        const response = await fetch("/headlines/" + best.internalname + ".md");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result);
        if (onetype == true){
          console.log("pasting in content as id type content ")
          document.getElementById("content").innerHTML = document.getElementById("content").innerHTML + result
        } if (onetype == 'true2') {
          document.getElementById("content2").innerHTML = document.getElementById("content2").innerHTML + result
        } else {
          document.getElementById(type).innerHTML = document.getElementById(type).innerHTML + result
          console.log('pasted headline')
        }
        
    } catch (error) {
        console.error(error.message);
    }
    //Uses try so it thorws errors properly 
}


