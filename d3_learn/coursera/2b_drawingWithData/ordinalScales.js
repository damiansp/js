let container = d3.select('#container');

d3.csv('../data/bmi.csv').then(showData);


function showData(clients) {
  let max = d3.max(clients, d => d.weight);
  let widthScale = d3.scaleLinear().range([0, 300]).domain([0, max]);
  let positionScale = d3.scaleBand()
    .range([0, 200])
    .domain(clients.map(d => d.name))
    .padding(0.1);
  let join = container.selectAll('rect').data(clients);
  join.enter()
    .append('rect')
    .attr('fill', 'blue')
    .attr('width', d => widthScale(d.weight))
    .attr('height', positionScale.bandwidth())
    .attr('y', d => positionScale(d.name));
}
