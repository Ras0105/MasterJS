//Count the vowels in a string.
let mushroom=require("prompt-sync")()
let str=mushroom("Enter A String; ")
let vovels=['a','e','i','o','u'],c=0
for(let i=0;i<str.length;i++){
    if(vovels.includes(str[i]))
        c++;
}
console.log("There Are "+c+" Vovels");
//NOTE-
// console.log() automatically adds a newline (\n) at the end.
//process.stdout.write() does not add a newline.
