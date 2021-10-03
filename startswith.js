function startsWith(text, char){
    for(let i=0; i<text.length; i=i+1){
        if(text[0]==char){
            return true;
        }
    }
    return false;
}

let result= startsWith("Hello", "H");
//let result= startsWith("Hello", "x"); // result=false;
console.log(result);