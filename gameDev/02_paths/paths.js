const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const H = canvas.height;
const W = canvas.width;
const GRID_SPACE = 10;
const MAIN_SPACE = 50;


function drawGrid() {
  ctx.strokeStyle = '#0F0';
  for (let y = 0; y < H; y += GRID_SPACE) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.lineWidth = (y % MAIN_SPACE == 0) ? 0.5 : 0.25;
    ctx.stroke();
  }
  for (let x = 0; x < W; x += GRID_SPACE) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.lineWidth = (x % MAIN_SPACE == 0) ? 0.5 : 0.25;
    ctx.stroke();
  }
}


drawGrid();
