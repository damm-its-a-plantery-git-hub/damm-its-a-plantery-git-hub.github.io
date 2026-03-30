async function load_content(type) { //Sets up the content page
    const indexurl = "contentindex.json"
    
    try {
    const response = await fetch(indexurl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    let content = JSON.parse(result); 
    console.log (content)
    //for (let i = 0; i < entries; i++) {
      //  let content =  {
        //    "fetured" : 10,
          //  "internal_name" : "001",
            //"displayname" : "headline"
     //   }


//    }
    } catch (error) {
        console.error(error.message)
    }
}