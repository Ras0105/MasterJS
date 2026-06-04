//count character frequency
function count_chat_freq(str){
    let freq={}
    
    for(let i=0;i<str.length;i++){
        let ch=str[i];
        if(freq[ch]){
            freq[ch]++;
        }else{
            freq[ch]=1;
        }
    }
    return freq; 
}
const input=require("prompt-sync")()
let str =input("Enter String ");
let freq=count_chat_freq(str);
console.log(freq);
