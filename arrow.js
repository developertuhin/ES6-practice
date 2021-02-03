// function doubleIt (num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }
// single parameter arrow function
const doubleIt = num=>num*3;
const result = doubleIt(50);
console.log(result);

// double parameter arrow function

const add = (num1,num2=50)=> num1+num2;
const result2 = add(10);
console.log(result2);

// without parameter arrow function

const give5 = ()=> 5;
const value = give5();
console.log(value);
