// SEARCH() - The search() method uses an expression to search for a match, and returns the position of the match

// REPLACE() - The replace() method returns a modified string where the pattern is replaced.

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n); 

let text2 = "Visit Microsoft!";
let result = text2.replace(/Microsoft/i, "W3Schools");
console.log(result);
console.log("-----------------\n")

