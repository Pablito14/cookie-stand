'use strict';

function genOneRandomCustomer(min, max){
  return Math.random() * (max - min) + min;
}
// hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '] Perhaps better used as a global variable?

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

firstAndPike.render();

var SeaTacAirport = {
  // attributes
  minHourlyCustomer: 3,
  maxHourlyCustomer: 24,
  avgCookieSalePerCustomer: 1.2,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [], // will this array be populated recursively by the random num gen method?
  randomHourlyCookiesArray: [], // same question as above
  dailyTotal: 0,

  // methods
  generateCustomers: function(){ // make the array of randomized customers
    for(var hour of SeaTacAirport.hours){
      var rando = genOneRandomCustomer(SeaTacAirport.minHourlyCustomer, SeaTacAirport.maxHourlyCustomer); // rando is one random number(customer)
      SeaTacAirport.randomHourlyCustomers.push(rando); // push it into the array
    }
    return SeaTacAirport.randomHourlyCustomers; // return the array
  },

  calculateSales: function(){
    SeaTacAirport.generateCustomers();

    for (var numOfCustomersInHour of SeaTacAirport.randomHourlyCustomers){ // for every element in the array [randomHourlyCustomers]
      var cookies = Math.ceil(SeaTacAirport.avgCookieSalePerCustomer * numOfCustomersInHour); // cookies will be assigned the value of the SeaTacAirport avgSale*[genOneRandomCustomer] (the average rate * the randomized number array)
      SeaTacAirport.randomHourlyCookiesArray.push(cookies); // push the amount of cookies purchased into the array
      SeaTacAirport.dailyTotal += cookies; // for each houlry cookie sales, add that to this attribute
    }
    return SeaTacAirport.randomHourlyCookiesArray;
  },

  render: function(){
    SeaTacAirport.calculateSales();

    var ulEl = document.createElement('ul'); // make some html variables and name them what their tag is + El(for element)
    var h2El = document.createElement('h2');
    h2El.textContent = 'SeaTac Aeropuerto'; //SYNTAX: var.nodetype = attribute
    ulEl.appendChild(h2El); // put h2E1 to -> ulEl

    for (var idx in SeaTacAirport.hours) { // for every hour the SeaTacAirport is open
      var liEl = document.createElement('li'); // create a new list element named liEl
      liEl.textContent = SeaTacAirport.hours[idx] + ': ' + SeaTacAirport.randomHourlyCookiesArray[idx] + ' cookies'; //construct an 'hour' + cookies sold + 'cookies'
      ulEl.appendChild(liEl); // put it in the unordered list element (the parent)
    }

    var liEltwo = document.createElement('li'); // make a new <li> element called liEltwo
    liEltwo.textContent = 'Total: ' + SeaTacAirport.dailyTotal; // its content will be 'total' + daily total
    ulEl.appendChild(liEltwo); // put it into the unordered list

    var mainEl = document.getElementById('main-content'); // This looks for the main-content ID, it does not create it!
    mainEl.appendChild(ulEl); // append dat
  },
};

SeaTacAirport.render();