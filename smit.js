// var number = parseInt(prompt("Enter a number for Factorial:"));
var number = 4; // number of which we've to find factorial
var result = 1; // the number to store the factorial

if (number < 0) {
    console.log("Factorial does not exist for Zero or negative numbers");
}

for(var i = 1; i <= number; i++) {
    result = result * i;     // factorial logic
}

console.log("\n\n")
console.log(`Factorial of ${number} : ${result}`)
console.log("----------------------\n")

