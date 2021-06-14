const execSync = require('child_process').execSync;
const fs = require('fs');
var functions = []
JSEmbedC.prototype.functions = functions;

function JSEmbedC(){
    console.log("constructor")
    execSync('touch embeddedc.cc');
    fs.appendFileSync('embeddedc.cc', "#include <stdio.h>\r\nusing namespace std;\r\n");
}

JSEmbedC.prototype.print = function print() {
    console.log("msg");
}

JSEmbedC.prototype.addFunction = function addFunction(name, method){
    functions[name] = method;
    fs.appendFileSync('embeddedc.cc', method + "\r\n");
}
JSEmbedC.prototype.ls = () => {
    console.log(execSync('ls', { encoding: 'utf-8' }));  // the default is 'buffer'
}

JSEmbedC.prototype.run = function run(name){
    fs.appendFileSync('embeddedc.cc', "int main(){ " + name + "(); \r\n return 0; }");
    execSync('g++ embeddedc.cc -o embeddedc');
    execSync('./embeddedc');

}

module.exports = JSEmbedC;
