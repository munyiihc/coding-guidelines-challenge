/*function numberIsDivisible(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 3 === 0) {
        return "Divisible by 2 and 3";
      } else {
        return "Divisible by 2";
      }
    } else {
      if (num % 3 === 0) {
        return "Divisible by 3";
      } else {
        return "Not divisible by 2 or 3";
      }
    }
  } else {
    return "Number is not positive";
  }
}*/
const numberIsDivisible = num =>(num < 0 ? "Number is not positive":
  (num % 2 ===0 ? (num % 3 === 0 ? "Divisible by 2 and 3" : "Divisible by 2") :
  (num % 3 === 0 ? "Divisible by 3" : "Not divisible by 2 or 3")))

console.log(numberIsDivisible(9)); // "Divisible by 2 and 3"