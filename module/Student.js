"use strict";
exports.__esModule = true;
var Login = /** @class */ (function () {
    function Login() {
        this.data = "this is from Student Module";
    }
    Login.prototype.show = function () {
        console.log("this is function in Teacher Module");
    };
    return Login;
}());
exports["default"] = Login;
