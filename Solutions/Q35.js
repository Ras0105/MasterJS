//invert an onject
function invert_object(obj){
    let invert_obj={}
    for(let key in obj){
        let value=obj[key]
        invert_obj[value]=key
    }
    return invert_obj;
}

const prompt = require("prompt-sync")();
let obj = {};
let n= prompt("Enter number of elements: ");
for(let i=0;i<n;i++){
    let key = prompt("Enter key: ");
    let value = prompt("Enter value: ");
    obj[key] = value;   
}

console.log("The Inverted Object Is:",invert_object(obj));