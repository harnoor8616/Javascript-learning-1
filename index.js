// var global scope works fine
var age = 25
console.log(age);

// var local scope throws error
function solve() {
    var numbers = 99
    console.log(numbers);
}
solve()
// console.log(numbers); throws error

// let 
{
    let marks = 29
    console.log(marks);
}
// console.log(marks);  throws error

// const
const b = 100
b=30
// console.log(b); throws error

// dynamically typed
let a = 20
a = "Harnoor"
console.log(a);



// data types
// numbers
// null
// Boolean
// BigInt
// String
// Symbol
// undefined