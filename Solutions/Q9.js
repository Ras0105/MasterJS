/*
    Check whether a string is a palindrome or not:
        madam → true
        hello → false

*/

function palindrome(str){
    let str_rev=""
    for(let i=str.length-1;i>=0;i--){
        str_rev+=str[i];
    }
        
    if(str===str_rev)
        return true;
    return false;
}

let gajar_ka_halwa=require("prompt-sync")()
let str= gajar_ka_halwa("Enter A String: ")
if(palindrome(str)){
    console.log(str+" is a palindrome");    
}
else{
    console.log(str+" is not a palindrome");
}