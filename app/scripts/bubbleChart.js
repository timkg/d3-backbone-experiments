function bubbleChart () {
  var diameter = 100,
    format = d3.format(",d");

  var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .value(function (d) { return d.daysSinceLastReview; })
    .padding(1.5);

  var svg = d3.select("#one")
    .attr("width", 600)
    .attr("height", diameter)
    .attr("class", "bubble");

  window.nodes = svg.selectAll(".node")
    // we are using a flattened hierarchical json structure - the return value
    // of a call to classes(), which is defined further down
    .data(bubble.nodes(jsonData)
                .filter(function(d) { return !d.children; }))
    // a svg group for each json element
    .enter().append("g")
      .attr("class", "node")
      // move to its computed position
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodes.append("name")
    .text(function(d) { return d.name + ": " + format(d.value); });

  nodes.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return '#999999' });

/*
  nodes.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .text(function(d) { return d.name});
*/

  d3.select(self.frameElement).style("height", diameter + "px");

}

var jsonData = {
  "name": "Ekupici ukiaf oteupu.",
  "children": [
    {
      "name": "ha",
      "value": 6,
      "daysSinceLastReview": 32
    },
    {
      "name": "niwki",
      "value": 1,
      "daysSinceLastReview": 4
    },
    {
      "name": "cawpamo",
      "value": 3,
      "daysSinceLastReview": 15
    },
    {
      "name": "daof",
      "value": 2,
      "daysSinceLastReview": 49
    },
    {
      "name": "otuckuc",
      "value": 4,
      "daysSinceLastReview": 15
    },
    {
      "name": "ta",
      "value": 1,
      "daysSinceLastReview": 4
    },
    {
      "name": "jetjareg",
      "value": 2,
      "daysSinceLastReview": 30
    },
    {
      "name": "saru",
      "value": 2,
      "daysSinceLastReview": 16
    },
    {
      "name": "wipiw",
      "value": 1,
      "daysSinceLastReview": 4
    },
    {
      "name": "veud",
      "value": 5,
      "daysSinceLastReview": 15
    },
    {
      "name": "upo",
      "value": 2,
      "daysSinceLastReview": 6
    },
    {
      "name": "tocuku",
      "value": 1,
      "daysSinceLastReview": 45
    },
    {
      "name": "ijpup",
      "value": 1,
      "daysSinceLastReview": 19
    },
    {
      "name": "nuf",
      "value": 6,
      "daysSinceLastReview": 10
    },
    {
      "name": "ajva",
      "value": 4,
      "daysSinceLastReview": 3
    }
  ]
};
