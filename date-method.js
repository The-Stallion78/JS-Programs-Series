                        // DATE() METHOD 

// The Date() constructor creates a Date object with a specific date and time.
// By default, JavaScript will use the browser's time zone and display a date as a full text string


// getDate()
// toDateString()
// toTimeString
// toLocaleDateString()
// toLocaleTimeString() and many more methods.

var date = new Date () 
// var date = new Date ('September 22 2002')
console.log("Today's date: ", date.toDateString())
console.log("----------------------\n")

console.log("After getDate(): ", date.getDate())
console.log("----------------------\n")

console.log("After getDay(): ", date.getDay())
console.log("----------------------\n")

console.log("After getFullYear(): ", date.getFullYear())
console.log("----------------------\n")

console.log("After getMonth(): ", date.getMonth())
console.log("----------------------\n")


console.log("After toTimeString(): ", date.toTimeString())
console.log("----------------------\n")

console.log("Full Date: ", date.getDay() + "/ " + date.getMonth() + "/ " + date.getFullYear())
console.log("----------------------\n")

console.log("After parse(): ", Date.parse("22 March 1970"))
console.log("----------------------\n")

console.log("After Date.now(): ", Date.now())
console.log("----------------------\n")

console.log("After getTimezoneOffset(): ", date.getTimezoneOffset())
console.log("----------------------\n")