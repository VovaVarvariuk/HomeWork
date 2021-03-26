let firstNumber = +prompt('Перше число:','');

let secondNumber = +prompt('Друге число:','');

let operation = prompt('Операція:','');

function calcOperation(a, b) {
a = firstNumber;
b = secondNumber;

if (operation == '+'){
	return a + b;
} else if (operation == '-') {
	return a - b;
} else if (operation == '*') {
	return a * b;
} else if (operation == '/') {
	return a / b;
} else if (operation == '**') {
	return a**b;
} else {
	return "Немає такої операції";
}
}

let result = calcOperation(firstNumber, secondNumber, operation);
alert(result);

