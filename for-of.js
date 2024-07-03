// FOR...OF LOOP

// iterates over each element of an array, object, map etc

const animals = ["cat", "dog", "lion", "tiger"];

for (const animal of animals) {
  console.log(animal);
}
console.log('-------------------\n')

const word = "Hello";

for (const letter of word) {
  console.log(letter);
}
console.log('-------------------\n')

// Example with a MAP
const userRoles = new Map([
    ['Alice', 'Admin'],
    ['Bob', 'Editor'],
    ['Charlie', 'Viewer']
  ]);
  
  for (const [user, role] of userRoles) {
    console.log(`${user}: ${role}`);
  }
  console.log('-------------------\n')

// Example with a SET
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
console.log("Set Elements: ")
for (const number of uniqueNumbers) {

    console.log( number);
}
console.log('-------------------\n')