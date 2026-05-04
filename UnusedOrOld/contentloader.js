
async function find_content(type) { //Sets up the content page
    const indexurl = "contentindex" + type + ".json"
    let max_headlines = 5
    let best
    try {
    const response = await fetch(indexurl);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    let entries = result.length;
    Object.values(result).forEach (value => {
        best = value
            if (!value.applyed) {
                value.applyed = true
                apply_content(best,type)
            }
    })
    console.log(best)
    } catch (error) {
        console.error(error.message)
    }  
}

async function apply_content(best,type) {
    try {
        const response = await fetch("/headlines/" + best.internalname + ".md");
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
    find_content("guides")
});

