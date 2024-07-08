                    // OBJECT METHODS

/*
    // Copies properties from a source object to a target object
        Object.assign(target, source)

    // Creates an object from an existing object
        Object.create(object)

    // Returns an array of the key/value pairs of an object
        Object.entries(object)

    // Creates an object from a list of keys/values
        Object.fromEntries()

    // Returns an array of the keys of an object
        Object.keys(object)

    // Returns an array of the property values of an object
        Object.values(object)

    // Groups object elements according to a function
        Object.groupBy(object, callback)
*/

/*

    // Adding or changing an object property
        Object.defineProperty(object, property, descriptor)

    // Adding or changing object properties
        Object.defineProperties(object, descriptors)

    // Accessing a Property
        Object.getOwnPropertyDescriptor(object, property)

    // Accessing Properties
        Object.getOwnPropertyDescriptors(object)

    // Returns all properties as an array
        Object.getOwnPropertyNames(object)

    // Accessing the prototype
        Object.getPrototypeOf(object)

*/

/*

    // Prevents re-assignment
        const car = {type:"Fiat", model:"500", color:"white"};

    // Prevents adding object properties
        Object.preventExtensions(object)

    // Returns true if properties can be added to an object
        Object.isExtensible(object)

    // Prevents adding and deleting object properties
        Object.seal(object)

    // Returns true if object is sealed
        Object.isSealed(object)

    // Prevents any changes to an object
        Object.freeze(object)

    // Returns true if object is frozen
        Object.isFrozen(object)

*/
                        // OBJECT CONSTRUCTOR FUNCTION
function myInfo(first, last, age, gender, wealth, nationality, occupation) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.gender = gender;
    this.wealth  = wealth;
    this.nationality  = nationality;
    this.occupation = occupation;
}

const myObject = new myInfo("Khizar Hayat", "Khan", 22, "Male", "$292", "Pakistani", "Pakistan Administrative Service (PAS)")   // function call using object

myInfo.prototype.address = "Sector Siddique Akbar, near  Haripur International Hospital, Terbella Road KTS, Haripur Hazara, KPK" // adding property to the prototype

console.log("\n\n My address is: ", myObject.address)
console.log("------------------------------\n")

// The "Object.assign()" method copies properties from one or more source objects to a target object.
const luxuryCars = {
    BMW : "BMW M5",
    Audi : "Audi R8",
    RollsRoyce : "RollsRoyce Phantom 8",
    Bentley : "Bentley Continental Fort"
};

// console.log("First luxury car: ", luxuryCars.RollsRoyce)
// console.log("Second luxury car: ", luxuryCars.Bentley)
// console.log("---------------------------\n\n")

const sportsCars = {
    Ferrari : "Ferrari R6",
    Lamborghini : "Lamborghini Aventador",
    Porsche : "Porsche 911 GT3",
    McLaren : "McLaren 720S"
};

// "Object.assign(target, source)"
Object.assign(luxuryCars, sportsCars)
console.log("Combined Properties of cars: ", luxuryCars)
console.log("\n---------------------------\n")

// "Object.entries(target, source)"
// Object.entries() returns an array of the key/value pairs in an object
const entries = Object.entries(luxuryCars)
console.log("Object Entries: ", entries)
console.log("\n---------------------------\n")

// "Object.fromEntries(object)"
// Object.fromEntries() returns a new object with the given entries.
const fromEntries = Object.fromEntries(entries)
console.log("Object fromEntries: ", fromEntries)
console.log("\n---------------------------\n")


// Object.values(object)
// Object.values() is similar to Object.entries(), but returns a single dimension array of the object values.
const values = Object.values(entries)
console.log("Object values: ", values)
console.log("\n---------------------------\n")

/*  
    Object.groupBy(object, callback)
The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

The Object.groupBy() method does not change the original object.

*/

// Object.keys(object)
// The Object.keys() method returns an array with the keys of an object.

const keys = Object.keys(luxuryCars)
console.log("Object keys: ", keys)
console.log("\n---------------------------\n")

let txt = "";
for (let x in luxuryCars) {
  txt += luxuryCars[x] + "\n";
}
console.log("Object keys using forEach: \n", txt)
console.log("\n---------------------------\n")

// The JavaScript prototype property allows you to add new properties to object constructors.
myInfo.prototype.personalCar = "Corolla GLI"

console.log("I've a car: ", myObject.personalCar)
console.log("\n---------------------------\n")

// Object.defineProperty(obj, prop, descriptor)
// The Object.defineProperty() method defines a new property directly on an object, or modifies an existing property
Object.defineProperties(myInfo, { personalCar : {
    value: 'Corolla GLI 2012'
}});

console.log("My personal car: ", myInfo.personalCar)
console.log("\n---------------------------\n")

Object.defineProperties(myInfo, {"age" : {
    value : 45
}})
console.log("My age: ", myInfo.age)
console.log("\n---------------------------\n")


console.log("Object Properies: ", Object.getOwnPropertyNames(myInfo))
console.log("\n---------------------------\n")


console.log("Object keys: ", Object.keys(myInfo))
console.log("\n---------------------------\n")


/*

    The most common way to protect an object from being changed is by using the 'const' keyword.

    With 'const' you can not re-assign the object, but you can still change the value of a property, delete a property or create a new property.

*/

function Sealed(productName, check) {
    this.productName = productName,
    this.check = check
}

let credibilityCheck = new Sealed("()", "Beware, SEAL BROKEN!")
console.log("\n\nCredibility Checking....\n")
console.log("Product Name: ", credibilityCheck.productName)
console.log("Credibility Check: ", credibilityCheck.check)
console.log("---------------------\n\n")









