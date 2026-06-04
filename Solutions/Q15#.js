//Merge two arrays without duplicate values:
//Array Functions;
/*
Length
    arr.length 
    
Add Elements
    push()// End me add karta hai.
    unshift()// Beginning me add karta hai.

Remove Elements
    pop()// Last element remove karta hai.
    shift()// First element remove karta hai.

Search
    includes()
    indexOf()
    lastIndexOf()

Slice //Original array change nahi hota.
    arr=arr.slice(a,b)//b not included

Splice //Original array change hota hai.
    arr.splice(a,b);// matlab a se start ho kar b no. of elements ko hata do arr se aur ek alag arr bana do nikale hue elements ka

Reverse
    arr.reverse();
    
Sort
    arr.sort();
    //NOTE-⚠️ Numbers ke liye:
    arr.sort((a,b)=>a-b);
    //reason is that, internally js numbers ko strings ki tarah leta hai aur sort karta hai, to double ya more digit ke numbers ke case me dikkat hoti hai.

Join (Array → String)
    str=arr.join(conjunction_str)

Split (String → Array)
    arr=str.split(str)

forEach() //Looping
    arr.forEach(function(value){
        console.log(value);
    });

map() //Creates new array.
    //Ex-
    let arr = [1,2,3];
    let result = arr.map(x => x*2);
    console.log(result);//[2,4,6]

filter() //Keeps matching elements.
    //Ex-
    let arr = [1,2,3,4,5];
    let even = arr.filter(x => x%2==0);
    console.log(even);

reduce() //Accumulate values.
    //Ex-
    let arr = [1,2,3,4];
    let sum = arr.reduce((acc,val)=>acc+val,0);
    console.log(sum);

find() //Returns first matching element.
    //Ex-
    let arr = [1,2,3,4];
    console.log(arr.find(x => x>2));//returns value
findIndex()
    console.log(arr.findIndex(x => x>2));//returns index

some() //At least one matches.
    arr.some(x => x>3);//returns bool

every() //All must match.
    arr.every(x => x>0);

concat() //Merge arrays.
    a.concat(b);

flat() //Flatten nested arrays.
    //Ex-
    let arr = [1,[2,[3]]];
    console.log(arr.flat(2));//[1,2,3]

Array.from() //Convert iterable to array.
    Array.from(iterable);

*/

function merge_array(arr1,arr2){
    let arr3;
    arr3=arr1.concat(arr2);
    return(arr3);
}
const input = require("prompt-sync")();
let n1 = Number(input("Enter No. of elements, first array: "));
let arr1 = [];
for(let i = 0; i < n1; i++){
    arr1[i] = Number(input());
}

let n2 = Number(input("Enter No. of elements, 2nd array: "));
let arr2 = [];
for(let i = 0; i < n2; i++){
    arr2[i] = Number(input());
}
let arr3=merge_array(arr1,arr2)
let s=new Set(arr3)
console.log(Array.from(s));
