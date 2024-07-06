// ARROW FUNCTIONS

// introduced in ES6
// before this, older method of function declaration was used, which is still in use
// but arrow functions are more concise and easy to use

// OLDER METHOD
console.log("REGULAR FUNCTION")
function Sum(a, b) {
    let result =  a + b;
    console.log("Sum is: ", result)
}
Sum (10, 30)
console.log("------------------------\n")

console.log("ARROW FUNCTION")

sum = (a, b) => {
    let result = a + b;
    console.log("Sum is: ", result)
}
sum (10, 20)
console.log("------------------------\n")