var numbers = document.querySelectorAll("#calculator span");
var calculatorDisplay = document.querySelector(".screen");
// calculatorDisplay.textContent = "hippo";
// var displayContent = ""
// numbers.addEventListener("click", addNumberToDisplay);

calculatorDisplay = "";

for (i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", addNumberToDisplay)

}

function addNumberToDisplay(){
    console.log(event);
    console.log(event.target);
    var content = event.target.textContent;
    calculatorDisplay += content;
    console.log('displayContent: ', calculatorDisplay);
    // calculatorDisplay.innerHTML = displayContent;
    return calculatorDisplay;
        // calculatorDisplay.textContent = numbers[i].textContent;
    }






// calculatorDisplay.textContent = numbers.textContent;



// function addNumberToDisplay(){
//     var selection = numbers.textContent;
//     console.log("The number is: " + selection);
// }





// window.onmousemove = function(e){
//     console.log(e);
// }