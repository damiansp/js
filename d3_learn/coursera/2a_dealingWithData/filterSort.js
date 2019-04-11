let container = d3.select('#container');

d3.csv('data/bmi.csv').then(function(data) {
    write('Sorted Data');
    data.sort((a, b) => { return d3.ascending(a.name, b.name); }); // mutates
    showData(data);
    write('Lightweights');
    let lightweights = data.filter(d => d.weight < 200);
    showData(lightweights);
});


function showData(clients) {
  for (let client of clients) write(client.name + ', ' + client.weight);
}

function write(text) { container.append('div').text(text); }
