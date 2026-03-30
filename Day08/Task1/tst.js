let input = document.getElementById("input");
let form = document.getElementById("form");
let message = document.getElementById("message");
let flag = false;
input.addEventListener("input",function tst() {
flag = true;
});
let custEvent = new Event("custEvent");
setTimeout(() => {
if (!flag) {
    form.dispatchEvent(custEvent);
}
}, 30000);
form.addEventListener("custEvent",function tst() {
    message.textContent = "You did not enter any data within 30 seconds!";
});
