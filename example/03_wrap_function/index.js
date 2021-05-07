const babel = require("@babel/core");
const syntaxDecorators = require("@babel/plugin-syntax-decorators");
const plugin = require("./wrap_plugin");
const path = require("path");
const fs = require("fs");

const { code } = babel.transformFileSync(
  path.join(__dirname, "./inputCode.js"),
  { plugins: [[syntaxDecorators, { legacy: false, decoratorsBeforeExport: false }], plugin] },
);

console.log(code);
fs.writeFileSync(path.join(__dirname, "./outputCode.js"), code)
console.log("done");
