function subString(strings, start, stop){
    let subString="";
    for(let i=start; i<=stop; i=i+1)
            subString=subString+strings[i];
    
        return subString;
    
    
}
let result= subString("Hello world", 1, 4);
console.log(result);