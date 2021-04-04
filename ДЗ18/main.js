// ДЗ 18

function products() {
	const listOfProducts = prompt('Write list of products, you want to buy:','');
	const list= listOfProducts.split(' ');

	const bag = {};

	for (let i = 0; i < list.length; i++) {
		key = list[i];
		bag[key] = +prompt(`How many ${key}?`, '');
	}

	console.log(bag);
};	

products();