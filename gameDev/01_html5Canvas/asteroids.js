let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
const W = canvas.width;
const H = canvas.height;

ctx.strokeStyle = 'lightgrey';
ctx.fillStyle = 'dimgrey';
ctx.lineWidth = 5;
ctx.rect(75, 50, W - 150, H - 100);
ctx.stroke();
ctx.fill();

ctx.font = '34px Arial';
ctx.strokeStyle = '#F22';
ctx.fillStyle = '#FAA';
ctx.lineWidth = 1;
ctx.textAlign = 'center';
let msg = '2D Drawing!';
ctx.fillText(msg, W / 2, 100);
ctx.strokeText(msg, W / 2, 100);
