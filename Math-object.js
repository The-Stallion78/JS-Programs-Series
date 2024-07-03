// MATH OBJECT

// Math object allows to perform mathematical tasks on numbers.


/*

Math.E         returns Euler's number
Math.PI        returns PI
Math.SQRT2     returns the square root of 2
Math.SQRT1_2   returns the square root of 1/2
Math.LN2       returns natural logarithm of 2
Math.LN10      returns natural logarithm of 10
Math.LOG2E     returns base 2 logarithm of E
Math.LOG10E    returns base 10 logarithm of E

*/

console.log("Math.E : ", Math.E)
console.log("Math.PI : ", Math.PI)
console.log("Math.SQRT2 : ", Math.SQRT2)
console.log("Math.SQRT1_2 : ", Math.SQRT1_2)
console.log("Math.LN2 : ", Math.LN2)
console.log("Math.LN10 : ", Math.LN10)
console.log("Math.LOG2E : ", Math.LOG2E)
console.log("Math.LOG10E : ", Math.LOG10E)
console.log("--------------------------\n")

/*

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
Math.pow(x, y) returns the value of x to the power of y
Math.sqrt(x)	Returns the square root of x
Math.abs(x) returns the absolute (positive) value of x
Math.min(x, y, z, ...)	Returns the lowest of the given numbers
Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians)

Math.cos(x) returns the cosine (a value between -1 and 1) of the angle

Math.tan(x) returns the tangent (a value between -1 and 1) of the

Math.log(x) returns the natural logarithm of x.
Math.random() returns the random values between 0-1.


*/
console.log("Math.round() : ", Math.round(5.8))
console.log("Math.ceil() : ", Math.ceil(4.93))
console.log("Math.floor() : ", Math.floor(8.3))
console.log("Math.trunc() : ", Math.trunc(55.6))
console.log("Math.pow() : ", Math.pow(8,3))
console.log("Math.sqrt() : ", Math.sqrt(55.6))
console.log("Math.abs() : ", Math.abs(-5.6))
console.log("Math.sin() : ", Math.sin(1))
console.log("Math.cos() : ", Math.cos(0))
console.log("Math.max() : ", Math.max(55, 4, 91))
console.log("Math.min() : ", Math.min(55, 4, 91))
console.log("Math.random() : ", Math.random())
console.log("Math.log() : ", Math.log(10))
console.log("Math.log2() : ", Math.log2(10))
console.log("Math.log10() : ", Math.log10(100))

console.log("Random() returns random values between 0-1 when used with floor(): ", Math.floor(Math.random() * 10))

console.log("Boolean function(): ", Boolean(9 < 11))
console.log("--------------------------\n")


/*

abs(x)	Returns the absolute value of x

acos(x)	Returns the arccosine of x, in radians

acosh(x)	Returns the hyperbolic arccosine of x

asin(x)	Returns the arcsine of x, in radians

asinh(x)	Returns the hyperbolic arcsine of x

atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians

atan2(y, x)	Returns the arctangent of the quotient of its arguments

atanh(x)	Returns the hyperbolic arctangent of x

cbrt(x)	Returns the cubic root of x

ceil(x)	Returns x, rounded upwards to the nearest integer

cos(x)	Returns the cosine of x (x is in radians)

cosh(x)	Returns the hyperbolic cosine of x

exp(x)	Returns the value of Ex

floor(x)	Returns x, rounded downwards to the nearest integer

log(x)	Returns the natural logarithm (base E) of x

max(x, y, z, ..., n)	Returns the number with the highest value

min(x, y, z, ..., n)	Returns the number with the lowest value

pow(x, y)	Returns the value of x to the power of y

random()	Returns a random number between 0 and 1

round(x)	Rounds x to the nearest integer

sign(x)	Returns if x is negative, null or positive (-1, 0, 1)

sin(x)	Returns the sine of x (x is in radians)

sinh(x)	Returns the hyperbolic sine of x

sqrt(x)	Returns the square root of x

tan(x)	Returns the tangent of an angle

tanh(x)	Returns the hyperbolic tangent of a number

trunc(x)	Returns the integer part of a number (x)

*/
