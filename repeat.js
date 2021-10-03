function repeat(text, repetations){
    let output="";
    for(let i=0; i<repetations; i=i+1){
        output=output+text;
    }
    return output;
}

let result= repeat("Hello", 5);
console.log(result);
