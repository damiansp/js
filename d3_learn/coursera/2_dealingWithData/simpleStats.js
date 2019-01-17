let container = d3.select('#container');
d3.csv('./data/bmi.csv').then(showData);


function showData(clients) {
  for (let client of clients) { write(client.name + ', ' + client.weight); }
  write('---------------');
  let weightSum = d3.sum(clients, d => d.weight);
  let weightMean = d3.mean(clients, d => d.weight);
  let extent = d3.extent(clients, d => d.weight);
  write("Sum:    " + weightSum);
  write("Mean:   " + weightMean);
  write("Extent: " + extent);
  
}

function write(text) { container.append('div').text(text); }
