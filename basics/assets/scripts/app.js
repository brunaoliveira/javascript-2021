let currentResult = 0;

function getUserInput()  {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, previousResult, inputNumber) {
    const calculationDescription = `${previousResult} ${operator} ${inputNumber}`;
    outputResult(currentResult, calculationDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const previousResult = currentResult;
    currentResult += enteredNumber;
    // +userInput.value transform to number, keeping the floating point if appears
    createAndWriteOutput('+', previousResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserInput();
    currentResult -= enteredNumber;
    createAndWriteOutput('-', previousResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserInput();
    currentResult *= enteredNumber;
    createAndWriteOutput('*', previousResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserInput();
    currentResult /= enteredNumber;
    createAndWriteOutput('/', previousResult, enteredNumber);
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);