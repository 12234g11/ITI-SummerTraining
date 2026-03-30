let canvas = document.getElementById('myCanvas');
let frameRec = canvas.getContext('2d');


let TopGradient = frameRec.createLinearGradient(0, 50, 0, 150);
TopGradient.addColorStop(0, 'deepskyblue');
TopGradient.addColorStop(1, 'white');
frameRec.fillStyle = TopGradient;
frameRec.fillRect(50, 50, 300, 100);


let DownGradient = frameRec.createLinearGradient(0, 150, 0, 250);
DownGradient.addColorStop(0, 'limegreen');
DownGradient.addColorStop(1, 'white');
frameRec.fillStyle = DownGradient;
frameRec.fillRect(50, 150, 300, 100);


frameRec.lineWidth = 4;
let left = frameRec.createLinearGradient(0, 130, 0, 180);
left.addColorStop(0, 'black');        
left.addColorStop(1, 'rgba(0,0,0,0)'); 
frameRec.strokeStyle = left;
frameRec.beginPath();
frameRec.moveTo(150, 130);
frameRec.lineTo(150, 180);
frameRec.stroke();


frameRec.strokeStyle = 'black';
frameRec.beginPath();
frameRec.moveTo(150, 130);
frameRec.lineTo(250, 130);
frameRec.stroke();


let right = frameRec.createLinearGradient(0, 130, 0, 180);
right.addColorStop(0, 'black');
right.addColorStop(1, 'rgba(0,0,0,0)');
frameRec.strokeStyle = right;
frameRec.beginPath();
frameRec.moveTo(250, 130);
frameRec.lineTo(250, 180);
frameRec.stroke();