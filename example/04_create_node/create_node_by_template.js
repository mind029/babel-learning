// 通过模板，半手动的方式
const template = require("@babel/template").default;
const t = require("@babel/types");
const generate = require("@babel/generator").default;

const buildeNode = template(`
  const a = 1;
  const b = 2;
  const %%VAR_NAME%% = %%VAR_VALUE%%;
`);

// 相关的变量还是需要 babel type 创建对应的 node。
const ast = buildeNode({
  VAR_NAME: t.identifier("c"),
  VAR_VALUE: t.stringLiteral("123"),
});

// console.log(JSON.stringify(ast, null, 2));

const program = t.program(ast, [], "module", null)
console.log(generate(program).code)
