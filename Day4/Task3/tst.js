function largestWord(s) {
  let words = s.split(" ");
  let thelongest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > thelongest.length) {
      thelongest = words[i]; 
    }
  }
  return thelongest;
}
let str = "this is a javascript aaaaaaaaaa string demo";
let res = largestWord(str);
console.log(res);
