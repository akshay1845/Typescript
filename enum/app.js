var Names;
(function (Names) {
    Names[Names["akshay"] = 0] = "akshay";
    Names[Names["chirag"] = 1] = "chirag";
    Names[Names["darshak"] = 2] = "darshak";
    Names[Names["smit"] = 3] = "smit";
    Names[Names["nikunj"] = 4] = "nikunj";
})(Names || (Names = {}));
var info;
info = Names.akshay;
function test(name) {
    return name;
}
console.log(info);
console.log(test(Names.darshak));
