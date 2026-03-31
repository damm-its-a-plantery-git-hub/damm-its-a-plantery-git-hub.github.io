async function search() { //Sets up the content page
    const querry = window.location.href.split("?searchbar=")[1];
    console.log(querry)
    const tempstring = '<a href="page?p='
    const tempstring2 = '">'
    const indexurl = "contentindex.json"

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
            document.getElementById("pagecontent").innerHTML += tempstring + value.internalname + tempstring2 + value.displayname + "</a>"
        } else {
            console.log("Cannot find a match")
        }

    })
    } catch (error) {
        console.error(error.message)
    }

}
window.addEventListener("DOMContentLoaded", () => {
    search()
});