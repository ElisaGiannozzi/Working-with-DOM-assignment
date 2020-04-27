//Create an HTML page with a Like button. Clicking it should increase the number in the likes counter.

let number = 1; 
function incrementValue() {
    let numberField = document.getElementById('number'); 
    numberField.value = number; 
    number++; 
}