"use strict";
var c = 5;
console.log(c);
function a() {
    return 6;
}
c = a() + "";
console.log(c);
var tuple = [10, "alma"];
console.log(tuple[0]);
console.log(tuple[1]);
var napok;
(function (napok) {
    napok[napok["hetfo"] = 400] = "hetfo";
    napok[napok["kedd"] = 401] = "kedd";
    napok[napok["szerda"] = 402] = "szerda";
    napok[napok["esigytovabb"] = 403] = "esigytovabb";
})(napok || (napok = {}));
console.log(napok.hetfo);
