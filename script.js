let operator = ``;
let num1 = ``;
let num2 = ``;
const display = document.getElementById(`display`)
let displayContent = display.textContent;
display.textContent = `0`;
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
  }
  if (displayContent == '') {
    displayContent = '0';
  }
  Display();
}
function buttonClicked(buttonValue){
  updateDisplay(buttonValue);
}

