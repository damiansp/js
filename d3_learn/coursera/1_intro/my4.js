function showImage(imgName) {
  d3.select('#animalImg').attr('src', imgName).attr('alt', imgName);
}

function changeColor() {
  let textColor = d3.select('#text').style('color');

  if (textColor === 'red') { d3.select('#text').style('color', 'blue') }
  else { d3.select('#text').style('color', 'red'); }
}
