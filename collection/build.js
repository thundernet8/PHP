var fs = require("fs");
var path = require("path");
var ejs = require("ejs");
var showdown = require("showdown");
showdown.setFlavor("github");
var converter = new showdown.Converter();
var moment = require("moment");

var md = fs.readFileSync(path.resolve("./index.md")).toString();
var template = fs.readFileSync(path.resolve("./template.ejs")).toString();

try {
    var data = { content: converter.makeHtml(md), version: moment().format("YYYYMMDDHHmmss") };
    var html = ejs.render(template, data);
    fs.writeFileSync(path.resolve("./index.html"), html);
} catch (err) {
    throw err;
}
