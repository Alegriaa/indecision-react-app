"use strict";

// arguments objects - no longer bound with arrow functions


// const add = function(a, b) {
//     return a + b;
// };

// console.log(add(55, 1));


// this keyword - no longer bound

// this keyword is bound to this object


// arrow functions do not mind their own arrow functions
var user = {

    name: "Brian",
    cities: ["Oakland", "New York", "Dublin"],
    // ES 5 function->  printPlacesLived: function() {
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        // transforms each item, getting a new array back
        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // arrow function that can access 'this'
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' i will live through these cities: ' + city)
        // })
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }

    // numbers - array of numbers 
    // multiplyBy - single number 


};

console.log(multiplier.multiply());
