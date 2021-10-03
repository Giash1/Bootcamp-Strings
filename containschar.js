function containsChar(text, character){
for(let i=0; i<text.length; i=i+1){
    if(text[i]==character){
        return true;
    }
}
return false;
}
let result= containsChar("Hello world", "o");
//let result= containsChar("Hello world", "x"); //result=false;
console.log(result);