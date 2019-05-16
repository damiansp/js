let body = d3.select("#body");

d3.csv("../data/bmi2.csv").then((data) => {
    showData(data)
    d3.select("#save").on("click",function() {
        let name = d3.select("#name").node().value;
        let weight = d3.select("#weight").node().value;
        let client = data.find(d => d.Name === name);
        if (client) {
          client.Weight = weight;
        } else {
          data.push({
              "Name": name,
              Weight: weight
          })
        }
        showData(data)
    });
    d3.select("#min-weight").on("change", function() {
        let value = this.value;
        filteredData = data.filter(c => +c.Weight > value);
        showData(filteredData)
    });
});


function showData(clients) {
  let max = d3.max(clients, d => +d.Weight);
  let scale = d3.scaleLinear().range([0, 60]).domain([0, max]);
  let scalePosition = d3.scaleBand()
    .rangeRound([0, 130])
    .domain(clients.map(d => d.Name));
  scalePosition.padding(0.3);

  let join = body.selectAll("rect").data(clients);
  let newelements = join.enter()
    .append("rect")
    .style("fill", "blue")
    .style("stroke", "white")
    .attr("height", scalePosition.bandwidth())
    .attr("transform", d => `translate(0, ${scalePosition(d.Name)})`)
    .on("click", function(d) {
        d3.select("#name").property("value", d.Name)
        d3.select("#weight").node().value = d.Weight
    });
  join.merge(newelements).transition()
    .attr("width", d => scale(+d.Weight))
    .attr("height", scalePosition.bandwidth())
    .attr("transform", d => `translate(0, ${scalePosition(d.Name)})`);
  join.exit().remove();

  let yAxis = d3.axisLeft(scalePosition);
  yAxisContainer = d3.select("#yAxis")
    .style("transform", "translate(40px, 10px)")
    .transition()
    .call(yAxis);
}
    
    

    
    
