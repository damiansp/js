let body = d3.select('#body');

d3.csv('../data/bmi.csv').then(showData);


function showData(clients) {
  let max = d3.max(clients, d => d.weight);
  let widthScale = d3.scaleLinear().range([0, 300]).domain([0, max]);
  let positionScale = d3.scaleBand()
    .range([0, 200])
    .domain(clients.map(d => d.name))
    .padding(0.1);
  let join = body.selectAll('rect').data(clients);
  join.enter()
    .append('rect')
    .attr('fill', 'blue')
    .attr('width', d => widthScale(d.weight))
    .attr('height', positionScale.bandwidth())
    .attr('y', d => positionScale(d.name));
  let xAxis = d3.axisBottom(widthScale).ticks(5).tickFormat(d => d + " lb");
  d3.select("#xAxis").call(xAxis).attr("transform", "translate(50, 200)");
  let yAxis = d3.axisLeft(positionScale);
  d3.select("#yAxis").call(yAxis).attr("transform", "translate(45, 0)");
}
