function countMultiples(start, end) {
    let sum = 0;
    let multiples3 = "";
    let multiples5 = "";

    for (let i = start; i <= end; i++) {
        if (i % 3 === 0) {
            multiples3 += i + " ";
            sum += i;
        }
        if (i % 5 === 0 ) {
            multiples5 += i + " ";
            sum += i;
        }
    }

    console.log("Numbers multiple of 3: " + multiples3);
    console.log("Numbers multiple of 5: " + multiples5);
    console.log("Total sum is: " + sum);
}
countMultiples(1,15);