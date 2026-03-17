var fruit = "mango";
console.log("My favorite fruit is " + fruit);
function doubleNumber(num) {
    console.log(num * 2);
}
doubleNumber(5);
// Single Line Comment
/* Multiple line
    comment
    */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello");
    };
    return Person;
}());
var person = new Person();
person.sayHello();
