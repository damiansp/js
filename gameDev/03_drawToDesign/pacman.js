const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;

drawGrid(ctx, H, W, 10, 50, 'yellow', 'red');
ctx.beginPath();
ctx.arc(200, 200, 150, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(200, 200);
ctx.fillStyle = 'yellow';
ctx.fill();



