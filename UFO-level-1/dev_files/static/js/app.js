// from data.js
var tableData = data;

// YOUR CODE HERE!

// STARTING TABLE

// Get a reference to the table body
var tbody = d3.select("tbody");

// Populate Table
data.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



// FILTER DATE
// Select the button
var filterButton = d3.select("#filter-btn");

// Filter Function
filterButton.on("click", function() {

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");
console.log(inputValue);
// console.log(tableData); //

// Filter by date
var filteredDate = tableData.filter(date => date.datetime === inputValue);
console.log(filteredDate);

// Empty table
document.getElementById("ufo-body").innerHTML = "";

// Populate New Table
filteredDate.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

// 



// RESET TABLE
var resetButton = d3.select("#reset-btn");

// Filter Function
resetButton.on("click", function() {

// Empty table
document.getElementById("ufo-body").innerHTML = "";
document.getElementById("datetime").value = "";

data.forEach(ufoReport => {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });
});






// button.on("click", function() {



//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// });