let operator = null;
let num1 = null;
let num2 = null;
let result = null;
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
    operator = null;
    result = null;
  }
  if (displayContent == '') {
    displayContent = '0';
  }
  if(buttonValue == `+` || buttonValue == `-` 
  || buttonValue == `*` || buttonValue == `/`){
    displayContent = `0`;
    decimalBtn.disabled = false;
  }
  if (displayContent.endsWith("=")) {
    displayContent = displayContent.slice(0, -1);
  }
  if (result == 0){
    displayContent = `0`;
    result = null;
  }
  if (result === "Division by 0 impossible!" && !isNaN(Number(buttonValue))) {
    displayContent = buttonValue;
    result = null;
  }
  if (buttonValue == `.`&& displayContent.includes(`.`)){
    const decimalBtn = document.getElementById(`decimalBtn`);
    decimalBtn.disabled = true;
  }
  if (buttonValue == `=`){
    decimalBtn.disabled = false;
  }
  Display();
}
//Click Handling !!!
function buttonClicked(buttonValue){
  if (buttonValue == `+` || buttonValue == `-` 
  || buttonValue == `*` || buttonValue == `/`) {
    num1 = Number(displayContent);
    operator = buttonValue;
    display.textContent = displayContent;
  }
  if (buttonValue == "=") {
    num2 = Number(displayContent);
    console.log(num1, operator, num2);
    doMath(num1, operator, num2);
    console.log(result);
    displayContent = result;
  }
  updateDisplay(buttonValue);
  Display();
}
//Math Handling
function doMath(firstNumber, operator, secondNumber){
  switch(operator){
    case `+`:
      result = firstNumber + secondNumber;
      break;
    case `-`:
      result = firstNumber - secondNumber;
      break;
    case `*`:
      result = firstNumber * secondNumber;
      break;
    case `/`:
      result = firstNumber / secondNumber;
      if(secondNumber == 0){
        result = `Division by 0 impossible!`;
      }
      break;
  }
  if(isFloat(result)){
    result = parseFloat(result).toFixed(3);
  }
  displayContent = result.toString();
  return result;
}
function isFloat(number){
  return Number(number) === number && number % 1 !== 0;
}