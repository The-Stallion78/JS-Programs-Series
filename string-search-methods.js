                        // STRING SEARCH METHODS

let string1 = "This is me Mubeen Rani and I lives in Gujranwala.";

// indexOf() : The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found

console.log("Index of a word: ", string1.indexOf("Mubeen"))
console.log("-------------------------\n")

// lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

console.log("Last Index of a word: ", string1.lastIndexOf("Rani"))
console.log("-------------------------\n")

// search() : The search() method searches a string for a string (or a regular expression) and returns the position of the match

console.log("Searching of a word: ", string1.search("me"))
console.log("-------------------------\n")

// match() : The match() method returns an array containing the results of matching a string against a string (or a regular expression).

console.log("Matching of a word 'lives': ", string1.match("Gujranwala"))
console.log("-------------------------\n")

// matchAll() : The matchAll() method returns an iterator containing the results of matching a string against a string.
let string2 = "Cats are very friendly. Cats loves milk."
console.log(string2.matchAll("Cats"))
console.log("-------------------------\n")

// includes()  : The includes() method returns true if a string contains a specified value Otherwise it returns false.
console.log("Checking of a word 'Gujranwala': ", string1.includes("Gujranwala"))
console.log("-------------------------\n")

// startsWith() : The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false

console.log("Start of a string: ", string1.startsWith("This"))
console.log("-------------------------\n")

// endsWith() : The endsWith() method returns true if a string ends with a specified value.Otherwise it returns false

console.log("End of a string: ", string1.endsWith("."))
console.log("-------------------------\n")








