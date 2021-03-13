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

// Приоритет оператора && больше, чем у ||

let b = true && 7 || false && '';  //(1) true && 7 = 7; (2) false && '' = ''; (3) 7 || '' = 7;
console.log(b);

let b1 = 0 || 3 && true && !3; // (1) 3 && true = true; (2) true && !3 = false; (3) 0 || false = false;
console.log (b1);

let b2 = !!!false && !5 || 1 && true; // (1) !!!false && !5 = false; (2) 1 && true = true; (3) false || true = true;
console.log (b2);