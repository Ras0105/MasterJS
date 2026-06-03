//Reverse a string
const input=require("prompt-sync")()
let str=input("Enter A String: ")
let rev_str=""
for(let i=str.length-1; i>=0;i--){
    rev_str+=str[i]
}
console.log(rev_str);