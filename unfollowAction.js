// Get all <span> elements on the page and store them in the 'elements' variable
var elements = document.getElementsByTagName("span");

// Loop through each <span> element
for (var i = 0; i < elements.length; i++) {
    // Check if the text content of the current <span> element contains the word "Unfollow"
    if (elements[i].textContent.includes("Unfollow")) {
        // If it contains "Unfollow", simulate a click on the element to trigger the unfollow action
        elements[i].click();
    }
}
