const KG_PER_LB = 0.45;
const M_PER_IN = 0.0254;
let container = d3.select('#container');

d3.csv('../data/bmi.csv').then(showData);


function write(text) { containier.append('div').text(text); }

function showData(clients) {
  let max = d3.max(clients, d => d.weight);
  let scale = d3.scaleLinear().range([0, 200]).domain([0, max]);
  let join = container.selectAll('div').data(clients);
  join.enter()
    .append('div')
    .text(d => d.name + ': ' + scale(d.weight))
    .style('background-color', 'blue')
    .style('color', 'white')
    .style('margin', '5px')
    .style('width', d => scale(d.weight) + 'px');
}
