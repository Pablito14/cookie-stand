'use strict';



var firstAndPike = {
  minHCustomer: 23,
  maxHCustomer: 65,
  avgCookieSale: 6.3,
  avgHourlyCustomer: 0,
  avgHourlyCookieSold: 0,
  randomHourlyCustomers: 0,
  amountOfCookiesSoldPH: [],

  getHourlyCookiesSold: function(){
    for(var i = 0; i < 14; i++){
      this.avgHourlyCookieSold = this.avgHourlyCustomer * this.avgCookieSale;
      this.avgHourlyCookieSold.push(this.amountOfCookiesSoldPH);
      i++;
    }
  }


};
var genRandomHourlyCustomers = function(location){
  var randomHourlyCustomers;
  var min = Math.floor(location.minHCustomer);
  var max = Math.floor(location.maxHCustomer + 1);
  randomHourlyCustomers = Math.floor((Math.random()) * (max - min +1) + min);
  console.log(randomHourlyCustomers);

  return randomHourlyCustomers;
};

genRandomHourlyCustomers(firstAndPike);
