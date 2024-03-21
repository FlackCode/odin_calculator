function operate(operator, nrone, nrtwo){
    switch(operator){
        case `+`:
            return add(nrone, nrtwo);
        case `-`:
            return substract(nrone, nrtwo);
        case `*`:
            return multiply(nrone, nrtwo);
        case `/`:
            return divide(nrone, nrtwo);
        default:
            return `Error!`;
    }
}
function add(nrone, nrtwo){
    return nrone + nrtwo;
}
function substract(nrone, nrtwo){
    return nrone - nrtwo;
}
function multiply(nrone, nrtwo){
    return nrone * nrtwo;
}
function divide(nrone, nrtwo){
    if(nrtwo == 0){
        return `Cant divide by 0!`;
    }
    return nrone / nrtwo;
}
function returnToDisplay(value){
    const display = document.getElementById('display');
    if (display.textContent != 0){
        display.textContent += value;
    }
    else{
        display.textContent = value;
    }
    if (value == `C`){
        display.textContent = display.textContent.slice(0, -2);
    }
    if (display.textContent == ``){
        display.textContent = `0`;
    }
}