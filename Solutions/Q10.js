//Find the factorial of a number.
function factorial(num){
    if(num==1||num==0)
        return 1;
    return factorial(num-1)*num
}
let tamatar=require("prompt-sync")()
let num=Number(tamatar("Enter A Number: "))
let fact=factorial(num);
console.log("factorial of",num,"is=",fact);//comma pe space aata hai

