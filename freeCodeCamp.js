function titleCase(str) {
  // put each letter into an array
  const inputString = str;
  //   console.log(inputString)

  let inputArr = inputString.toLowerCase().split(" ");
// console.log(inputArr)
let convertedLetter =[]
let toUpCase = ''
let combinedLetter =''

for(i = 0; i<inputArr.length;i++){
    toUpCase=inputArr[i]
    convertedLetter[i] = toUpCase.charAt(0).toUpperCase() + toUpCase.slice(1)
    combinedLetter = convertedLetter.join(" ")
}
console.log(combinedLetter)
  

}

titleCase("I'm a little tea pot");
