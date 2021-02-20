class Person {
    // es6 constructor 
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return "Hello. My name is ${this.name}!";
    }
    getDescription() {
        return '${this.name} is ${this.age} year(s) old';
    }


}

// new instance 
const me = new Person('Brian', 26);
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());


const other = new Person();
console.log(other);