let body = d3.select('#body');

d3.csv("../data/ts.csv").then(showData);


function showData(data) {
  let bodyHeight = 500;
  let bodyWidth = 500;
  data = data.map(d => ({date: new Date(d.date), price: +d.price}));
  let maxValue = d3.max(data, d => d.price);
  let yScale = d3.scaleLinear().domain([0, maxValue]).range([bodyHeight, 0]);
    let xScale = d3.scaleTime()
    .domain(d3.extent(data, d => d.date))
    .range([0, bodyWidth]);
  body.append('g').call(d3.axisLeft(yScale));
  body.append('g')
    .attr('transform', 'translate(0,' + bodyHeight + ')')
    .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b')));
  let valueLine = d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.price))
    .defined(d => !!d.price); // removes NA vals (now false) from plot
  body.append('path').datum(data).attr('d', valueLine).attr('class', 'line');
}
