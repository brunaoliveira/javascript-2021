let currentResult = 0;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
}

// não passa com parenteses, só o nome da função, 
// para que seja executada apenas no evento 'click' e não no momento de compiling do arquivo
addBtn.addEventListener('click', add);
