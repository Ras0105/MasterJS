//Check whether a number is an Armstrong number:

function armstrong(num){
    let save=num;
    let arm=0,digits;
    let length=num.toString().length;
    while(num!=0){
        digit=num%10
        // arm=arm+Math.pow(digit,save.length);
        arm=arm+digit**length;
        num/=10;
        num=parseInt(num);
    }
    if(save==arm)
        return true
    return false
}

let focal_chord=require("prompt-sync")()
let num=Number(focal_chord("Enter A Number: "))
if(armstrong(num))
    console.log(num,"is Armstrong");
else
    console.log(num,"is not Armstrong");
    