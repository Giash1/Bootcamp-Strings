function removeText(text1, text2) {
        let i = 0, j=0;
        let result = "";
    
        while (i < text1.length) {
            if (text1[i] === text2[j]) {
                result = result + "";
                 i = i + 1; j = j+1;
             } else {
                 result = result + text1[i];
                 i = i + 1;
            }
       }     return result;
     }
     let result= removeText("Hello", "lo wo");
     console.log(result);