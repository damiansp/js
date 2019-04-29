let body = d3.select('#body');

d3.json("../data/tree.json").then(showData);


function showData(data) {
  let bodyHeight = 400;
  let bodyWidth = 400;
  let treemap = d3.treemap().size([bodyWidth, bodyHeight]).paddingInner(1);
  let root = d3.hierarchy(data).sum(d => d.sales);

  treemap(root);
  let cScale = d3.scaleOrdinal(d3.schemeCategory10);
  let cell = body.selectAll('g')
    .data(root.leaves())
    .enter()
    .append('g')
    .attr('transform', d => `translate(${d.x0}, ${d.y0})`);

  cell.append('rect')
    .attr('width', d => d.x1 - d.x0)
    .attr('height', d => d.y1 - d.y0)
    .attr('fill', d => cScale(d.parent.data.name));
  cell.append('text')
    .text(d => d.data.name)
    .attr('alignment-baseline', 'hanging')
    .attr('fill', 'white');
}


