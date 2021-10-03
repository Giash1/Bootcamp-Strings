function endsWith(text, char){
    for(let i=0; i<text.length-1; i=i+1){
        if(text[text.length-1]==char){
            return true;
        }
    }
    return false;
}
let result= endsWith("Hello", "o");
//let result= endsWith("Hello", "x"); //result=false;
console.log(result);