let a, b;
do {
    a = prompt("Enter the first number:");
} while (!isFinite(a));

do {
    b = prompt("Enter the second number:");
} while (!isFinite(b));

a = parseFloat(a);
b = parseFloat(b);

let max = (a > b) ? a : b;

alert("The maximum number is: " + max);
