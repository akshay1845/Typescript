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
var UsersInfo;
(function (UsersInfo) {
    var Demo = /** @class */ (function () {
        function Demo() {
        }
        Demo.prototype.setName = function (name) {
            this.name = name;
        };
        return Demo;
    }());
    UsersInfo.Demo = Demo;
})(UsersInfo || (UsersInfo = {}));
/// <reference path="./Utils.ts" />
var UsersInfo;
(function (UsersInfo) {
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = "Virat King Kohli";
            _this.age = 15;
            return _this;
        }
        App.prototype.getName = function () {
            return this.name;
        };
        App.prototype.setAge = function (age) {
            this.age = age;
        };
        App.prototype.getAge = function () {
            return this.age;
        };
        return App;
    }(UsersInfo.Demo));
    UsersInfo.App = App;
})(UsersInfo || (UsersInfo = {}));
var namespaceObj = new UsersInfo.App();
console.log("Before Name=> " + namespaceObj.getName());
console.log("Before Age => " + namespaceObj.getAge());
namespaceObj.setName("Changing the name");
namespaceObj.setAge(22);
console.log("After Name => " + namespaceObj.getName());
console.log("After Age => " + namespaceObj.getAge());
