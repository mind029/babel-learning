// 1. 在辅助网站输入对应代码
// 2. 右键复制 babel type node 生成代码
// 3. 声明对应的变量，然后替换到 babel type 对应node 值，注意，类型要一致，否则会报错
const t = require("@babel/types");
const generate = require("@babel/generator").default;

const VAR_E_NAME = "e";
const VAR_F_NAME = "f";
const VAR_G_NAME = "g";

const E_VALUE = 1;
const F_VALUE = 2;
const G_VALUE = "123";

const ast = t.program(
  [
    t.variableDeclaration("const", [
      t.variableDeclarator(t.identifier(VAR_E_NAME), t.numericLiteral(E_VALUE)),
    ]),
    t.variableDeclaration("const", [
      t.variableDeclarator(t.identifier(VAR_F_NAME), t.numericLiteral(F_VALUE)),
    ]),
    t.variableDeclaration("const", [
      t.variableDeclarator(t.identifier(VAR_G_NAME), t.stringLiteral(G_VALUE)),
    ]),
  ],
  [],
  "module",
  null,
);

console.log(JSON.stringify(ast, null, 2));

console.log(generate(ast).code)

// 输出
// const e = 1;
// const f = 2;
// const g = "123";
