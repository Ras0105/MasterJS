/*
Create a function square(num) that returns the square of a number.

function syntax in JS:
way 1-normal function with parameters
function functionName(parameter1, parameter2) {
    // code
}

way 2- function expression
const functionname = function() {
    // code
};

way 3- arrow function
const functionName = () => {
    // code
};
or 
const square = num => num * num;
console.log(square(5));
//calling: functionname()

*/

function square(num){
    return num*num
}
console.log(square(5));
console.log(square(15));
console.log(square(25));
console.log(square(35));
