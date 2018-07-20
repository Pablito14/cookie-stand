'use strict';

function genOneRandomCustomer(min, max){
  return Math.random() * (max - min) + min;
}
// hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '] Perhaps better used as a global variable?

var store = {
  // attributes
  name: 'First and Pike',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  hours: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  randomHourlyCustomers: [], // will this array be populated recursively by the random num gen method?
  randomHourlyCookiesArray: [], // same question as above
  dailyTotal: 0,

  // methods
  generateCustomers: function(){ // make the array of randomized customers
    for(var hour of store.hours){
      var rando = genOneRandomCustomer(store.minHourlyCustomer, store.maxHourlyCustomer); // rando is one random number(customer)
      store.randomHourlyCustomers.push(rando); // push it into the array
    }
    return store.randomHourlyCustomers; // return the array
  },

  calculateSales: function(){
    store.generateCustomers();

    for (var numOfCustomersInHour of store.randomHourlyCustomers){ // for every element in the array [randomHourlyCustomers]
      var cookies = Math.ceil(store.avgCookieSalePerCustomer * numOfCustomersInHour); // cookies will be assigned the value of the store avgSale*[genOneRandomCustomer] (the average rate * the randomized number array)
      store.randomHourlyCookiesArray.push(cookies); // push the amount of cookies purchased into the array
      store.dailyTotal += cookies; // for each houlry cookie sales, add that to this attribute
    }
    return store.randomHourlyCookiesArray;
  },

  render: function(){
    store.calculateSales();

    var ulEl = document.createElement('ul'); // make some html variables and name them what their tag is + El(for element)
    var h2El = document.createElement('h2');
    h2El.textContent = store.name; //SYNTAX: var.nodetype = attribute
    ulEl.appendChild(h2El); // put h2E1 to -> ulEl

    for (var idx in store.hours) { // for every hour the store is open
      var liEl = document.createElement('li'); // create a new list element named liEl
      liEl.textContent = store.hours[idx] + ': ' + store.randomHourlyCookiesArray[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + store.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
};

var stores = [store, ];
for(var store of stores){
  store.render();
}