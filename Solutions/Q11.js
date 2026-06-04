//Reverse a number.

function reverse_num(num){
    let rev_num=0,digit;
    while(num!=0){
        digit=num%10;
        rev_num=rev_num*10+digit;
        num/=10;
        num=parseInt(num);//parseInt(num) num me koi change nahi kar raha balki vo ek value return karta hai.        
    }
    return rev_num
}
let input=require("prompt-sync")()
let num=Number(input("Enter A Number: "))
console.log("The Reverse Of",num,"is= ",reverse_num(num));
