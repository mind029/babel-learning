const babel = require("@babel/core");
const plugin = require("./sequence_plugin");
const path = require("path");

const { code } = babel.transformFileSync(path.join(__dirname, './inputCode.js'), { plugins: [plugin] });

// console.log(code);
console.log('done')
