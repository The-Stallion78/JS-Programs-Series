// COMPARISON OPERATORS
// ==, ===, !=, >=, <=, >, <
//Comparison operators are used in logical statements to determine equality or difference between variables or values.
console.log('-------------------\n')
console.log("COMPARISON OPERATORS")
let a = 6;
let b = 4;

result1 = a == b;
console.log(result1); 

result1 = a === b;
console.log(result1); 

result1 = a >= b;
console.log(result1); 

result1 = a <= b;
console.log(result1); 

result1 = a != b;
console.log(result1); 

result1 = a > b;
console.log(result1); 

result1 = a < b;
console.log(result1); 

                    // LOGICAL OPERATORS
// Logical operators are used to determine the logic between variables or values.
// &&, ||, !

console.log('-------------------\n')
console.log("LOGICAL OPERATORS")
let x = 99;
let y = 100;
let condtion;

condtion = x || y;
console.log(condtion)

condtion = x && y;
console.log(condtion)

condtion = (x != y);
console.log(condtion)
console.log('-------------------\n')

console.log("TERNARY OPERATOR")
// Ternary operator is used to replace if else statement.
let age = parseInt("Enter your Age: ")
let vote_able = (age < 18) ? "Too Young" : "Old Enough"
console.log("The Person is: ", vote_able)
console.log('-------------------\n')


