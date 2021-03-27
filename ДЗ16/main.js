//Задача №1
let ammo = +prompt('Сколько патронов взял:','');
let ennemi = +prompt('Сколько драконов хочешь победить:','');

function hero(bullets, dragons){
 if(dragons*2 <= bullets){
   return true;
 } else {
   return false;
 }
}

alert(hero(ammo, ennemi));


//Задача №2
let question = +prompt('Введи порядковый номер парного числа:','');

function nthEven(n){
	let res = (n * 2) - 2;
	return res;
 }

alert(nthEven(question));

//ДЗ 16
let height = +prompt('Висота сходинок?','')

function drawSteps(n) {
	let step = '*';
	let floar = '';
	for(let i = 1; i <= n; i++){
		floar += `${step.repeat(i)}\n`;
	}
	return floar;
}

let test = drawSteps(height);
console.log(test);
