
//Create an HTML page with a progress bar and a button. Clicking the button should fill the progress bar by 5%.

function incrementProgress() {
    let file = document.getElementsById("file"); 
    let value = +file.getAttribute("value"); 
    file.setAttribute ("value", value + 5); 
}




