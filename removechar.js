

function removeChar(strings, character) {
    let newStrings = "";
    for (let i = 0; i < strings.length; i =i+1) {
      if (strings[i] != character) {
        newStrings = newStrings + strings[i];
      }
    }
    return newStrings;
  }
  let result=removeChar("Hello world", "o");
  //let result=removeChar("Hello world", " "); //result= Helloworld;
   console.log(result);