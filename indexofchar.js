function indexOfChar(text, character){
    for(let i=0; i<text.length-1; i=i+1){
       if(text[i]==character){
           return i;
       }
    }
    return -1;
}

let result= indexOfChar("Hello worls", "o");
//let result= indexOfChar("Hello worls", "x"); //result=false;
console.log(result);