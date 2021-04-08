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

function writeToLog(operator, previousResult, inputNumber, currentResult) {
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
    writeToLog('ADD', previousResult, enteredNumber, currentResult);
    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    currentResult -= enteredNumber;

    createAndWriteOutput('-', previousResult, enteredNumber);
    writeToLog('SUB', previousResult, enteredNumber, currentResult);
    console.log(logEntries);
}

function multiply() {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    currentResult *= enteredNumber;

    createAndWriteOutput('*', previousResult, enteredNumber);
    writeToLog('MUL', previousResult, enteredNumber, currentResult);
    console.log(logEntries);
}

function divide() {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    currentResult /= enteredNumber;

    createAndWriteOutput('/', previousResult, enteredNumber);
    writeToLog('DIV', previousResult, enteredNumber, currentResult);
    console.log(logEntries);
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);