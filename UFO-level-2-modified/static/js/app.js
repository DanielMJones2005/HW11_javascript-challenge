// from data.js
let tableData = data;

// YOUR CODE HERE!

// STARTING TABLE

// Get a reference to the table body
let tbody = d3.select("tbody");

// Populate Table
data.forEach(ufoReport => {
    let row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });



// FILTER DATE
// Select the button
let filterButton = d3.select("#filter-btn");

// Filter Function
filterButton.on("click", function() {

// Select the input element and get the raw HTML node
let inputDate = d3.select("#datetime");
let inputCity = d3.select("#city");
let inputState = d3.select("#state");
let inputCountry = d3.select("#country");
let inputShape = d3.select("#shape");
 

// Get the value property of the input element
let inputDateVal = inputDate.property("value");
// console.log(inputDateVal);
let inputCityVal = inputCity.property("value");
// console.log(inputCityVal);
let inputStateVal = inputState.property("value");
// console.log(inputStateVal);
let inputCountryVal = inputCountry.property("value");
// console.log(inputCountryVal);
let inputShapeVal = inputShape.property("value");
// console.log(inputShapeVal)

// FILTER
// step 1: define your original filter result

let inputAll = [inputDateVal, inputCityVal, inputStateVal, inputCountryVal, inputShapeVal];
console.log(inputAll);

let inputLen = [];

inputAll.forEach((input) => {
  inputLen.push(input.length);
});

console.log(inputLen)


// step 2: define your filter array
let filter = [];

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



let dataResult =  tableData;


// step 3: forEach on filter array to apply filters on result
filter.forEach(f => dataResult = dataResult.filter(f)); 
console.log(dataResult)


// Empty table
document.getElementById("ufo-body").innerHTML = "";
  
// Populate New Table
// filteredDate
dataResult.forEach(ufoReport => {
  let row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

 



// RESET TABLE
let resetButton = d3.select("#reset-btn");

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
  let row = tbody.append("tr");
   Object.entries(ufoReport).forEach(([key, value]) => {
    let cell = row.append("td");
     cell.text(value);
   });
 });
});





