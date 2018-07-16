'use strict';

var firstAndPike = {
  minHCustomer: 23,
  maxHCustomer: 65,
  avgCookieSale: 6.3,
  avgHourlyCustomer,
  
  // 15 times please
  getHourlyCustomers: function(location){
      var min = Math.floor(location.minHCustomer);
      var max = Math.ciel(location.maxHCustomer);
      return Math.floor(Math.random()) * (max - min +1) + min
  }
  
  },

};
