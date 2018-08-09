'use strict';

var hours = [
  '6am ',
  '7am ',
  '8am ',
  '9am ',
  '10am ',
  '11am ',
  '12pm ',
  '1pm ',
  '2pm ',
  '3pm ',
  '4pm ',
  '5pm ',
  '6pm ',
  '7pm ',
  '8pm '
];
var stores = [];
var dailyTotalsArr = [];
var table = document.createElement('table');

/*************************************************************/
function Store(name, minCustomer, maxCustomer, average) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSalePerCustomer = average;
  this.dailyTotal = 0;
  this.cookieSales = [];
  stores.push(this);
  this.renderData();
}
/*************************************************************/
Store.prototype.generateCustomers = function(min, max) {
  return Math.random() * (max - min) + min;
};

Store.prototype.calculateSales = function() {
  for (var i = 0; i < hours.length; i++) {
    var cookieSale = Math.floor(
      this.generateCustomers(this.minCustomer, this.maxCustomer) *
        this.avgCookieSalePerCustomer
    );
    this.cookieSales.push(cookieSale);
  }
};

Store.prototype.dailyTotals = function() {
  for (var i = 0; i < this.cookieSales.length; i++) {
    this.dailyTotal += this.cookieSales[i];
  }
  dailyTotalsArr.push(this.dailyTotal);
  return this.dailyTotal;
};

/************************************************************* */

function calculateAllTotals(){
  var totalT = 0;
  for (var i = 0; i < dailyTotalsArr.length; i++) {
    totalT += dailyTotalsArr[i];
  }
  return totalT;
}

function makeHeaderRow() {
  // creating a table header element
  var tableHeaderElement = document.createElement('thead');
  // creating a first row with hours
  var trTableHeaderElement = document.createElement('tr');
  // put an empty cell at A1
  trTableHeaderElement.appendChild(document.createElement('td'));
  // run throught the array of hours and create a cell for each element
  for (var hour of hours) {
    var tdHeaderElement = document.createElement('td');
    tdHeaderElement.appendChild(document.createTextNode(hour));
    trTableHeaderElement.appendChild(tdHeaderElement);
  }
  // make the last cell, the total cell
  var tdFirstTotalElement = document.createElement('td');
  tdFirstTotalElement.appendChild(
    document.createTextNode('Daily location Total')
  );
  trTableHeaderElement.appendChild(tdFirstTotalElement);
  tableHeaderElement.appendChild(trTableHeaderElement);
  table.appendChild(tableHeaderElement);
}

/*************************************************************/
function makeFooterRow()
{
  var trEl = document.createElement('tr');
  var emptyTD = document.createElement('td');
  emptyTD.textContent = 'Hourly Totals:';
  trEl.appendChild(emptyTD);
  for(var i = 0; i < hours.length; i++)
  {
    var hourTotal = 0;
    for(var j = 0; j < stores.length; j++){
      hourTotal += stores[j].cookieSales[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = hourTotal;
    trEl.appendChild(tdEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = calculateAllTotals();
  trEl.appendChild(tdEl2);
  table.appendChild(trEl);
}
/*************************************************************/

var createTable = function() {
  makeHeaderRow();
  var grabTable = document.getElementById('Table-goes-heresy');
  grabTable.appendChild(table);
};

Store.prototype.renderData = function() {
  this.calculateSales();
  var trEl = document.createElement('tr');
  var tdNameEl = document.createElement('td');
  tdNameEl.textContent = this.name;
  trEl.appendChild(tdNameEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookieSales[i];
    trEl.appendChild(tdEl);
  }
  var tdEl2 = document.createElement('td');
  tdEl2.textContent = this.dailyTotals();
  trEl.appendChild(tdEl2);
  table.appendChild(trEl);
};
/*************************************************************/

// Store.prototype.render = function(){
//   this.calculateSales();
//   var trEl = document.createElement('tr');
//   var grabTable = document.getElementById('Table-goes-heresy').firstElementChild;
//   grabTable.appendChild(trEl);
//   var storeName = document.createElement('td');
//   storeName.textContent = this.name;
//   trEl.appendChild(storeName);
//   for(var i = 0; i < hours.length; i++){
//     var class1 = 'green';
//     var class2 = 'pink';
//     var classToChange;
//     if(i % 2 === 0){
//       classToChange = class1;
//     } else {
//       classToChange = class2;
//     }
//     var tdEl = document.createElement('td');
//     tdEl.className = classToChange;
//     console.log('random thing', tdEl);
//     tdEl.textContent = this.randomHourlyCookiesArray[i];
//     trEl.appendChild(tdEl);
//   }
//   var totalEl = document.createElement('td');
//   totalEl.textContent = this.dailyTotal;
//   trEl.appendChild(tdEl);
// };

// var nameEl = document.getElementById('name');
// var minEl = document.getElementById('min');
// var maxEl = document.getElementById('max');
// var avgEl = document.getElementById('avg');

var formEl = document.getElementById('formMain');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('event.target', event);
  console.log(event.target.storename.value);
  var storename = event.target.name.value;
  var minC = event.target.minC.value;
  var maxC = event.target.maxC.value;
  var avgS = event.target.avgC.value;
  var submitStore = new Store(storename, minC, maxC, avgS, [], [], 0);
  for (var i = 0; i < hours.length; i++) {
    submitStore.render();
  }
});

createTable();


new Store('First and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

makeFooterRow();