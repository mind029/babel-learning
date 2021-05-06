const babel = require("@babel/core");
const syntaxDecorators = require("@babel/plugin-syntax-decorators");
const plugin = require("./insert_plugin");
const path = require("path");

const { code } = babel.transformFileSync(
  path.join(__dirname, "./inputCode.js"),
  { plugins: [[syntaxDecorators, { legacy: false, decoratorsBeforeExport: false }], plugin] },
);

console.log(code);
console.log("done");
