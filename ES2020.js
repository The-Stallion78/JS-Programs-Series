/*

New Features in ES2020

    Optional Chaining - The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).

    BigInt
    String matchAll()
    The Nullish Coalescing Operator (??)
    The Optional Chaining Operator (?.)
    Logical AND Assignment Operator (&&=)
    Logical OR Assignment (||=)
    Nullish Coalescing Assignment (??=)
    Promise.allSettled()
    Dynamic Import


*/

let yy = BigInt("45555555555555555555554534")
console.log("Value of yy:", yy )
console.log("-----------------------\n")


const text = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator = text.matchAll("Cats");
console.log(Array.from(iterator))
console.log("-----------------------\n")

let name = " null";
let text1 = "missing";
let result = name ?? text1;
console.log("Result is: ", result)
console.log("-----------------------\n")

const car = {type:"Fiat", model:"500", color:"white"};
let name1 = car?.name1;
console.log("Name is: ", name1)
console.log("-----------------------\n")

// The &&= Operator
let x = 10;
x &&= 5;
console.log(x)
console.log("-----------------------\n")

//The ||= Operator
let xx = 15;
xx &&= 15;
console.log(xx)
console.log("-----------------------\n")

// The ??= Operator
let xx1 =null   ;
xx1 ??= 10;
console.log("If Unassigned then: ", xx1)
console.log("-----------------------\n")

//let nu = BigInt("100000000")
let nu = 1_000_114_222;
console.log(nu)
console.log("-----------------------\n")



