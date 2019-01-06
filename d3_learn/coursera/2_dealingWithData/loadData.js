let container = d3.select('#container');

d3.csv('data/bmi.csv').then(function(data) {
    for (let client of data) {
      write(client.name);
    }
});


function write(text) {
  container.append('div').text(text);
}
