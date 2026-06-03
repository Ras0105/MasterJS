/*
Find the sum of the array:
[1,2,3,4,5]
*/


// let arr=[1,2,3,4,5]
// let sum=0;
// for(let i=0; i<5;i++){
//     sum +=arr[i]
// }
// console.log(sum);
const prompt=require("prompt-sync")()
let n=Number(prompt("enter size of array: "))
let arr=[]
for(let i=0; i<n;i++){
    arr[i]=Number(prompt())
}
let sum=0;
for(let i=0; i<n;i++){
    sum +=arr[i]
}
console.log(sum);
