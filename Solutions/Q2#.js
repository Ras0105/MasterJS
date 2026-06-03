/**Create an age variable:

* if age >= 18 → print `"Adult"`
* else → print `"Minor"`
 */

/*
  syntax:
  if(cond1){
  //run this code if cond1 true
  }
  else if(cond2){
  //run this code if cond2 true and cond1 false
  }
  else{
    //run this code if cond1 and cond2 both false
  }
*/

// Input syntax
/*
way 1- for BROWSER:
prompt()
way 2- for HTML Page:
<input>
way 3- for Node.js terminal:
prompt-sync/readline

way 3- Syntax
1-for prompt-sync:

npm install prompt-sync, then:

const prompt = require("prompt-sync")();
let x = prompt("Enter value: ");
console.log(x);


2-for readline:

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter input: ", function(answer){
    console.log(answer);
    rl.close();
});


*/

//solving using prompt-sync
// run the command: npm install prompt-sync, in the terminal.

const prompt=require("prompt-sync")();
let age=prompt("Enter Age: ");
if(age>=18){
    console.log("Adult");
}
else{
    console.log("Minor");
}