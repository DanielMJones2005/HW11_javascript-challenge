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
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");
 

// Get the value property of the input element
var inputDateVal = inputDate.property("value");
// console.log(inputDateVal);
var inputCityVal = inputCity.property("value");
// console.log(inputCityVal);
var inputStateVal = inputState.property("value");
// console.log(inputStateVal);
var inputCountryVal = inputCountry.property("value");
// console.log(inputCountryVal);
var inputShapeVal = inputShape.property("value");
// console.log(inputShapeVal)

// FILTER
// step 1: define your original filter result

var inputAll = [inputDateVal, inputCityVal, inputStateVal, inputCountryVal, inputShapeVal];
console.log(inputAll);

var inputLen = [];

inputAll.forEach((input) => {
  inputLen.push(input.length);
});

console.log(inputLen)


// step 2: define your filter array
var filter = [];

if (inputLen[0] > 0) {
  filter.push(d => d.datetime === inputDateVal);
} 

if (inputLen[1] > 0) {
  filter.push(d => d.city === inputCityVal);
}

if (inputLen[2] > 0) {
  filter.push(d => d.state === inputStateVal);
}

if (inputLen[3] > 0) {
  filter.push(d => d.country === inputCountryVal);
}

if (inputLen[4] > 0) {
  filter.push(d => d.shape === inputShapeVal);
}

console.log(filter)



var dataResult =  tableData;


// step 3: forEach on filter array to apply filters on result
filter.forEach(f => dataResult = dataResult.filter(f)); 
console.log(dataResult)


// Empty table
document.getElementById("ufo-body").innerHTML = "";
  
// Populate New Table
// filteredDate
dataResult.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

 



// RESET TABLE
var resetButton = d3.select("#reset-btn");

// Filter Function
resetButton.on("click", function() {

// Empty table
document.getElementById("ufo-body").innerHTML = "";
document.getElementById("datetime").value = "";
document.getElementById("city").value = "";
document.getElementById("state").value = "";
document.getElementById("country").value = "";
document.getElementById("shape").value = "";

data.forEach(ufoReport => {
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(([key, value]) => {
     var cell = row.append("td");
     cell.text(value);
   });
 });
});





