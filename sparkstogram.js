var width = 300;
var parentDiv = d3.select("#viz");
var svg = parentDiv.append('svg')
    .attr('width', parentDiv.attr('width'))
    .attr('height', '1em');

function getNumbers() {
    var nums = []
    $('input[type="range"]').each(function(index, obj) {
        nums.push(obj.value);
    });
    return nums;
}

var numbers = getNumbers();

svg.selectAll("line")
    .data(numbers)
    .enter().append("line")
    .attr("x1", function(d,i) { return (d/100)*width })
    .attr("y1", 0)
    .attr("x2", function(d,i) { return (d/100)*width })
    .attr("y2", 1000)
    .attr("stroke", "#141414")
    .attr("stroke-width","2");    



$('input[type="range"]').change(function() {
    numbers = getNumbers();
    console.log(numbers);
    svg.selectAll("line")
        .data(numbers)
        .attr("x1", function(d,i) { return (d/100)*width })
        .attr("y1", 0)
        .attr("x2", function(d,i) { return (d/100)*width })
        .attr("y2", 1000);
})


