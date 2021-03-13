let a = true && false; // false
console.log(a);
let a1 = true || false; // true
console.log(a1);
let a2 = true && !false; // true
console.log(a2);
let a3 = true && 5; // 5
console.log(a3);
let a4 = 5 && false; // false
console.log(a4);
let a5 = true || 5; // true
console.log(a5);
let a6 = !5; // false
console.log(a6);
let a7 = 5 && 7; // 7
console.log(a7);
let a8 = 5 || 2; // 5
console.log(a8);
let a9 = 5 && 'hi'; // 'hi'
console.log(a9);
let a10 = 5 || 'hi'; // 5
console.log(a10);
let a11 = !5 && 7; // false
console.log(a11);

let b = true && 7 || false && '';  //true && 7 = 7; 7 || false = 7; 7 && '' = 7;
console.log(b);

let b1 = 0 || 3 && true && !3; // 0 || 3 = 3; 3 && true = true; true && !3 = false;
console.log (b1);

let b2 = !!!false && !5 || 1 && true; // !!!false && !5 = false; !5 || 1 = 1; 1 && true = true;
console.log (b2);