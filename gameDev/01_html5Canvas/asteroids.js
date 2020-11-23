const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const W = canvas.width;
const H = canvas.height;

function makeFrame() {
  ctx.strokeStyle = 'lightgrey';
  ctx.fillStyle = 'dimgrey';
  ctx.lineWidth = 5;
  ctx.rect(75, 50, W - 150, H - 100);
  ctx.stroke();
  ctx.fill();
}

function addText() {
  ctx.font = '34px Arial';
  ctx.strokeStyle = '#F22';
  ctx.fillStyle = '#FAA';
  ctx.lineWidth = 1;
  ctx.textAlign = 'center';
  let msg = '2D Drawing!';
  ctx.fillText(msg, W / 2, 100);
  ctx.strokeText(msg, W / 2, 100);
  let msg2 = "It's so easy!";
  ctx.font = '24px Arial';
  ctx.fillText(msg2, W / 2, 330);
  ctx.strokeText(msg2, W / 2, 330);
}

function addFigure() {
  ctx.strokeStyle = '#FFF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  // head
  ctx.arc(200, 140, 20, 0, 2 * Math.PI);
  //body
  ctx.moveTo(200, 160);
  ctx.lineTo(200, 220);
  // legs
  ctx.moveTo(180, 300);
  ctx.lineTo(185, 260);
  ctx.lineTo(200, 220);
  ctx.lineTo(215, 260);
  ctx.lineTo(220, 300);
  // arms
  ctx.moveTo(240, 130);
  ctx.lineTo(225, 170);
  ctx.lineTo(200, 170);
  ctx.lineTo(175, 180);
  ctx.lineTo(170, 220);
  ctx.stroke();
}

function main() {
  makeFrame();
  addText();
  addFigure();
}

main();
