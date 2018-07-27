'use strict';


var hours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
var stores = [];
function genOneRandomCustomer(min, max){
  return Math.random() * (max - min) + min;
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Store(name, min, max, average){
  this.name = name;
  this.minHourlyCustomer = min;
  this.maxHourlyCustomer = max;
  this.avgCookieSalePerCustomer = average;
  this.randomHourlyCookiesArray = [];
  this.randomHourlyCustomers = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.render();
}


Store.prototype.generateCustomers = function(){
  for(var hour of hours){
    var rando = genOneRandomCustomer(this.minHourlyCustomer, this.maxHourlyCustomer);
    this.randomHourlyCustomers.push(rando);
  }
  // return this.randomHourlyCustomers;
};


// Function to create cookie data AND push into a cph[]
// within call render

Store.prototype.calculateSales = function(){
  this.generateCustomers();
  for (var numOfCustomersInHour of this.randomHourlyCustomers){
    var cookies = Math.ceil(this.avgCookieSalePerCustomer * numOfCustomersInHour);
    this.randomHourlyCookiesArray.push(cookies);
    this.dailyTotal += cookies;
  }
  // return this.randomHourlyCookiesArray;
};

Store.prototype.render = function(){
  this.calculateSales();

  var trEl = document.createElement('tr');
  var grabTable = document.getElementById('Table-goes-heresy').firstElementChild;
  grabTable.appendChild(trEl);

  var storeName = document.createElement('td');
  storeName.textContent = this.name;
  trEl.appendChild(storeName);

  for(var i = 0; i < hours.length; i++){
    var class1 = 'green';
    var class2 = 'pink';
    var classToChange;
    if(i % 2 === 0){
      classToChange = class1;
    } else {
      classToChange = class2;
    }

    var tdEl = document.createElement('td');
    tdEl.className = classToChange;
    console.log('random thing', tdEl);
    tdEl.textContent = this.randomHourlyCookiesArray[i];
    trEl.appendChild(tdEl);
  }

  var totalEl = document.createElement('td');
  totalEl.textContent = this.dailyTotal;
  trEl.appendChild(tdEl);
};

function makeTopRow(){
  var tableEl = document.createElement('table');
  var location = document.getElementById('Table-goes-heresy');
  location.appendChild(tableEl);
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var blank = document.createElement('td');
  trEl.appendChild(blank);

  for(var i = 0; i < hours.length; i++){
    var tdEl = document.createElement('th');
    tdEl.textContent = hours[i];
    trEl.appendChild(tdEl);
  }
  var totH = document.createElement('th');
  totH.textContent ='Totals';
  trEl.appendChild(totH);
}

makeTopRow();

var firstStore = new Store('First and Pike', 23, 65, 6.3);
var secondStore = new Store('SeaTac Airport', 3, 24, 1.2);
var thirdStore = new Store('Seattle Center', 11, 38, 3.7);
var fourthStore = new Store('Capitol Hill', 20, 38, 2.3);
var fifthStore = new Store('Alki', 2, 16, 4.6);

function makeBotRow(){

}

