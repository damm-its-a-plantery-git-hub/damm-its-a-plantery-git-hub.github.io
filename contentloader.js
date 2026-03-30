async function load_content(type) { //Sets up the content page
    const indexurl = "contentindex.json"
    
    let best

    try {
    const response = await fetch(indexurl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    //console.log(result)
    let entries = result.length;
    let minfeat = -1
    Object.values(result).forEach (value => {
        //console.log(value);
        //console.log(value.fetured)
        if (value.fetured > minfeat) {
            minfeat = value.fetured
            best = value
        }
    })
    console.log(best)

    } catch (error) {
        console.error(error.message)
    }

    //Gettig the postst

    try {
    const response = await fetch("/headlines/" + best.internal_name + ".md");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.text();
    console.log(result);
    document.getElementById(type).innerHTML = document.getElementById(type).innerHTML + result
    } catch (error) {
    console.error(error.message);
    }
    //Uses try so it thorws errors properly 

}

window.addEventListener("DOMContentLoaded", () => {
    load_content("guides")
});

