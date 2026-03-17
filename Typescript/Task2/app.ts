let fruit:string = "mango"
console.log("My favorite fruit is "+fruit);

function doubleNumber(num:number):void{
    console.log(num*2);
}

doubleNumber(5);
// Single Line Comment
/* Multiple line
    comment
    */

class Person {
    sayHello():void{
        console.log("Hello");
    }
}

let person = new Person();
person.sayHello();