let text = "Hello, this message is typing...";
let index = 0;
let msg = document.getElementById("message");

function typeMessage() {
  if (index < text.length) {
    msg.textContent += text.charAt(index);
    index++;
    setTimeout(typeMessage, 100);
  } else {
    setTimeout(function () {
      window.close();
    }, 3000); 
  }
}

typeMessage();
