// arguments objects - no longer bound with arrow functions


// const add = function(a, b) {
//     return a + b;
// };

// console.log(add(55, 1));


// this keyword - no longer bound

// this keyword is bound to this object


// arrow functions do not mind their own arrow functions
const user = {

    name: "Brian",
    cities: ["Oakland", "New York", "Dublin"],
    // ES 5 function->  printPlacesLived: function() {
    printPlacesLived() {
        // transforms each item, getting a new array back
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // arrow function that can access 'this'
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' i will live through these cities: ' + city)
        // })
    }

};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy)
    }

    // numbers - array of numbers 
    // multiplyBy - single number 


};

console.log(multiplier.multiply());