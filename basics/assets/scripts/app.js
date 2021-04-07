let currentResult = 0;
let logEntries = [];

function getUserInput()  {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, previousResult, inputNumber) {
    const calculationDescription = `${previousResult} ${operator} ${inputNumber}`;
    outputResult(currentResult, calculationDescription);
    logEntries.push(calculationDescription);
}

function writeToLog(operator, previousResult, inputNumber) {
    const logEntry = {
        operation: operator,
        previousResult: previousResult,
        number: inputNumber,
        result: currentResult
    };

    logEntries.push(logEntry);
}

function add() {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    currentResult += enteredNumber;
    // +userInput.value transform to number, keeping the floating point if appears
    createAndWriteOutput('+', previousResult, enteredNumber);
    writeToLog('ADD', previousResult, enteredNumber);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserInput();
    currentResult -= enteredNumber;
    createAndWriteOutput('-', previousResult, enteredNumber);
    witeToLog('SUB', previousResult, enteredNumber);
    console.log(logEntries);
}

function multiply() {
    const enteredNumber = getUserInput();
    currentResult *= enteredNumber;
    createAndWriteOutput('*', previousResult, enteredNumber);
    witeToLog('MUL', previousResult, enteredNumber);
    console.log(logEntries);
}

function divide() {
    const enteredNumber = getUserInput();
    currentResult /= enteredNumber;
    createAndWriteOutput('/', previousResult, enteredNumber);
    witeToLog('DIV', previousResult, enteredNumber);
    console.log(logEntries);
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);