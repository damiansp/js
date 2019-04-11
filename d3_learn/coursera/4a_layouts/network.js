let body = d3.select('#body');

d3.json("../data/network.json").then(showData);


function showData(data) {
  let bodyHeight = 400;
  let bodyWidth = 400;
  let sim = d3.forceSimulation()
    .force('link', d3.forceLink().id((d) => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(bodyWidth / 2, bodyHeight / 2));

  sim.nodes(data.nodes);//.on('tick', d => { console.log(data); });
  sim.force('link').links(data.links);
}
