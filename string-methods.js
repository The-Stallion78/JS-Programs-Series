            // String methods 

let string1 = "My name is Khizar Hayat Khan"
console.log("------------------------\n")
// string length

console.log("Length of string: ", string1.length)

// at() method
console.log("Character at Location 15: ", string1.at(15))

// charAt() method
console.log("Character at Location 5: ", string1.charAt(5))

// charCodeAt() method
console.log("Character at Location 25: ", string1.charCodeAt(25))
console.log("------------------------\n")


// slice() 
console.log("Slice the text form:", string1.slice(3, 18))
console.log("------------------------\n")

/* 

substring(): substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring(). */

console.log("Substring the text form:", string1.substring(3, 18))
console.log("------------------------\n")

// toUpperCase(): A string is converted to upper case with toUpperCase()

console.log("Uppercase text form:", string1.toUpperCase())
console.log("------------------------\n")

// toLowerCase(): A string is converted to upper case with toLowerCase()

console.log("LowerCase text form:", string1.toLowerCase())
console.log("------------------------\n")


// concat() : joins two or more strings
text2 = "Mubeen Rani Is my best sister"
console.log("Concatenated text form:", string1.concat(" and ", text2))
console.log("------------------------\n")


// trim() : The trim() method removes whitespace from both sides of a string
let text = "            Rumi Rani"
console.log("Trimmed text form:", text.trim())
console.log("------------------------\n")

// repeat() : The repeat() method returns a string with a number of copies of a string.

console.log(text2.repeat(3))
console.log("------------------------\n")

// replace() : The replace() method replaces a specified value with another value in a string

console.log(string1.replace("Khizar Hayat Khan", "Rumi Rani"))
console.log("------------------------\n")

// replaceAll()

console.log("Cats", "Dogs")

// split() : A string can be converted to an array with the split() method
 
let x = "a,b,c,d,e,f"
console.log("Spliting the Text: ", x.split(","))
console.log(x[3])
console.log("------------------------\n")





