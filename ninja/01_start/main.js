const button = document.getElementById('button');
const rainbow = [
  'red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
var i = 0;

function change() {
  document.body.style.background = rainbow[i];
  i = (i + 1) % rainbow.length;
}

button.addEventListener('click', change);
