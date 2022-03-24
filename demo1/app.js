"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var a = "Hello Typescript";
console.log("a => " + a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.display = function () {
        console.log("Inside Class Function!!!");
    };
    return App;
}());
var obj = new App();
obj.display();
//typescript types
var num = 18;
console.log("num = " + num);
var str = "15";
console.log("string = " + str);
//array
var data = ["Akshay", "Virat", 18, true];
data.push(18.5);
data[2] = "Rohit";
data.push(false);
console.log("random array=>" + data);
var data1 = [15, 20, 45, 78, 12.5, 40];
// data1.push("Akshay")     datatype mustbe number
console.log("number array => " + data1);
var data2 = ["Rahul", "Bumrah", "Jadeja"];
data2.push("Akshay");
// data2.push(12)    will give an error
console.log("String  array => " + data2);
//objects
var obj1 = {
    name: "Akshay",
    age: 20,
    address: "Rajkot"
};
// obj1.age = "15"
obj1.age = 21;
console.log("1st object => " + JSON.stringify(obj1));
var obj2 = {
    name: "Virat Kohli",
    age: 32,
    address: "Delhi",
    cricket: true
};
console.log("2nd object" + JSON.stringify(obj2));
obj2.name = "Cristiano Ronaldo";
//  obj2.cricket = "no"
obj2.cricket = false;
console.log("2nd object After Update" + JSON.stringify(obj2));
var obj3 = {
    name: "Rohit Sharma",
    age: 33,
    address: "Mumbai",
    cricket: true
};
console.log("3rd object" + JSON.stringify(obj3));
obj3.name = "Lionel Messi";
obj3.age = "I don't want to say";
obj3.cricket = "no";
console.log("3rd object After Update" + JSON.stringify(obj3));
//union types
var uni_data = "This is Union";
var uni_num = 50;
console.log("data = " + uni_data + ", number = " + uni_num);
uni_num = "5000";
console.log("After Update,  number = " + uni_num);
//function
function add(x, y) {
    return y ? x + y : x;
}
console.log("addition=" + add(10, 30));
var App1 = /** @class */ (function () {
    function App1() {
        this.name = "Akshay Gadher";
    }
    // constructor(name:string){
    //     this.name = name
    // }
    App1.prototype.getName = function () {
        return this.name;
    };
    return App1;
}());
var o1 = new App1();
console.log("Name in  Class App1=> " + o1.getName());
//Inheritence
var Super = /** @class */ (function () {
    function Super() {
    }
    Super.prototype.setName = function (name) {
        this.name = name;
    };
    return Super;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sub.prototype.getName = function () {
        return this.name;
    };
    return Sub;
}(Super));
var s1 = new Sub();
s1.setName("Chirag Gadher");
console.log("Inherited Data => Name = " + s1.getName());
