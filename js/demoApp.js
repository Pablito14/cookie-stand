'use strict';

function generateRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var pike = {
  name: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 54,
  avgSales: 3.4,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function() {

    for(var hour of pike.hours) {
      var rando = generateRandom(pike.minCustomers, pike.maxCustomers);
      pike.customersPerHour.push(rando);
    }
    return pike.customersPerHour;
  },
  
  calculateSales: function() {
    pike.calculateCustomers();

    for (var numCustomers of pike.customersPerHour) {
      var cookies = Math.ceil(pike.avgSales * numCustomers);
      pike.cookiesPerHour.push(cookies);
      pike.dailyTotal += cookies;
    }
    return pike.cookiesPerHour;
  },
  render: function() {
    pike.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = pike.name;
    ulEl.appendChild(h2El);

    for (var idx in pike.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = pike.hours[idx] + ': ' + pike.cookiesPerHour[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + pike.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

var stores = [pike, ];
for (var store of stores) {
  store.render();
}