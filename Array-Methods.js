                        // ARRAY METHODS

let animals = ["cat", "Dog", "Lion", "Tiger"]   // initial array
console.log("Original Array: ", animals)
console.log("--------------------------")

// 1. push() - adds an element to the end of an array
animals.push("Elephant")
animals.push("Wolf")
console.log("After push(): ", animals)
console.log("--------------------------")

// 2. pop() - removes element from the end of array
animals.pop()
console.log("After pop(): ", animals)
console.log("--------------------------")

// 3. shift() - remove an element from the beginning of an array

animals.shift()
console.log("After shift(): ", animals)
console.log("--------------------------")

// 4.unshift() - add one or more elements to the beginning of an array

animals.unshift("Leopard", "Fox")
console.log("After unshift(): ", animals)
console.log("--------------------------")

// 5. splice() - to insert one or more elements anywhere in an array, while optionally removing one or more elements that come after it.

animals.splice(2, 3, "Monkey", "Anaconda", "Squirral")
console.log("After splice():", animals)
console.log("--------------------------")

// You could make additions without removing any elements. 
animals.splice(2, 0, "Crocodile", "Chimpanzee")
console.log("After Splice(): ", animals)
console.log("--------------------------")

// You can also remove elements without adding any
animals.splice(6, 2)
console.log("After Splice(): ", animals)
console.log("--------------------------")

// 6. slice() - copies a slice of elements from given range in an array in another array
animals1 = animals.slice(1, 3)
console.log("After slice(): ", animals1)
console.log("--------------------------")

// 7. toString() -  converts an array to a string of (comma separated) array values
console.log("After toString():", animals.toString())
console.log("--------------------------\n")

// 8. length property
console.log("Length of array: ", animals.length)
console.log("--------------------------\n")

// 9. concat() - combines two arrays together
console.log("After concat(): ", animals.concat(animals1));
console.log("--------------------------\n")

// Merging Three Arrays
console.log("After concat() Three arrays: ", animals.concat(animals1, animals));
console.log("--------------------------\n")

// 10. 

