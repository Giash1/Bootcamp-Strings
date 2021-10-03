function reverse(strings) {
    let reverseStrings = "";
    for (let i = strings.length - 1; i >= 0; i=i-1) {
      reverseStrings= reverseStrings+strings[i];
    }
    return reverseStrings;
  }
let result= reverse("Hello world");
console.log(result);