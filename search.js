async function search() { //Sets up the content page
    const querry = window.location.href.split("?searchbar=")[1];
    console.log(querry)
    const tempstring = '<a href="page?p='
    const tempstring2 = '">'
    const indexurl = "indexs/contentindexguides.json" //list of all guides
    const indexurl2 = "indexs/contentindexblogs.json" // list of all blogs set to feture the top 

    try {
        const response = await fetch(indexurl);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
    Object.values(result).forEach (value => {
        console.log(value)
        if (value.displayname.includes(querry)) {
            console.log("Found Match: ", value.displayname)
            document.getElementById("searchresult").innerHTML += tempstring + value.internalname + tempstring2 + value.displayname + "<br>" +"</a>"
        } else {
            console.log("Cannot find a match")
        }

    })
    } catch (error) {
        console.error(error.message)
        console.log("there was a error in search")
    }

    const response = await fetch("/headlines/" + best.internalname + ".md");
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.text();
        console.log(result); 
        
    //second one for blogs, will change so they work with both maybe
    //maybe use a loop instead of dupeing code 



    try {
        const response = await fetch(indexurl2);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result)
    Object.values(result).forEach (value => {
        console.log(value)
        if (value.displayname.includes(querry)) {
            console.log("Found Match: ", value.displayname)
            document.getElementById("searchresult").innerHTML += tempstring + value.internalname + tempstring2 + value.displayname + "<br>" + "</a>"
        } else {
            console.log("Cannot find a match")
        }

    })
    } catch (error) {
        console.error(error.message)
        console.log("there was a error in search")
    }

}
window.addEventListener("DOMContentLoaded", () => {
    search()
});