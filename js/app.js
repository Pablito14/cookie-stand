'use strict';

function genRandomHourlyCustomers(min, max){
  return Math.random() * (max - min) + min;
}

var firstAndPike = {
  name: 'First and Pike',
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  hours: [],
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  calculateCustomers: function(){

    for(var hour of firstAndPike.hours){
      var rando = genRandomHourlyCustomers(firstAndPike.minHourlyCustomer, firstAndPike.maxHourlyCustomer);
      firstAndPike.customersPerHour.push(rando);
    }
    return firstAndPike.customersPerHour;
  },

  calculateSales: function(){
      firstAndPike.calculateCustomers();

      for (var numCustomers of firstAndPike.customersPerHour){
          var cookies = Math.ceil(firstAndPike.avgCookieSalePerCustomer * numCustomers);
          firstAndPike.cookiesPerHour.push(cookies);
          firstAndPike.dailyTotal += cookies;
      }
      return firstAndPike.cookiesPerHour;
  }

  render: function(){
    firstAndPike.calculateSales();

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = firstAndPike.name;
    ulEl.appendChild(h2El);

    for (var idx in firstAndPike.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = firstAndPike.hours[idx] + ': ' + firstAndPike.cookiesPerHour[idx] + ' cookies';
      ulEl.appendChild(liEl);
    }

    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + firstAndPike.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);
  },
  }
/*
// FUNCTION TO CALCULATE THE "amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated"
var calculateAvgHourlyCookiesSold = function(location){
  for(var i = 0; i < 14; i++){
    location.avgHourlyCookieSold = location.randomHourlyCustomers * location.avgCookieSalePerCustomer;
    location.amountOfCookiesSoldPH.push(location.avgHourlyCookieSold);
    console.log(location.amountOfCookiesSoldPH);
  }
  console.log(location.amountOfCookiesSoldPH);
};
console.log(location.amountOfCookiesSoldPH); */