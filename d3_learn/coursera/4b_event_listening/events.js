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
    .attr('y', d => positionScale(d.name))
    .on('mouseover', function() { this.style.fill = 'red'; })
    .on('mouseout', function() { this.style.fill = 'blue'; })
    .on('click', d => { d3.select('#details').text(d.name); });

  let xAxis = d3.axisBottom(widthScale).ticks(5).tickFormat(d => d + " lb");
  d3.select("#xAxis").call(xAxis).attr("transform", "translate(50, 200)");

  let line = d3.select('#container').append('g');
  line.append('line')
    .attr('x1', 0)
    .attr('x2', 0)
    .attr('y1', 0)
    .attr('y2', 200)
    .attr('stroke', 'red')
    .attr('stroke-width', '3px');
  
  let yAxis = d3.axisLeft(positionScale);
  d3.select("#yAxis").call(yAxis).attr("transform", "translate(45, 0)");

  d3.select('#container').on('mousemove', function() {
      let x = d3.mouse(this)[0]; // x-coord of mouse
      line.attr('transform', `translate(${x}, 0)`)
  });
}
