const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
const nPoints = 1001;
const nGrad = 50;
const xRange = 6;
let xStep;
let graph = new Graph(ctx, -4, 4, -10, 10, 275, 210, 450, 350);
graph.drawgrid(1, 0.2, 2, 0.5);
graph.drawaxes('x', 'y');

let xA = [];
let yA = [];
xStep = xRange / (nPoints - 1);
for (let i = 0; i < nPoints; i++) {
  xA[i] = (i - nPoints / 2) * xStep;
  yA[i] = f(xA[i]);
}
graph.plot(xA, yA, '#ff0000', false, true);

let xAr = [];
let gradA = [];
for (let j = 0; j < nPoints - nGrad; j++) {
  xAr[j] = xA[j];
  gradA[j] = grad(xA[j], xA[j + nGrad]);
}
graph.plot(xAr, gradA, '#0000ff', false, true);


function f(x) { return x * x; }


function grad(x1, x2) { return (f(x1) - f(x2)) / (x1 - x2); }
