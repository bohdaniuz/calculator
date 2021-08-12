let numBtns = document.querySelectorAll('.numBtn');
let oprBtns = document.querySelectorAll('.oprBtn');
let field = document.getElementById('numNum');
let formulaDisplay = document.getElementById('formulaDisplay'); 
let displayValue = '';
let x = ''
let operands = [];

const map = new Map();

map.set('+', add);
map.set('-', subtract);
map.set('x', multiply);
map.set('/', divide);


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, z) {
    map.get(`${z}`);

} 

let hypo = {
    num1: 5,
    num2: 10,
    operator: '+',
}



/** numBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        displayValue += btn.value.toString();
        field.innerHTML = displayValue;
    });
});

oprBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        x = parseInt(displayValue);
        formulaDisplay.innerHTML += displayValue + btn.value.toString();
    })
});*/
