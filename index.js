

function copyElementToStorage() {
  // 1. Get the element you want to copy
  const elementToCopy = document.getElementById("navbar");
  
  if (elementToCopy) {
    // 2. Get the HTML content as a string
    const htmlString = elementToCopy.innerHTML;
    
    // 3. Store the string in sessionStorage
    // The key is 'copiedElementHTML', and the value is the HTML string
    sessionStorage.setItem("copiedElementHTML", htmlString);
    
    console.log("Element HTML copied to sessionStorage!");
  } else {
    console.error("Element not found!");
  }
}
function pasteElementFromStorage() {
  // 1. Retrieve the HTML string from sessionStorage
  const htmlString = sessionStorage.getItem("copiedElementHTML");
  
  // 2. Select the target element to insert the content
  const targetElement = document.getElementById("navbar");
  
  if (htmlString && targetElement) {
    // 3. Inject the HTML string into the target element
    targetElement.innerHTML = htmlString;
    
    console.log("Element HTML pasted from sessionStorage!");
    
    // Optional: Remove the item from storage after use
    sessionStorage.removeItem("copiedElementHTML");
  } else if (!htmlString) {
    console.error("No element HTML found in sessionStorage.");
  } else {
    console.error("Target element not found!");
  }
}

// Call the function when the page loads
window.onload = pasteElementFromStorage;
