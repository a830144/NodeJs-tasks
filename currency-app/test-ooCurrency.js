var Currency = require('./ooCurrency');
var canadianDollar = 0.91;
var currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));