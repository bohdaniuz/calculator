// DOM Selectors

let numBtns = document.querySelectorAll('.numBtn');
let oprBtns = document.querySelectorAll('.oprBtn');
let eqlBtn = document.getElementById('eqlBtn');
let displayValue = document.getElementById('displayValue');
let formulaDisplay = document.getElementById('formulaDisplay');

// Variables

let tempVal = '' // Stores temporary value while user clicks number button

// Computational Functions

function addition (x, y) {
    return x + y;
}
function subtraction (x, y) {
    return x - y;
}
function division (x, y) {
    return x / y;
}
function multiplication (x, y) {
    return x * y;
}
function operateEquals() {
    calculation.value2 = parseFloat(tempVal);
    displayValue.innerHTML = map.get(calculation.operator)(calculation.value1, calculation.value2);
    formulaDisplay.innerHTML = `${calculation.value1} ` + `${calculation.operator}` + ` ${calculation.value2}` + ' =';
    calculation.value1 = null;
    calculation.value2 = null;
    tempVal = '';
}
function operate() {

}

// Event Listener Functions

function oprEvent() {
    if (calculation.value1 == null) {
        calculation.operator = this.value;
        calculation.value1 = parseFloat(tempVal);
        tempVal = '';
        formulaDisplay.innerHTML = `${calculation.value1} ` + `${calculation.operator}`;
    }
    else if (calculation.value2 == null) {
        calculation.value2 = parseFloat(tempVal);
    }
    else {
        operate();
    }
}
function numEvent() {
    if (calculation.value1 == null) {
        formulaDisplay.innerHTML = '';
    }

    tempVal += this.value;
    displayValue.innerHTML = tempVal;
}
// Creates a map that links each operator to a respective function

let map = new Map();

map.set('+', addition);
map.set('-', subtraction);
map.set('/', division);
map.set('x', multiplication);

// Object used to store values for calculations

let calculation = {
    operator: '+',
    value1: null,
    value2: null,
}

// Event Listeners

numBtns.forEach(btn => btn.addEventListener('click', numEvent));

oprBtns.forEach(btn => btn.addEventListener('click', oprEvent));

eqlBtn.addEventListener('click', operateEquals);