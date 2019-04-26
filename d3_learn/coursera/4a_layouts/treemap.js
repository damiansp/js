let body = d3.select('#body');

d3.json("../data/tree.json").then(showData);


function showData(data) {
  let bodyHeight = 400;
  let bodyWidth = 400;
  let treemap = d3.treemap().size([bodyWidth, bodyHeight]);
  let root = d3.hierarchy(data).sum(d => d.sales);
  //console.log(root);
  console.log(treemap(root));
}


