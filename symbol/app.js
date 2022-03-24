var _a;
var s1 = Symbol();
var s2 = Symbol("Akshay from the Symbol");
console.log("s1 => ", s1);
console.log("s2 => ", s2);
var data = (_a = {},
    _a[s1] = "someData in object",
    _a);
console.log(data[s1]);
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.function1 = function () {
        return "Data in class";
    };
    return Demo;
}());
var obj = new Demo();
console.log(obj.function1());
