// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).



function sum(x,y){
    return console.log("Sum is: ", x+y)
}

let x = sum(55, 9)

// multiplication function
function multiplication(x,y)
{
    z = x * y;
    console.log("The multiplication is: ", z);
}

let result = multiplication(5,7);

        // OBJECTS

const Info = {
    firstname: "Khizar Hayat",
    lastname: "Khan",
    age: 22,
    gender: "Male",
    nationality : "Pakistani",
    address: "Sector Siddique Akbar, near  Haripur International Hospital, Terbella Road KTS, Haripur Hazara, KPK",
    occupation: "Pakistan Administrative Service (PAS)"
};

Info.Income = "$ 178";   // adding property to object
console.log("Show your Personal Information: ", Info)
console.log("Name is: ",Info.firstname)


        // Date Object 

const date = new Date ("2024-06-20")
console.log("Today's Date: ", date)


let bigNum = BigInt("20000000000000000000232232323")
console.log("Show big integer: ", bigNum)

typeof "Khizar Hayat"
typeof 3
typeof 7.8

        // Template strings (use Backticks)
let age = 6
let self  = `He is ${age} years old.`
console.log(self)
console.log("No of letters: ",self.length)

// Big integer values
let y = BigInt(1234567890123456789012345)



