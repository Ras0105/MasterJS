//Rotate an array.

/*
function rotate_array(arr){
    return(arr.reverse()) //works fine
}
*/
function rotate_array(arr){
    let rev_arr=[];
    for(let i=arr.length-1;i>=0;i--){
        rev_arr.push(arr[i])
    }
    return rev_arr
}
const input=require("prompt-sync")()
let n1 = Number(input("Enter No. of elements of array: "));
let arr1 = [];
for(let i = 0; i < n1; i++){
    arr1[i] = Number(input());
}

console.log("The Reversed Array Is",rotate_array(arr1));

