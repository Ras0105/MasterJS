//Create a Counter Function Using Closure
/*
    const counter = createCounter();
    counter(); // 1
    counter(); // 2
    counter(); // 3
*/
function createcounter(){
    let count = 0;
    return function(){
    count++;
    return count;
    };
}

const counter = createcounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());