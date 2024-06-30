                    // ARRAY SORT NUMERIC


let Numbers = [13, 3, 90, 55, 32, 56];

// Numeric Sort
console.log("After sort(): ", Numbers.sort(function(a, b){
    return a - b;
}))
console.log("----------------------\n")

let Numbers1 = [88, 65, 13, 3,44, 11, 352, 759];
console.log("After sort() again: ", Numbers1.sort(function (a, b){
    return a - b;
}))
console.log("----------------------\n")

// Math.random() - Random sorting of an array numbers
console.log("After Math.random(): ", Numbers.sort(function(){
    return Math.random() - 0.5;
}))
console.log("----------------------\n")

// Math.min()
console.log("After Math.min(): ", Math.min(...Numbers))
console.log("----------------------\n")

// Math.max()
console.log("After Math.max(): ", Math.max(...Numbers))
console.log("After Math.max(): ", Math.max(...Numbers1))
console.log("----------------------\n")

// Descending sorting
console.log("After sort() descending: ", Numbers.sort(function(a, b){
    return b-a;
}))
console.log("Index 0: ", Numbers[0])
console.log("----------------------\n")


// Sorting array objects

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010},
    {type:"Lexus LX570", year:2021}
  ];

  console.log("After sort(): ", cars.sort(function(a, b){
    return a.year - b.year;
  }))
  console.log("----------------------\n")

