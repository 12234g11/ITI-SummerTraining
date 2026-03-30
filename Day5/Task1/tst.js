let numbers = [];

while (true) {
    let input = prompt("Enter numbers separated by commas (5,3,8):");

    if (!input) {
        alert("Input cannot be empty. Please try again.");
        continue;
    }
    let stringArray = input.split(',');
    let valid = true;
    numbers = [];
    for (let i = 0; i < stringArray.length; i++) {
        let str = stringArray[i].trim();

        if (str === "" || isNaN(str)) {
            valid = false;
            break;
        }

        numbers.push(parseFloat(str)); 
    }

    if (valid) {
        break; 
    } else {
        alert("Invalid input. Only numbers separated by commas are allowed.");
    }
}
numbers.sort(function (a, b) {
    return a - b;
});
document.write("<h3>Ascending:</h3>");
document.write(numbers.join(", ") + "<br><br>");

numbers.sort(function (a, b) {
    return b - a;
});
document.write("<h3>Descending:</h3>");
document.write(numbers.join(", "));
