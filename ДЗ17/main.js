//  ДЗ 17

const customerChoise = prompt('Введите несколько чисел:', '')
const choise = customerChoise.split(' ').map(function(num) {
	if (+num) {
		return +num;
	 } else {
		return 0;
	 }
	});

let order = choise.sort(function(a, b) {
		if (a < b) return 1;
		if (a == b) return 0;
		if (a > b) return -1;
 }).join('; ');

 console.log(order);