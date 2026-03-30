function divisibility(x, y, z) {
    if (x % y === 0 && x % z === 0) {
        console.log(x + " is divisible by both " + y + " and " + z);
    } else if (x % y === 0) {
        console.log(x + " is divisible by "+ y +" only");
    } else if (x % z === 0) {
        console.log(x + " is divisible by "+ z +" only");
    } else {
        console.log(x + " is not divisible by either " + y + " or " + z);
    }
}
divisibility(10,7,2);