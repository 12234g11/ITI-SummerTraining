let child;        
let isOpened = 0; 

function openChild() {
  if (!child || child.closed) {
    child = window.open("child.html", "childwindow", "width=300,height=200,top=150,left=500");
    isOpened = 1;
  }
}

function stopChild() {
  if (isOpened && child && !child.closed) {
    child.postMessage("stop", "*");
  }
}
