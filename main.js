var numbers = document.querySelectorAll("#calculator span");
var screen = document.querySelector(".screen");
var evaluatedDisplay;

screen.textContent = "";
// THIS MAKES ALL BUTTONS ON CALC CLICKABLE
for (i=0; i<numbers.length; i++){
    numbers[i].addEventListener("click", addNumberToDisplay)
}
// THIS IS THE BRAINS OF THE CALCULATOR
function addNumberToDisplay(){
    var content = event.target.textContent;
    if (content == "="){
        // res = str.replace("Microsoft", "W3Schools");
        
        evaluatedDisplay = eval(screen.textContent);
        screen.textContent = evaluatedDisplay;
        return evaluatedDisplay;
    }else if (content == "C"){
        screen.textContent = "";
    }else{   
    screen.textContent += content;        
    }
    }






// calculatorDisplay.textContent = numbers.textContent;



// function addNumberToDisplay(){
//     var selection = numbers.textContent;
//     console.log("The number is: " + selection);
// }





// window.onmousemove = function(e){
//     console.log(e);
// }