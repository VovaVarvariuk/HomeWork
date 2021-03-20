for(let i = 1; i < 100; i++) {
	if(i % 3 == 0 && i % 5 == 0) break;
	if(i % 3 == 0) continue;
	if(i % 5 == 0) continue;
	console.log(i);
}


const number = Math.round(Math.random() * 100);

for (let i = 1; i > 0; i++) {
	let game = +prompt('Відгадай додатнє число: ','');
	if (game == number){
		alert('ви вгадали');
		console.log(number);
		break;
	} else if (game == 0 || null){
		break;
	} else if( game >= number + 10) {
		alert('значно менше');
		continue;
	} else if( game <= number - 10) {
		alert('значно більше');
		continue;
	} else if( game <= (number + 9) && game >= (number + 1)) {
		alert('менше');
		continue;
	} else if( game >= (number - 9) && game <= (number - 1)) {
		alert('більше');
		continue;
	} 
}
