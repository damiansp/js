let body = d3.select('#body');

Promise.all([d3.csv("earthquakes.csv"),
             d3.json("countries.geo.json")])
  .then(showData);


function showData(dataSources) {
  let data = dataSources[0];
  let mapInfo = dataSources[1];
  let heigth = 500;
  let width = 500;
  let projection = d3.geoNaturalEarth1()
    .scale(130)
    .translate([bodyWidth / 2, bodyHeight / 2]);
  let dataIndex = {};

  for (let c of data) {
    let country = c.Country;
    dataIndex[country] = +c.Magnitude;
  }
  mapInfo.features = mapInfo.features.map(d => {
      let magnitude = dataIndex[]
  });
}
