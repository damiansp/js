const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasBg = document.getElementById('canvas-bg');
const ctxBg = canvasBg.getContext('2d');
let ball;
let xA = new Array();
let yA = new Array();
let n = 0;
const xMin = -10;
const xMax = 10;
const yMin = -50;
const yMax = 50;
const xOrig = 275;
const yOrig = 210;
const xWidth = 450;
const yWidth = 350;
let xScal;
let yScal;
let idInterval;


window.onload = init;


function init() {
  plotGraph();
  placeBall();
  setupTimer();
}


function plotGraph() {
  let graph = new Graph(
    ctxBg, xMin, xMax, yMin, yMax, xOrig, yOrig, xWidth, yWidth);
  graph.drawgrid(2, 0.4, 10, 2);
  graph.drawaxes('x', 'y');
  xScal = (xMax - xMin) / xWidth;
  yScal = (yMax - yMin) / yWidth;
  for (let i = 0; i <= 1000; ++i) {
    xA[i] = 0.02*(i - 500);
    yA[i] = f(xA[i]);
  }
  graph.plot(xA, yA, '#dd3366', false, true);
}


function f(x){
  let y;
  //y = 0.2*(x+3.6)*(x+2.5)*(x+1)*(x-0.5)*(x-2)*(x-3.5);
  //y = ((x + 3.6)*(x + 2.5)*(x + 1)*(x - 0.5)*(x - 2)*(x - 3.5) *
  //     Math.exp(-x*x / 4));
  //y = 0.5*x*(x+3.6)*(x+2.5)*(x+1)*(x-0.5)*(x-2)*(x-3.5)*Math.exp(-x*x/4);
  //y = -0.1*x*x*(x+3.6)*(x+2.5)*(x+1)*(x-0.5)*(x-2)*(x-3.5)*Math.exp(-x*x/4);
  //y = Math.pow(x,5) - Math.pow(x,3) + 5*x*x - 2*x - 3;
  //y = Math.pow(x,5) - Math.pow(x,4) + x*x - 2*x - 3;
  //y = Math.log(x);
  y = 40*Math.exp(-x*x);
  return y;
}


function placeBall() {
  ball = new Ball(6, '#aa6699');
  ball.x = xA[0]/xScal + xOrig;
  ball.y = -yA[0]/yScal + yOrig;
  console.log(ball.x, ball.y);
  ball.draw(ctx);
}


function setupTimer() {
  idInterval = setInterval(moveBall, 1000 / 60);
}


function moveBall() {
  ball.x = xA[n]/xScal + xOrig;
  ball.y = -yA[n]/yScal + yOrig;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw(ctx);
  n++;
  if (n == xA.length) { clearInterval(idInterval); }
}
