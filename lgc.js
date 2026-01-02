"use strict";

const arr1 = [10, 25, 37, 45, 70];
const arr2 = [14, 63, 12, 5, 59];

const arr3 = [...arr1, ...arr2];
console.log(arr3)

// using the for of loop
for(let i of arr3){
   let p = i + 10;
    console.log(p);
};

const obj1 = {
    a: 22,
    b: 45,
    c: 19
};
for(let i of Object.entries(obj1)){
    console.log(i)
}

const set1 = new Set([
    13, 29, 65, 18, 13
]); 

console.log(set1)

const fnc = function(a, b, c){
    return a + b + c
};
console.log(fnc(10, 15, 17))
