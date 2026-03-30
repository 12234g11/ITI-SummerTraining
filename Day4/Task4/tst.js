// 1. Get user inputs

let Name = prompt("Enter your Name (should be letters only):");
while (!isNaN(Name) || Name.trim() === "") {
  Name = prompt("Invalid! Name should not be a number or empty.");
}

let phone = prompt("Enter your phone number (should be 8 digits):");
while (isNaN(phone) || phone.length !== 8) {
  phone = prompt("Invalid! Phone must be a number of exactly 8 digits.");
}

let mobile = prompt("Enter your mobile number (starts with 010,011,012 and 11 digits):");
while (!/^01[012]\d{8}$/.test(mobile)) {
  mobile = prompt("Invalid! Mobile must be 11 digits and start with 010, 011, or 012.");
}

let email = prompt("Enter your email:");
while (!/^[a-z]{3}@[0-9]{3}\.com$/.test(email)) {
  email = prompt("Invalid email format!(abc@123.com):");
}

let color = prompt("Choose a color for your welcome message (red, green, or blue):").toLowerCase();
while (!["red", "green", "blue"].includes(color)) {
  color = prompt("Invalid color! Choose only red, green, or blue.");
}

let today = new Date();
let dateString = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

document.write(
  '<h2 style="color: ' + color + ';">' +
  'Welcome ' + Name + '!<br>' +
  'Phone: ' + phone + '<br>' +
  'Mobile: ' + mobile + '<br>' +
  'Email: ' + email + '<br>' +
  'Your info has been recorded on ' + dateString + '.' +
  '</h2>'
);
