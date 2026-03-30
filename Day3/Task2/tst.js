let sum = 0;
let num1, num2;

while (true) {
    do {
        num1 = prompt("Enter the numbers or zero to stop");
    } while (!isFinite(num1));

    num1 = parseInt(num1);
    
    sum+=num1;
    if(num1===0||sum>100){
        alert("the sum = " + sum);
        break;
    }
}
