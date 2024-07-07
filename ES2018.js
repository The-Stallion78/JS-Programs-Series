// JavaScript Asynchronous Iteration

// With asynchronous iterables, we can use the await keyword in for/of loops.
// This allows us to use the await keyword in for/of loops, which is a powerful feature.

/*

JavaScript "Promise.finally"
ECMAScript 2018 finalizes the full implementation of the Promise object with Promise.finally

The "fromEntries()" method creates an object from iterable key / value pairs.

The flat() method creates a new array by flattening a nested array.

The "flatMap()" method first maps all elements of an array and then creates a new array by flattening the array.

JSON.stringify()










*/

const Arr = [[1,2],[3,4],[5,6]];
const newarr = Arr.flat();
console.log("Flat array(): ", newarr)

const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap((x) => 
    x * 2);
console.log("flatMap(): ", newArr)


