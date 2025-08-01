// let result = 0;

// function add(x, y) {
//   result = x + y;
// }
// function subtract(x, y) {
//   result = x - y;
// }
// function accumulate(x) {
//   result += x;
// }
// add(5, 10);
// console.log(result);
// subtract(6, 12);
// console.log(result);
// accumulate(6);
// console.log(result);

//Operaciones que se conectan entre ellas se 
// imprime las 3 partes
const add = (x,y) => x+y;
const substract = (x,y) => x-y;
const accumulate = (current,x) => current + x;
let result = add(5,10);
result1 = substract(result,12);
result2 = accumulate(result1,6);
console.log( add, substract, accumulate);
console.log(result,result1,result2);