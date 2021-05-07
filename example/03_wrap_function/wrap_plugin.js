module.exports = function ({ types: t }) {
  return {
    name: "wrap-function", // not required
    visitor: {
      VariableDeclarator(path) {
        // 如何不是箭头函数，return 掉
        if (!t.isArrowFunctionExpression(path.node.init)) return;

        // 创建新的 Node 节点
        const newNode = t.callExpression(
          t.callExpression(t.identifier("after"), [
            t.arrowFunctionExpression(
              [t.identifier("name")],
              t.blockStatement(
                [
                  // 可以变成别的动态函数
                  t.expressionStatement(
                    t.callExpression(
                      t.memberExpression(
                        t.identifier("console"),
                        t.identifier("log"),
                        false,
                      ),
                      [t.stringLiteral("seed some "), t.identifier("name")],
                    ),
                  ),
                ],
                [],
              ),
              false,
            ),
          ]),
          [
            path.node.init, // 旧箭头函数节点
          ],
        );

        // 把旧的节点替换成新 节点
        path.get("init").replaceWith(newNode)
      },
    },
  };
};
