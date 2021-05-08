# 创建节点

1. 通过 template 的方式来创建，相关的变量还是需要 babel type 创建对应的 node，还不够灵活。
    1. 声明模板代码字符串
    2. 通过 template 函数 与模板字符串生成 builder 函数
    3. 通过 builder 函数生成 ast

    详细查看 [create_node_by_template.js](./create_node_by_template.js)
2. 通过 辅助网站来创建，右键拷贝，然后传入对应 JavaScript 变量。
    1. 在辅助网站 https://lihautan.com/babel-ast-explorer 输入对应代码
    2. 右键复制 babel type node 生成代码
    3. 声明对应的变量，然后替换到 babel type 对应node 值，注意，类型要一致

    详细查看 [create_node_by_help_website.js](./create_node_by_help_website.js)
3. 纯手动 babel type 编写（不推荐）

> 建议 template 与 辅助网站结合的方式来满足自己需要的场景。

## usage

在项目的根目录运行

```shell
node example/04_create_node/create_node_by_template.js
```

通过 辅助网站生成例子：

```shell
node example/04_create_node/create_node_by_help_website.js
```

输出

```
const a = 1;
const b = 2;
const c = "123";
```
