// TYPE CONVERSION

// JavaScript variables can be converted to a new variable and another data type.

// Converting Strings to Numbers
// The Number() function converts a string to a number.
console.log(Number("3.1415"))


// The parseInt() function converts a string to a number, and the parseFloat() function converts a string.
console.log(parseFloat("3.88"))
console.log(parseInt("4.03"))

// Converting Numbers to Strings
// The toString() method converts a number to a string.
console.log(String(44.5))

/*

toExponential() -	Returns a string, with a number rounded and written using exponential notation.

toFixed() - Returns a string, with a number rounded and written with a specified number of decimals.

toPrecision() -	Returns a string, with a number written with a specified length

*/
let num = 12345.6789;
console.log(num.toFixed(2)); // Outputs: "12345.68"
console.log(num.toExponential(5)); // Outputs: "12345.67890"
console.log(num.toPrecision(3))
console.log("-----------------------\n")


