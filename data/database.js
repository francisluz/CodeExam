'use strict';
var customers = require('./customers.json');

module.exports = {

    //Customers database
    Customers: function() {
        return customers;
    }
};