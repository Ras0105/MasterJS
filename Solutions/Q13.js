/*
    Check whether all characters in a string are unique:
            "abcde" → true
            "hello" → false
*/
function unique_str(str){
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j])
                return false;
        }
    }
    return true;
}

let input=require("prompt-sync")()
let str=input("Enter A String: ")
if(unique_str(str))
    console.log(str,"Is A Unique String");
else
    console.log(str,"Is Not A Unique String");