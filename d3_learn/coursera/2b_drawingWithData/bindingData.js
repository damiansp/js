let container = d3.select('#container');
let addButton = d3.select('#add');
let removeButton = d3.select('#remove');
let clients = [{Name: "Client0"}];
let count = 1;

addButton.on('click', addClient);
removeButton.on('click', removeClient);

function addClient() {
  clients.push({Name: "Client" + count++});
  showData(clients);
}


function removeClient() {
  clients = clients.slice(0, -1);
  count--;
  showData(clients);
}


function showData(clients) {
  let join = container.selectAll('div').data(clients);
  join.enter().append('div').text(d => d.Name + ' (New)');
  join.exit().remove();
  join.text(d => d.Name + ' (Updated)');
}

showData(clients);
