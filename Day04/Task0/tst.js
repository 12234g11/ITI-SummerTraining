// Literal way
//less dynamic
let regex1 = /hi/;
console.log(regex1.test("hi my friend")); //return true
console.log(regex1.test("hello my friend")); //return false

let str1 = "hi my friend";
let str2 = "hello my friend";
console.log(str1.match(/hi/)); // ['hi']
console.log(str2.match(/hi/)); // null

// Constructor way

let regex3 = new RegExp("hi");
console.log(regex3.test("hi my friend"));        // true 
console.log(regex3.test("hello my friend"));     // false 

//can use variable
let userWord = "hi";
let regex4 = new RegExp(userWord);
console.log("hi my friend".match(regex4)); //['hi]
