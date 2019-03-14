let body = d3.select('#body');

d3.csv("../data/sales.csv").then(showData);


function showData(data) {
  let bodyHeight = 500;
  let bodyWidth = 500;
  let pad = 20;
  let r = bodyHeight / 2;
  data = data.map(d => ({country: d.country, sales: +d.sales}));
  let pie = d3.pie().value(d => d.sales);
  let colorScale = d3.scaleOrdinal()
    .range(d3.schemeCategory10)
    .domain(data.map(d => d.country));
  let arc = d3.arc().outerRadius(r).innerRadius(r / 2);
  let doughnutG = body.selectAll('.arc').data(pie(data)).enter().append('g');
  doughnutG.append('path')
    .attr('d', arc)
    .attr('fill', d => { return colorScale(d.data.country) })
    .attr('transform', 'translate(' +  (r + pad) + ', ' + (r + pad) +  ')');
}


