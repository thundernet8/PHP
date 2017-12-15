var fs = require("fs");
var path = require("path");
var ejs = require("ejs");
var showdown = require("showdown");
showdown.setFlavor("github");
var converter = new showdown.Converter();

var md = fs.readFileSync(path.resolve("./index.md")).toString();
var template = fs.readFileSync(path.resolve("./template.ejs")).toString();

try {
    var html = ejs.render(template, { content: converter.makeHtml(md) });
    fs.writeFileSync(path.resolve("./index.html"), html);
} catch (err) {
    throw err;
}
