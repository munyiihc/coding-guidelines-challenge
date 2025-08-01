
function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function accumulate(x,current) {
  return x + current 
}

console.log(add(5, 10))
console.log(accumulate(substract(6,12),6))