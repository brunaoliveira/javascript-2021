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
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    var operationSymbol;

    if (calculationType === 'add') {
        currentResult += enteredNumber;
        operationSymbol = "+";
    } else if (calculationType === 'sub') {
        currentResult -= enteredNumber;
        operationSymbol = "-";
    } else if (calculationType === 'mul') {
        currentResult *= enteredNumber;
        operationSymbol = "*";
    } else {
        currentResult /= enteredNumber;
        operationSymbol = "/";
    }             

    createAndWriteOutput(operationSymbol, previousResult, enteredNumber);
    writeToLog(calculationType.toUpperCase(), previousResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('add');
}

function subtract() {
    calculateResult('sub');
}

function multiply() {
    calculateResult('mul');
}

function divide() {
    calculateResult('div');
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);