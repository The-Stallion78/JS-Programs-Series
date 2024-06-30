                    // ARRAY SEARCH METHODS

let cars = ["Fortuner", "Lexus LX570", "BMW", "Crown", "Honda Accord", "Buggatti", "Audi Altron 6", "Supra" ]

// Array indexOf()
console.log("After indexOf(): ", cars.indexOf("Honda Accord"))
console.log("--------------------------\n")


// Array lastIndexOf()
console.log("After lastIndexOf(): ", cars.lastIndexOf("Lexus LX570"))
console.log("--------------------------\n")


// Array includes()
console.log("After includes(): ", cars.includes("Fortuner"))
console.log("--------------------------\n")


// Array find() -  returns the value of the first array element that passes a test function.
console.log("After find(): ", cars.find(cars=>cars.length > 10))
console.log("--------------------------\n")


// Array findIndex()
console.log("After findIndex(): ", cars.findIndex(cars => cars.findIndex === "Crown"))
console.log("--------------------------\n")


// Array findLast()
console.log("After findLast(): ", cars.findLast(cars => cars.startsWith("A")))
console.log("--------------------------\n")


// Array findLastIndex()
console.log("After findLastIndex(): ", cars.findLastIndex(cars => cars.findLastIndex ==="BMW"))
console.log("--------------------------\n")


