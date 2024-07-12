                            // Async JS
/*

    "async and await make promises easier to write"

    'async' makes a function return a Promise

    'await' makes a function wait for a Promise

*/

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
console.log("\n\nOriginal Array: ", myNumbers)

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => 
    x >= 0);

// Display Result
console.log("\nPositive Numbers: ", posNumbers)
console.log("--------------------\n")
//document.getElementById("demo").innerHTML = posNumbers; 

//negative numbers
function removeNeg(numbers, callback) { 
    const myArray = []; // array to store pos No

    for (const x of numbers) {
        if (callback(x)) {
               myArray.push(x);
        }
    }
    return myArray;
}

                        // ASYNCHRONOUS FUNCTIONS
// Functions running in parallel with other functions are called asynchronous. 
// i-e setTimeout()
console.log("Waiting for setTimeout() Function Load...")

setTimeout(myFunction, 1500); // 1 sec = 1000 ms 

function myFunction() {
    console.log("I love You !!")
    //document.getElementById("demo").innerHTML = "I love You !!";
    console.log("--------------------\n")
}



// setInterval(), you can specify a callback function to be executed for each interval
let count = 0;
let maxCount = 5;

let IntervalID = setInterval(myFunction1, 2000);

function myFunction1() {
  let d = new Date();
  console.log(`Time = ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
  console.log("------------")

  count++;
  if(count >= maxCount) {
    clearInterval(IntervalID)
  }
}







