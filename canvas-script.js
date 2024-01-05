let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(450, 250);
ctx.strokeStyle = 'red';
ctx.stroke();