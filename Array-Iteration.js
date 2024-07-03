                            // ARRAY ITERATION METHOD


let animals = ["cat", "Dog", "Lion", "Tiger"];

// Array forEach - calls a function (a callback function) once for each array element.

animals.forEach ((animal, Index) => {
    console.log(`Index ${Index}: ${animal}`)
})
console.log("------------------------\n")

// Array map() - creates a new array by performing a function on each array element.
var anotherArray = animals.map(myFunction)
console.log('older array: ', animals)
function myFunction(value, Index) {
  return `Index ${Index} : ${value}`
}
console.log(`New array  is: `, anotherArray)
console.log("------------------------\n")

// Array filter() - creates a new array with array elements that pass a test.
var Num = [44, 2, 11, 445, 99, 0, 65]
var filteredArray = Num.filter(myFunction2);

function myFunction2 (value, IN) {
  return value > 15;
}
console.log(`Filtered array: ${filteredArray}`)
console.log("------------------------\n")


// Array reduce()
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("Reduced value", sum); // Output: 15
console.log("------------------------\n")

// Array reduce()
var Num = [44, 2, 11, 445, 99, 0, 65]
var everyArray = Num.every(myFunction3);

function myFunction3 (value, IN) {
  return value > 15;
}
console.log(`Every array: ${everyArray}`)
console.log("------------------------\n")


