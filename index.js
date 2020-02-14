// Factory Pattern

var peopleFactory = function (name, age, state) {

    var temp = {};

    temp.age = age;
    temp.name = name;
    temp.state = state;

    temp.printPerson = function () {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };

    return temp;

};

var person1 = peopleFactory("John", 23, "CA");
var person2 = peopleFactory("Kim", 27, "SC");

person1.printPerson();
person2.printPerson();


// Contructor Pattern

var peopleConstructor = function (name, age, state) {

    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function () {
        console.log(this.name + ", " + this.age + ", " + this.state);
    };

};

peopleConstructor();

var person1 = new peopleConstructor("John", 43, "CA");
var person2 = new peopleConstructor("Kim", 47, "SC");

person1.printPerson();
person2.printPerson();


// Prototype Pattern

var peopleProto = function () {

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function () {
    console.log(this.name + ", " + this.age + ", " + this.city);
};

var person1 = new peopleProto();
person1.name = "John";
person1.age = 23;
person1.city = "CA";

console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));

person1.printPerson();


// Dynamic Prototype Pattern

var peopleDynamicProto = function (name, age, state) {

    this.age = age;
    this.name = name;
    this.state = state;

    if (typeof this.printPerson !== "function") {
        peopleDynamicProto.prototype.printPerson = function () {
            console.log(this.name + ", " + this.age + ", " + this.state);
        };
    }

};

var person1 = new peopleDynamicProto("John", 23, "CA");

person1.printPerson();
console.log("name" in person1);
console.log(person1.hasOwnProperty("name"));