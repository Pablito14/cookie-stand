'use strict';

//
//

function genRandomHourlyCustomers(min, max){
  return Math.random() * (max - min) + min;
}

var firstAndPike = {
  name: 'First and Pike',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function(){
    //
    //
    //

    //
    for(var hour of firstAndPike.hours){ // Should this be refactorered to be this or location.min/max/cph?
      var rando = genRandomHourlyCustomers(firstAndPike.minHourlyCustomer, firstAndPike.maxHourlyCustomer); 
      firstAndPike.customersPerHour.push(rando);
    }
    return firstAndPike.customersPerHour;
  },
  calculateSales: function(){
    firstAndPike.calculateCustomers(); // Should this be refactorered to be this or location.min/max/cph?

    for (var numCustomers of firstAndPike.customersPerHour){
      var cookies = Math.ceil(firstAndPike.avgCookieSalePerCustomer * numCustomers);
      firstAndPike.cookiesPerHour.push(cookies);
      firstAndPike.dailyTotal += cookies;
    }
    return firstAndPike.cookiesPerHour;
  },
  render: function(){ // Should this be refactorered to be this or location.min/max/cph?
    firstAndPike.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = firstAndPike.name;
    ulEl.appendChild(h2El);

    for (var idx in firstAndPike.hours) { // Should this be refactorered to be this or location.min/max/cph?
      var liEl = document.createElement('li');
      liEl.textContent = firstAndPike.hours[idx] + ': ' + firstAndPike.cookiesPerHour[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li'); // Should this be refactorered to be this or location.min/max/cph?
    liEltwo.textContent = 'Total: ' + firstAndPike.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};


//
var stores = [firstAndPike, ];
for(var store of stores){
  store.render();
}