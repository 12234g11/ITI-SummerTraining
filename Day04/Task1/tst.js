let str = prompt("Enter a string:");
let char = prompt("Enter the character you want to count:");
let sensetive = confirm("Do you want to consider case sensitivity?");
if (!sensetive) {
  str = str.toLowerCase();
  char = char.toLowerCase();
}
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === char) {
    count++;
  }
}
alert("The character "+char+" appears "+count+" in the text.");

