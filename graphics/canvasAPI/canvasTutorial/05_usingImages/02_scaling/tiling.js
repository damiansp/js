function draw() {
  let ctx = document.getElementById('canvas').getContext('2d');
  let img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
  img.onload = function() {
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < 3; ++j) {
        ctx.drawImage(img, j * 50, i * 38, 50, 38);
      }
    }
  }
}
