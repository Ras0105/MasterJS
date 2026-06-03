//Find the largest number in an array.
const input=require("prompt-sync")()
let n=Number(input("How Many Elements? "))
// let arr=[]
// for(let i=0;i<n;i++){
    // arr[i]=Number(input())
// }
let arr = input("Enter elements: ").split(" ").map(Number);
let largest= arr[0]
for(let i=1;i<n;i++){
    if(arr[i]>largest)
        largest=arr[i]
}
console.log(largest);
