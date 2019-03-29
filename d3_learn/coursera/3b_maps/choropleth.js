let body = d3.select('#body');

Promise.all([d3.csv("../data/earthquakes.csv"),
             d3.json("../data/countries.geo.json")])
  .then(showData);


function showData(dataSources) {
  let data = dataSources[0];
  let mapInfo = dataSources[1];
  let height = 500;
  let width = 500;
  let projection = d3.geoNaturalEarth1()
    .scale(130)
    .translate([width / 2, height / 2]);
  let dataIndex = {};

  for (let c of data) {
    let country = c.Country;
    dataIndex[country] = +c.Magnitude;
  }
  mapInfo.features = mapInfo.features.map(d => {
      let country = d.properties.name;
      let magnitude = dataIndex[country];
      d.properties.Magnitude = magnitude;
      return d;
  });
  let maxEarthquake = d3.max(mapInfo.features, d => d.properties.Magnitude);
  let medianEarthquake = d3.median(mapInfo.features,
                                   d => d.properties.Magnitude);
  let colorScale = d3.scaleLinear()
    .domain([0, medianEarthquake, maxEarthquake])
    .range(['orange', 'white', 'blue']);
  let path = d3.geoPath().projection(projection);
  body.selectAll('path')
    .data(mapInfo.features)
    .enter()
    .append('path')
    .attr('d', d => path(d))
    .attr('stroke', 'black')
    .attr('fill',
          d => d.properties.Magnitude
          ? colorScale(d.properties.Magnitude)
          : '#CCCCCC');
}
