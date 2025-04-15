const canvas = d3.select("#canvas");

const svg = canvas.append("svg").attr("width", 500).attr("height", 500);

const circle1 = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 50)
  .attr("r", 50)
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("fill", "white");

const circle2 = svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 190)
  .attr("r", 90)
  .attr("stroke", "black")
  .attr("stroke-width", 5)
  .attr("fill", "white");


svg.append("circle")
  .attr("cx", 80)
  .attr("cy", 40)
  .attr("r", 5)
  .attr("fill", "black");

  svg.append("circle")
  .attr("cx", 120)
  .attr("cy", 40)
  .attr("r", 5)
  .attr("fill", "black");

svg.append("polygon")
  .attr("points", "100,50 130,55 100,60")
  .attr("fill", "orange");

