let runningTotal = 0; // actual number
let buffer = '0'; // keeping track on what's on the screen
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
   if(isNaN(value)) {
       // this is not a number
    handleSymbol(value);
   } else {
       // this is a number
    handleNumber(value);
   }
   screen.innerText = buffer; // rerenders the screen after every button click.
}

function handleSymbol(symbol) {
    console.log(symbol);
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;  
        case  '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;  
        case '=': 
            if(previousOperator === null) {
                // you need two numbers to do math
                return;
            }    
            flushOperation(parseInt(buffer)); 
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;             
    }
  
}

function handleMath(symbol) {
    if(buffer === '0') {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer); // +buffer is the shorthand way of parseInt(buffer).

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    } else if(previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if(previousOperator === '×') {
        runningTotal *= intBuffer;
    } else  {
        runningTotal /= intBuffer;
    }
    console.log('total', runningTotal);
}

function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString;
    } else {
        buffer = buffer + numberString;
    } 
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(e) {
        buttonClick(e.target.innerText);
    });
}

init();