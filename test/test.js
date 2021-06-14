var Embed = require("../index.js")
console.log("Test is working")

var a = new Embed();
a.addFunction("print", "void print(){ cout << \"test\";}");
a.run("print");
console.log(a.functions.print)