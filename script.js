                    // Conventional way
/*
let city1 = "Haripur"
let city2 = "Abbottabad"
let city3 = "Mansehra"
let city4 = "Gujranwala"
let city5 = "Toba Tek Singh"

console.log("First city is: ", city1)
console.log("Second city is: ", city2)
console.log("Third city is: ", city3)
console.log("Fourth city is: ", city4)
console.log("Fifth city is: ", city5) */


                    // Use of Arrays

let cities = ["Haripur", "Abbottabad", "Mansehra", "Gujranwala", "Toba Tek Singh"]
console.log("Names of the cities: ", cities)

                    // Showing a variable using its INDEX value
console.log("Name of second city: ",cities[1])
console.log("Name of Last city: ", cities[4])


                    // Adding the Elements in an Array
cities.push("Faisalabad", "Lahore")
console.log("Names of the cities: ", cities)

for(let i = 0; i < 7; i++)
    {
        console.log("Name of the city" + i + ": ",cities[i])
    }


            // Remove the array elements
cities.pop()
cities.pop()
console.log("Names of the cities: ", cities)