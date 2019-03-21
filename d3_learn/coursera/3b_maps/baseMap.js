let body = d3.select('#body');

d3.json("../data/countries.geo.json").then(showData);


function showData(mapInfo) {
  let bodyHeight = 500;
  let bodyWidth = 500;
  let projection = d3.geoNaturalEarth1() //geoMercator()
    .scale(130)
    .translate([bodyWidth / 2, bodyHeight / 2]);
  let path = d3.geoPath().projection(projection);
  body.selectAll('path')
    .data(mapInfo.features)
    .enter()
    .append('path')
    .attr('d', d => path(d)).attr('stroke', 'black').attr('fill', 'none');
}
