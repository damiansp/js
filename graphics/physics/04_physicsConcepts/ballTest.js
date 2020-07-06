let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let ball = new Ball(20, '#ff0000', 1, 0, true);
ball.pos2D = new Vector2D(150, 50);
ball.draw(ctx);

let balls = [];
const nBalls = 10;
for (let i = 1; i <= nBalls; i++) {
  let radius = 20*(Math.random() + 0.5);
  let color = '#0000FF';
  let ball = new Ball(radius, color, 1, 0, true);
  ball.pos2D = new Vector2D(Math.random() * canvas.width,
                            Math.random() * canvas.height);
  ball.draw(ctx);
  balls.push(ball);
}
