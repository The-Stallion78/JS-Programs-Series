// BITWISE OPERATORS

/*

&	AND	= Sets each bit to 1 if both bits are 1

|	OR	= Sets each bit to 1 if one of two bits is 1

^	XOR	= Sets each bit to 1 if only one of two bits is 1

~	NOT	= Inverts all the bits

<<	Zero fill left shift	= Shifts left by pushing zeros in from the right and let the leftmost bits fall off

>>	Signed right shift	= Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

>>>	Zero fill right shift	= Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

*/

let x1 = 5 | 1;
let x2 = 5 & 1;
let x3 = 5 ^ 1;
let x4 =  ~1;
let x5 = 5 << 1;
let x6 = 5 >> 1;
let x7 = 5 >>> 1;

console.log("Bitwise Logical Operations")
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)
console.log(x6)
console.log(x7)
console.log('-------------------\n')

