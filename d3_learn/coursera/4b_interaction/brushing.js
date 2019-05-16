let body = d3.select("#body");

d3.csv("../data/data.csv").then((data) => {
    let brush = d3.brush();

    showData(data);
    brush.on('brush', function() {
        let coords = d3.event.selection;
        
        body.selectAll('circle')
          .style('fill', function() {
              let cx = d3.select(this).attr('cx');
              let cy = d3.select(this).attr('cy');
              let selected = isSelected(coords, cx, cy);
              return selected ? 'red' : 'blue';
          })
    });
    body.append('g').attr('class', 'brush').call(brush);
});

function showData(clients) {
  let bodyWidth = 300;
  let bodyHeight = 300;
  let xExtent = d3.extent(clients, d => +d.Weight);
  let xScale = d3.scaleLinear()
    .range([0, bodyWidth])
    .domain([xExtent[0]-5, xExtent[1]+5]);
  let yExtent = d3.extent(clients, d => +d.Height);
  let yScale = d3.scaleLinear()
    .range([0, bodyHeight])
    .domain([yExtent[0]-5, yExtent[1]+5]);
  let join = body.selectAll("circle").data(clients);
  let newelements = join.enter()
    .append("circle")
    .style("fill", "blue")
    .style("r", "5");
           
  join.merge(newelements)
    .transition()
    .attr("cx", d => xScale(+d.Weight))
    .attr("cy", d => yScale(+d.Height));    
  d3.select("#yAxis")
    .style("transform", "translate(40px, 10px)")
    .call(d3.axisLeft(yScale));
  d3.select("#xAxis")
    .style("transform", `translate(40px, ${bodyHeight+10}px)`)
    .call(d3.axisBottom(xScale));
}

function isSelected(coords, x, y) {
  let x0 = coords[0][0],
    x1 = coords[1][0],
    y0 = coords[0][1],
    y1 = coords[1][1];
        
  return x0 <= x && x <= x1 && y0 <= y && y <= y1;
}
