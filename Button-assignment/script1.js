/*Create an HTML page that will contain text and a button. 
Clicking the button should hide the text. Clicking it again should display the text.*/

function hideText() {
    let myText = document.getElementById("text"); 
    if (myText.style.display === "none") {
        myText.style.display = "block"; 
    } else {
        myText.style.display = "none"; 
    }
}

