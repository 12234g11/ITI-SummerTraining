let str = prompt("Enter a string to check if is a palindrome:");
let sensetive = confirm("Do you want to consider case sensitivity?");
let flag;

if (sensetive) {
  flag = str;
} else {
  flag = str.toLowerCase();
}

let isPalindrome = true;
let start = 0;
let end = flag.length - 1;

while (start < end) {
  if (flag[start] !== flag[end]) {
    isPalindrome = false;
    break;
  }
  start++;
  end--;
}

if (isPalindrome) {
  alert("is a palindrome.");
} else {
  alert("not a palindrome.");
}
