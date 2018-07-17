'use strict';

var firstAndPike = {
  minHourlyCustomer: 23,
  maxHourlyCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  avgHourlyCustomer: genRandomHourlyCustomers(firstAndPike),
  avgHourlyCookieSold: calculateAvgHourlyCookiesSold(firstAndPike),
  amountOfCookiesSoldPH: [], /* TO BE CALCULATED STILL */

 


};





// FUNCTION TO GENERATE A RANDOM NUMBER WITHIN A RANGE
var genRandomHourlyCustomers = function(location){
  var randomHourlyCustomers;
  var min = Math.floor(location.minHourlyCustomer);
  var max = Math.floor(location.maxHourlyCustomer + 1);
  randomHourlyCustomers = Math.floor((Math.random()) * (max - min +1) + min);
  return randomHourlyCustomers;
};

// FUNCTION TO CALCULATE THE "amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated"
var calculateAvgHourlyCookiesSold = function(location){
  for(var i = 0; i < 14; i++){
    location.avgHourlyCookieSold = location.randomHourlyCustomers * location.avgCookieSalePerCustomer;
    location.amountOfCookiesSoldPH.push(location.avgHourlyCookieSold);
    console.log(location.amountOfCookiesSoldPH);
  }
  console.log(location.amountOfCookiesSoldPH);
};
console.log(location.amountOfCookiesSoldPH);
