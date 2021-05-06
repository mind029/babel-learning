module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "ast-transform", // not required
    visitor: {
      Program(path) {
        console.log('Program')
      },
      ClassDeclaration(path) {
        console.log('ClassDeclaration')
      },
      VariableDeclaration(path) {
        console.log('VariableDeclaration', path.node.declarations[0].id.name)
      },
      ExpressionStatement(path) {
        console.log('ExpressionStatement')
      },
      IfStatement(path) {
        console.log('IfStatement', path.node.test.left.name, path.node.test.operator, path.node.test.right.name)
      }
    }
  };
}
