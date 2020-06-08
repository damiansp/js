function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  let img = new Image();
  img.src = (
    'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png');
  img.onload = function() {
    const pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 150, 150);
  }
}
