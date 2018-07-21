'use strict';

function genOneRandomCustomer(min, max){
  return Math.random() * (max - min) + min;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var firstAndPike = {
  // attributes
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [], // will this array be populated recursively by the random num gen method?
  randomHourlyCookiesArray: [], // same question as above
  dailyTotal: 0,

  // methods
  generateCustomers: function(){ // make the array of randomized customers
    for(var hour of firstAndPike.hours){
      var rando = genOneRandomCustomer(firstAndPike.minHourlyCustomer, firstAndPike.maxHourlyCustomer); // rando is one random number(customer)
      firstAndPike.randomHourlyCustomers.push(rando); // push it into the array
    }
    return firstAndPike.randomHourlyCustomers; // return the array
  },

  calculateSales: function(){
    firstAndPike.generateCustomers();

    for (var numOfCustomersInHour of firstAndPike.randomHourlyCustomers){ // for every element in the array [randomHourlyCustomers]
      var cookies = Math.ceil(firstAndPike.avgCookieSalePerCustomer * numOfCustomersInHour); // cookies will be assigned the value of the firstAndPike avgSale*[genOneRandomCustomer] (the average rate * the randomized number array)
      firstAndPike.randomHourlyCookiesArray.push(cookies); // push the amount of cookies purchased into the array
      firstAndPike.dailyTotal += cookies; // for each houlry cookie sales, add that to this attribute
    }
    return firstAndPike.randomHourlyCookiesArray;
  },

  render: function(){
    firstAndPike.calculateSales();

    var ulEl = document.createElement('ul'); // make some html variables and name them what their tag is + El(for element)
    var h2El = document.createElement('h2');
    h2El.textContent = 'First Y Pike'; //SYNTAX: var.nodetype = attribute
    ulEl.appendChild(h2El); // put h2E1 to -> ulEl

    for (var idx in firstAndPike.hours) { // for every hour the firstAndPike is open
      var liEl = document.createElement('li'); // create a new list element named liEl
      liEl.textContent = firstAndPike.hours[idx] + ': ' + firstAndPike.randomHourlyCookiesArray[idx] + ' cookies'; //construct an 'hour' + cookies sold + 'cookies'
      ulEl.appendChild(liEl); // put it in the unordered list element (the parent)
    }

    var liEltwo = document.createElement('li'); // make a new <li> element called liEltwo
    liEltwo.textContent = 'Total: ' + firstAndPike.dailyTotal; // its content will be 'total' + daily total
    ulEl.appendChild(liEltwo); // put it into the unordered list

    var mainEl = document.getElementById('main-content'); // This looks for the main-content ID, it does not create it!
    mainEl.appendChild(ulEl); // append dat
  },
};

firstAndPike.render(); // START

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SeaTacAirport = {
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookieSalePerCustomer: 1.2,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [],
  randomHourlyCookiesArray: [],
  dailyTotal: 0,

  generateCustomers: function(){ 
    for(var hour of SeaTacAirport.hours){
      var rando = genOneRandomCustomer(SeaTacAirport.minHourlyCustomer, SeaTacAirport.maxHourlyCustomer);
      SeaTacAirport.randomHourlyCustomers.push(rando);
    }
    return SeaTacAirport.randomHourlyCustomers;
  },

  calculateSales: function(){
    SeaTacAirport.generateCustomers();

    for (var numOfCustomersInHour of SeaTacAirport.randomHourlyCustomers){
      var cookies = Math.ceil(SeaTacAirport.avgCookieSalePerCustomer * numOfCustomersInHour);
      SeaTacAirport.randomHourlyCookiesArray.push(cookies);
      SeaTacAirport.dailyTotal += cookies;
    }
    return SeaTacAirport.randomHourlyCookiesArray;
  },

  render: function(){
    SeaTacAirport.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = 'SeaTac Aeropuerto';
    ulEl.appendChild(h2El);

    for (var idx in SeaTacAirport.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = SeaTacAirport.hours[idx] + ': ' + SeaTacAirport.randomHourlyCookiesArray[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + SeaTacAirport.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

SeaTacAirport.render();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var SeattleCenter = {
  minHourlyCustomer: 11,
  maxHourlyCustomer: 38,
  avgCookieSalePerCustomer: 3.7,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [],
  randomHourlyCookiesArray: [],
  dailyTotal: 0,

  generateCustomers: function(){ 
    for(var hour of SeattleCenter.hours){
      var rando = genOneRandomCustomer(SeattleCenter.minHourlyCustomer, SeattleCenter.maxHourlyCustomer);
      SeattleCenter.randomHourlyCustomers.push(rando);
    }
    return SeattleCenter.randomHourlyCustomers;
  },

  calculateSales: function(){
    SeattleCenter.generateCustomers();

    for (var numOfCustomersInHour of SeattleCenter.randomHourlyCustomers){
      var cookies = Math.ceil(SeattleCenter.avgCookieSalePerCustomer * numOfCustomersInHour);
      SeattleCenter.randomHourlyCookiesArray.push(cookies);
      SeattleCenter.dailyTotal += cookies;
    }
    return SeattleCenter.randomHourlyCookiesArray;
  },

  render: function(){
    SeattleCenter.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = 'Seattle Centro';
    ulEl.appendChild(h2El);

    for (var idx in SeattleCenter.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = SeattleCenter.hours[idx] + ': ' + SeattleCenter.randomHourlyCookiesArray[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + SeattleCenter.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

SeattleCenter.render();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var CapitolHill = {
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookieSalePerCustomer: 1.2,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [],
  randomHourlyCookiesArray: [],
  dailyTotal: 0,

  generateCustomers: function(){ 
    for(var hour of CapitolHill.hours){
      var rando = genOneRandomCustomer(CapitolHill.minHourlyCustomer, CapitolHill.maxHourlyCustomer);
      CapitolHill.randomHourlyCustomers.push(rando);
    }
    return CapitolHill.randomHourlyCustomers;
  },

  calculateSales: function(){
    CapitolHill.generateCustomers();

    for (var numOfCustomersInHour of CapitolHill.randomHourlyCustomers){
      var cookies = Math.ceil(CapitolHill.avgCookieSalePerCustomer * numOfCustomersInHour);
      CapitolHill.randomHourlyCookiesArray.push(cookies);
      CapitolHill.dailyTotal += cookies;
    }
    return CapitolHill.randomHourlyCookiesArray;
  },

  render: function(){
    CapitolHill.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = 'Capitol Hill';
    ulEl.appendChild(h2El);

    for (var idx in CapitolHill.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = CapitolHill.hours[idx] + ': ' + CapitolHill.randomHourlyCookiesArray[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + CapitolHill.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

CapitolHill.render();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var Alki = {
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookieSalePerCustomer: 1.2,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [],
  randomHourlyCookiesArray: [],
  dailyTotal: 0,

  generateCustomers: function(){ 
    for(var hour of Alki.hours){
      var rando = genOneRandomCustomer(Alki.minHourlyCustomer, Alki.maxHourlyCustomer);
      Alki.randomHourlyCustomers.push(rando);
    }
    return Alki.randomHourlyCustomers;
  },

  calculateSales: function(){
    Alki.generateCustomers();

    for (var numOfCustomersInHour of Alki.randomHourlyCustomers){
      var cookies = Math.ceil(Alki.avgCookieSalePerCustomer * numOfCustomersInHour);
      Alki.randomHourlyCookiesArray.push(cookies);
      Alki.dailyTotal += cookies;
    }
    return Alki.randomHourlyCookiesArray;
  },

  render: function(){
    Alki.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = 'Alki';
    ulEl.appendChild(h2El);

    for (var idx in Alki.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = Alki.hours[idx] + ': ' + Alki.randomHourlyCookiesArray[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + Alki.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

Alki.render();