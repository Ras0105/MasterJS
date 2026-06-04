//Find the most frequently occurring character in a string.
function frequent_char(str){
    let freq=[{character:str[0],
        freq:1}]
    let count=0;
    for(let i=0;i<str.length;i++){
        
        let obj={character:str[i],
        freq:1}
        freq+=obj;
    }
    console.log(freq);
    
}
frequent_char("RasshiR")