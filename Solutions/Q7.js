//Reverse a string
const input=require("prompt-sync")()
let str=input("Enter A String: ")
let rev_str=""
for(let i=str.length-1; i>=0;i--){
    rev_str+=str[i]
}
console.log(rev_str);
//STRING FUNCTIONS:
/*
length of the string
    str.length

character access
    str[index]
    str.charAt(index)

case conversion
    str.toUpperCase()
    str.toLowerCase()

Searching (returns boolean value)
    str.includes()
    str.startsWith()
    str.endsWith()

Position Finding
    "banana".indexOf("a")
    "banana".lastIndexOf("a")

    //Ex-
    let str = "banana";
    console.log(str.indexOf("a")); //output-1
    console.log(str.lastIndexOf("a")); //output-5

Extracting Part of String
    str.slice(0,4) //4 excluded
    str.substring()

Replace
    str.replace(a,b) //replacees first apeearing a string with b string
    str.replaceAll(a,b) //replacees all the a strings with b strings

Remove Extra Spaces
    str.trim()
    str.trimStart()
    str.trimEnd()

Split
    str.split() //String → Array

Join
    arr.join() //Array → String
    Ex- ["a","b","c"].join(" ")// "a b c"

Repeat
    str.repeat(num)

Padding
    str.padStart() //Ex- "5".padStart(3,"0")
    str.padEnd()
    //Ex-
    console.log("5".padStart(3,"0"));//005
    console.log("5".padEnd(3,"0"));//500

Compare Strings
    str.localeCompare()

    ex-
    console.log("apple".localeCompare("banana")); //-1 → first string comes before second
    console.log("banana".localeCompare("apple")); //1 → first string comes after second
    console.log("apple".localeCompare("apple")); //0 → both are equal

Convert to Array
    Array.from(str)
    //Ex- Array.from("hello") //[ 'h', 'e', 'l', 'l', 'o' ]
*/