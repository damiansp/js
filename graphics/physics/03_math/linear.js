const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let graph = new Graph(ctx, -4, 4, -10, 10, 275, 210, 450, 450);

graph.drawgrid(1, 0.2, 5, 1);
graph.drawaxes('x', 'y');
let xA = new Array();
let yA = new Array();

for (let i = 0; i <= 100; ++i) {
  xA[i] = 0.8*(i - 50);
  yA[i] = f(xA[i]);
}
graph.plot(xA, yA, '#ff2244', false, true);


function f(x) {
  let y = 2*x + 1;
  return y;
}
