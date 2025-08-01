// function calc(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       total += nums[i];
//     }
//   }
//   return total;
// }

// const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// console.log(calc(numbers));


//La funcion saca los numeros positivos y los suma dandote el total
function calc(nums){
  return nums.reduce((acc, num) => num > 0 ? acc + num : acc, 0);
}
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log(calc(numbers));