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
  if (displayContent.endsWith("square")) {
    displayContent = displayContent.slice(0, -6);
  }
  if (displayContent.endsWith("sqrt")) {
    displayContent = displayContent.slice(0, -4);
  }
  if (result == 0){
    displayContent = `0`;
    result = null;
  }
  if (result === "Division by 0 impossible!" && !isNaN(Number(buttonValue))) {
    displayContent = buttonValue;
    result = null;
    num1 = null;
    num2 = null;
    operator = null;
  }
  if (result != null && !isNaN(Number(buttonValue))){
    displayContent = buttonValue;
    result = null;
  }
  if (result === "Infinity" && !isNaN(Number(buttonValue))) {
    displayContent = buttonValue;
    result = null;
    num1 = null;
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
function clearAll(){
  result = null;
  num1 = null;
  num2 = null;
  operator = null;
}
function buttonClicked(buttonValue){
  if (buttonValue == `+` || buttonValue == `-` 
  || buttonValue == `*` || buttonValue == `/`) {
    if(num1 == null){
      num1 = Number(displayContent);
      operator = buttonValue;
      display.textContent = displayContent;
    }
    else{
      num2 = Number(displayContent);
      console.log(num1, operator, num2);
      doMath(num1, operator, num2);
      console.log(result);
      num1 = Number(result);
      operator = buttonValue;
      displayContent = result;
    }
  }
  else if (buttonValue == "=" && num1 != null && operator != null) {
    num2 = Number(displayContent);
    console.log(num1, operator, num2);
    doMath(num1, operator, num2);
    console.log(result);
    displayContent = result;
    num1 = Number(result);
    console.log(typeof(result));
    operator = null;
    num2 = null;
  }
  else if (buttonValue == `square`) {
    num1 = Number(displayContent);
    operator = buttonValue;
    doMath(num1, operator);
    displayContent = result;
  }
  else if (buttonValue == `sqrt`) {
    num1 = Number(displayContent);
    operator = buttonValue;
    doMath(num1, operator);
    displayContent = result;
    result = parseFloat(result);
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
    case `square`:
      result = Math.pow(firstNumber, 2);
      break;
    case `sqrt`:
      result = Math.sqrt(firstNumber);
      break;
  }
  if (Math.abs(result) > 1e10) {
    result = result.toExponential(3);
  }
  else if(isFloat(result)){
    result = parseFloat(result).toFixed(3);
  }
  displayContent = result.toString();
  return result;
}
function isFloat(number){
  return Number(number) === number && number % 1 !== 0;
}