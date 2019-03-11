let body = d3.select('#body');

d3.csv("../data/sales.csv").then(showData);


function showData(data) {
  let bodyHeight = 500;
  let bodyWidth = 500;
  data = data.map(d => ({country: d.country, sales: +d.sales}));
  let pie = d3.pie().value(d => d.sales);
  let colorScale = d3.scaleOridinal()
    .range(d3.schemeCategory10)
    .domain(data.map(d => d.country));
  
}


