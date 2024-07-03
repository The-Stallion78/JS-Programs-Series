// SETS

/*

    A JavaScript 'Set' is a collection of unique values.

    Each value can only occur once in a 'Set'.

    The values can be of any type, primitive values or objects.

*/

/* 
    You can create a JavaScript Set by:
        Passing an array to 'new Set()'
*/

let newSet = new Set([3, 5, 6, 7,8, 9])
console.log("The set has "+ newSet.size + " Values.")
console.log('-------------------\n')

let mySet = new Set();
mySet.add("Khizar Hayat")
mySet.add("Guriya Rani")
mySet.add("Rumi Rani")
mySet.add("Ahmar Hayat")

mySet.delete("Ahmar Hayat")

console.log(mySet.has("Neelofur"))
console.log("Total values in a set: ",mySet)
console.log('-------------------\n')

console.log('FOR...OF LOOP Iteration\n')
for (const value of mySet) {
    console.log(value);
  }
  
  console.log('-------------------\n')