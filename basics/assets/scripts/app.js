let currentResult = 0;

function getUserInput()  {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserInput();
    const calculationDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    // +userInput.value transform to number, keeping the floating point if appears

    outputResult(currentResult, calculationDescription);
}

function subtract() {
    const enteredNumber = getUserInput();
    const calculationDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;

    outputResult(currentResult, calculationDescription);
}

function multiply() {
    const enteredNumber = getUserInput();
    const calculationDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;

    outputResult(currentResult, calculationDescription);
}

function divide() {
    const enteredNumber = getUserInput();
    const calculationDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;

    outputResult(currentResult, calculationDescription);
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);