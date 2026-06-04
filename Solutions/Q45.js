// Create an Example of Closure
//Jab ek function apne outer scope ke variables ko yaad rakhta hai, even after the outer function has finished executing, to usse Closure kehte hain.
//Closure = Function + uske outer scope ke variables ki memory

function outer() {
    let name = "Rasshi";

    function inner() {
        console.log(name);
    }

    return inner;
}
//Function khatam ho gaya. To name destroy kyu nahi hua?
//Kyuki returned function ko abhi bhi name ki zarurat hai.
const fn = outer();
fn();