//Print all even numbers from 1 to n, including n
const prompt=require("prompt-sync")()
let n=prompt("Enter Number:")
for(let i=2; i<=n;i++){
    if(i%2==0){
        // process.stdout.write(i.toString()+" ")

        process.stdout.write(`${i}`+" ")
        //what is `${i}`- this is a template literal
        // console.log can operate on numbers etc.
        // but process.stdout.write can only take intergers
        //template literaals use backticks ` `
        // ${variable_name} is used to insert variable values
        // `${variable_name}` makes the variable a string data type
    }
}
console.log("\nProgram Ended");

/*
    NOTE- to print in same line in JS, we use:
    process.stdout.write()
    example-
        process.stdout.write("Hello ");
        process.stdout.write("World");
        //output: Hello World
*/

