let operator = ``;
let num1 = null;
let num2 = null;
const display = document.getElementById(`display`)
let displayContent = display.textContent;
display.textContent = `0`;
//Display Handling !!!
function Display(){
  display.textContent = displayContent;
}
function updateDisplay(buttonValue){
  console.log(`You clicked a button! `+ buttonValue);
  if (displayContent != '0') {
    displayContent += buttonValue;
  } 
  else {
    displayContent = buttonValue;
  }
  if(buttonValue == `C`){
    displayContent = ``;
    num1 = null;
    num2 = null;
  }
  if (displayContent == '') {
    displayContent = '0';
  }
  if(buttonValue == `+` || buttonValue == `-` 
  || buttonValue == `*` || buttonValue == `/`){
    displayContent = `0`;
  }
  if (displayContent.endsWith("=")) {
    displayContent = displayContent.slice(0, -1);
  }
  Display();
}
//Click Handling !!!
function buttonClicked(buttonValue){
  if (buttonValue == `+`) {
    num1 = Number(displayContent);
    console.log(num1);
    displayContent = "0";
    display.textContent = displayContent;
  }
  else if (buttonValue == "=") {
    num2 = Number(displayContent);
    console.log(num2);
    result = num1 + num2;
    displayContent = result.toString();
    console.log(displayContent);
  }
  updateDisplay(buttonValue);
  Display();
}
//Math Handling (coming soon in a more optimized version)
