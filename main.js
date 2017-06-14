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
        var replaceMultiply = screen.textContent.replace("x","*");
        var replaceDivide = replaceMultiply.replace("÷","/");      
        evaluatedDisplay = eval(replaceDivide);
        screen.textContent = evaluatedDisplay;
    }else if (content == "C"){
        screen.textContent = "";
    }else{   
    screen.textContent += content;        
    }
    }
