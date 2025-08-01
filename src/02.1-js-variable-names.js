// function sumPositiveNumbers(numbers) {
//   let positiveSum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       positiveSum += numbers[i];
//     }
//   }
//   return positiveSum;
// }

////La funcion saca los numeros positivos y los suma dandote el total en dos funciones(.filter/.reduce)
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

const sumPositiveNumbers = nums => nums.filter(n => n > 0 ).reduce((a, b) => a + b, 0);
console.log(sumPositiveNumbers(numbers));