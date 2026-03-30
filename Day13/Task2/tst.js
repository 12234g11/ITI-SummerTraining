function getMinAndMax(...numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return [min, max];
}

let arr = [4, 8, 1, 99, -5, 1000];

let [minValue, maxValue] = getMinAndMax(...arr);

console.log("Min:", minValue);
console.log("Max:", maxValue);
