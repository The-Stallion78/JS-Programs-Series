                            // ARRAY ITERATION METHOD
let animals = ["cat", "Dog", "Lion", "Tiger"];

// Array forEach - calls a function (a callback function) once for each array element.

animals.forEach ((animal, Index) => {
    console.log(`Index ${Index}: ${animal}`)
})
console.log("------------------------\n")

// Array map()
const numbers = [45, 4, 9, 16, 25];
let txt = "";

// Define the callback function
function myFunction(value, index, array) {
  txt += value + "<br>"; // Concatenate the value and a line break to txt
}

// Use forEach to iterate over the array
numbers.forEach(myFunction);

console.log(txt); // Output the result



// Array flatMap()



// Array filter()



// Array reduce()



// Array reduceRight()



// Array every()



// Array some()



// Array from()



// Array keys()



// Array entries()



// Array with()



// Array Spread (...)



