# babel 插件执行顺序

babel 遍历 ast 是采用深度优先遍历，大白话就是，从上往下执行，执行完一个函数再到另外一个函数

## usage

在项目的根目录运行

```shell
node example/01_sequence/index.js
```

控制台会打印出各 Node 执行时触发的书序

```txt
Program
ClassDeclaration
VariableDeclaration func1a
VariableDeclaration func1b
IfStatement func1a === func1b
ExpressionStatement
ExpressionStatement
VariableDeclaration func2a
VariableDeclaration func2b
VariableDeclaration func2c
ExpressionStatement
VariableDeclaration t
ExpressionStatement
ExpressionStatement
done
```
