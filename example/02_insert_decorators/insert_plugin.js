/**
 * 判断是否包含类节点
 * @param {*} nodes Program.body
 * @param {*} t babel types 对象
 * @returns true/false
 */
const isHasClassDeclaration = (nodes, t) => {
  let isHas = false;
  for (const node of nodes) {
    if (t.isClassDeclaration(node)) {
      isHas = true;
      break;
    }
  }

  return isHas;
};

/**
 * 获取当前模块已经 import 进来的模块名称数组
 * @param {*} nodes
 * @param {*} t
 * @returns string[]
 */
const getCurrentImportPackages = (nodes, t) => {
  const pkgs = [];
  for (const itemNode of nodes) {
    if (t.isImportDeclaration(itemNode)) {
      pkgs.push(itemNode.source.value);
    }
  }
  return pkgs;
};

module.exports = function ({ types: t }) {
  return {
    name: "insert-import", // not required
    visitor: {
      // 插入 import
      Program(path) {
        // 如果没有类节点，则无需插入模块了
        if (!isHasClassDeclaration(path.node.body, t)) return;

        const importPackages = getCurrentImportPackages(path.node.body, t);
        const importPackageName = "@lx-frontend/decorator-helps";

        // 判断是否导入过包，避免重复导入
        if (importPackages.includes(importPackageName)) return

        // 创建 importNode 节点
        const importIdentifierName = "logs";
        const importDeclarationNode = t.importDeclaration(
          [
            t.importSpecifier(
              t.identifier(importIdentifierName),
              t.identifier(importIdentifierName),
            ),
          ],
          t.stringLiteral(importPackageName),
        );

        // 创建好节点，插入到 最前面
        path.unshiftContainer("body", importDeclarationNode);
      },
      // 插入 装饰器
      ClassMethod(path) {
        // 如果没有装饰器节点，需要提前创建，否则 pushContainer 无法插入
        if (!path.node.decorators) {
          path.node.decorators = [];
        }

        const currentDecorators = [];
        for (const itemNode of path.node.decorators) {
          // 首先是 import
          if (t.isDecorator(itemNode)) {
            currentDecorators.push(
              itemNode.expression.name || itemNode.expression.callee.name,
            );
          }
        }

        const insertDecoratorName = "logs";
        // 判断当前是否已经存在对应名称装饰器，如果不存在，才插入
        if (!currentDecorators.includes(insertDecoratorName)) {
          path.pushContainer(
            "decorators",
            t.decorator(t.identifier(insertDecoratorName)),
          );
        }
      },
    },
  };
};
