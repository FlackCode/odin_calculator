const display = document.getElementById('display');
let displayText = display.textContent;
let num1 = null;
let num2 = null;
let operator = null;

//Math Handling!
function operate(operator, firstNumber, secondNumber){
    switch(operator){
        case `+`:
            return add(firstNumber, secondNumber);
        case `-`:
            return substract(firstNumber, secondNumber);
        case `*`:
            return multiply(firstNumber, secondNumber);
        case `/`:
            return divide(firstNumber, secondNumber);
        default:
            return `Error!`;
    }
}
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function substract(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber){
    if(secondNumber == 0){
        return `Cant divide by 0!`;
    }
    return firstNumber / secondNumber;
}

//Button Handling!

// Display Handling!
function returnToDisplay(buttonValue) {
  console.log('Button clicked:', buttonValue);
  if (displayText !== '0') {
    displayText += buttonValue;
  } else {
    displayText = buttonValue;
  }
  if (buttonValue === 'C') {
    displayText = '';
  }
  if (displayText === '') {
    displayText = '0';
  }
  updateDisplay();
}
function updateDisplay() {
  display.textContent = displayText;
}