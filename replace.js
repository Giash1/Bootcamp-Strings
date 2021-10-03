function replaceChar(strings, source, destination){
    let newStrings="";
    for(let i = 0; i < strings.length; i =i+1) {
   if(strings[i]!=source)
       newStrings=newStrings+strings[i];
   else
       newStrings=newStrings+destination;
   }
   return newStrings;
    }

let result=replaceChar("Hello world", "o", "y");
//let result=replaceChar("Hello world", " ", " "); // result= Hello world;
console.log(result);