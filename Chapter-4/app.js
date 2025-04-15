const canvas = d3.select("#canvas");

const svg = canvas.append("svg").attr("width", 600).attr("height", 600);
// const rect = svg.append("rect")
const rect = svg.selectAll("rect")

d3.json('text.json')
.then(data=>{
  
  rect.data(data)
  .enter().append("rect")
  .attr("width", 24)
  .attr("fill", d=>d.fill)
  .attr("height",function(d,i) {
    return d.height*2
  })
  .attr("x", function(d, i) {
      console.log(d);
      return i*25;
    }
  )
  .attr("y", function(d){
    return 200 - (d.height*2)
  })
})