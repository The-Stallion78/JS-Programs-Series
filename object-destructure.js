// Destructuring is not destructive.
// Destructuring does not change the original object.

const person = {
    name: "Mubeen Rani",
    age: 25,
    city: "Gujranwala"
  };
  
  // Object destructuring
  const { name, age, city } = person;
  
  console.log(name); // Outputs: Mubeen
  console.log(age);  // Outputs: 25
  console.log(city); // Outputs: Gujranwala
  console.log('------------------\n')

  const person1 = {
    name: "Khizar Hayat",
    age: 22,
    city: "Haripur Hazara"
  };
  
  // Renaming variables
  const { name: personName, age: personAge, city: personCity } = person1;
  
  console.log(personName); // Outputs: Khizar Hayat
  console.log(personAge);  // Outputs: 22
  console.log(personCity); // Outputs: Haripur Hazara
  console.log('------------------\n')


  const person2 = {
    name2: "Alice",
    age: 25,
    address: {
      city2: "New York",
      zip: "10001"
    }
  };
  
  // Destructuring nested objects
  const { name2, address: { city2, zip } } = person2;
  
  console.log(city2); // Outputs: New York
  console.log(zip);  // Outputs: 10001
  console.log('------------------\n')

                    // ARRAY DESTRUCTURING
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruits;
// let {[0]:fruit1 ,[1]:fruit2} = fruits;       // Array values destructuring
console.log(fruit1)
console.log(fruit2)
console.log('------------------\n')











