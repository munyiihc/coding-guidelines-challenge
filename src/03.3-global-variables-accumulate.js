// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// const result = add(5, 10);
// console.log(result);
// const accumulate = add(result, 6);
// console.log(subtract(accumulate, 12));

const add = (x, y) => x + y;
const substract = (x, y) => x - y;
console.log(add(5, 10));
console.log(substract(add(5, 10) + 6, 12));