const KG_PER_POUND = 0.45;
const METER_PER_INCH = 0.0254;
let container = d3.select('#container');
d3.csv('./data/bmi.csv').then(dataLoaded);


function dataLoaded(clients) {
  clients = clients.map(client => {
      client.bmi = getBMI(client)
      return client; });
  showData(clients);
}


function showData(clients) {
  for (let client of clients) { write(client.name + ', ' + client.bmi); }
  write('---------------');
  let sum = clients.reduce((previous, current) => {
      return previous + current.bmi;
  }, 0);
  let mean = sum / clients.length;
  write('Mean: ' + mean);
}

function write(text) { container.append('div').text(text); }
  
function getBMI(client) {
  let weightKg = client.weight * KG_PER_POUND;
  let heightM = client.height * METER_PER_INCH;
  let bmi = weightKg / heightM / heightM;
  return bmi;
}
