var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allAreStrings = fruits.every( (fruit) => typeof fruit === "string");
console.log(allAreStrings);

let startWith = fruits.some(fruit => fruit.startsWith("a"));
console.log(startWith); 

let filteredFruits = fruits.filter(fruit =>
  fruit.startsWith("b") || fruit.startsWith("s")
);
console.log(filteredFruits); 

let likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log(likedFruits);

likedFruits.forEach(sentence => console.log(sentence));
