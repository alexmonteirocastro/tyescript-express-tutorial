"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var add = function (a, b) { return a + b; };
app.get('/', function (req, res, next) {
    console.log(add(14, 88));
    res.send('sveik');
});
app.listen(5000, function () { return console.log('Server Listening on port 5000...'); });
