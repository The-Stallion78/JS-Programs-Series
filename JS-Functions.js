                    // FUNCTIONS 


function Sum (a, b) {
    // let sum = a + b;
    // console.log("Sum is: ", sum)
    this.first = a;
    this.second = b;
    let sum = a + b;
    console.log(`Sum of ${this.first} and  ${this.second} = ${sum}`)
}

//let x = Sum (4, 5)       // Calling via object
//console.log(x)

//console.log(Sum(4, 5))    // Direct calling

Sum (4, 5);    // Function call
Sum (3, 99)
Sum(34, -40)
console.log("\n-----------------\n")

