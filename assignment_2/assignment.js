const task3Element = document.getElementById('task-3');
const someName = 'Some name';

function1();
function2(someName);
task3Element.addEventListener('click', function1);
alert(function3('String 1', 'String 2', 'String 3'));

function function1() {
    alert('This is function 1!');
}

function function2(name) {
    alert(name);
}

function function3(string1, string2, string3) {
    return string1 + string2 + string3;
}