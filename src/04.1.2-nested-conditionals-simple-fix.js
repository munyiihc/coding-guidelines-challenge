// function isOldEnoughToDrive(age) {
//   if (age >= 16) return "Yes"
//   return "No";
// }

//Input de edad para saber si puedes conducir una 125CC
const isOldEnoughToDrive = age => age >= 16 ? "yes" : "no" ;

const input = prompt("Edad");
const age = parseInt(input);

console.log(isOldEnoughToDrive(age));