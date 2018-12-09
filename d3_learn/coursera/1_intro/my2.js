function change1() {
  let p = d3.select('.main-paragraph');
  p.text('New Text!');
}


function change2() {
  d3.selectAll('p').text('New Text Everywhere!!');
}


function change3() {
  d3.select('p').html('<strong>A bold new world?</strong>');
}


function change4() {
  d3.selectAll('p').text('<strong>...or is it?</strong>');
}
