# demo3

无侵入埋点例子：通过 babel 对源函数包裹一层 before/after 的函数，这样原来数执行了，钩子函数对应的 before/after 也会执行

## 用途

比如 react hook 这里函数，已经项目大量工具函数，就可以加上钩子函数，做各类埋点场景，比如

1. 数据埋点
2. 性能捕获埋点

## usage

在项目的根目录运行

```shell
node example/03_wrap_function/index.js
```

输出代码会给输入函数包裹上 after 操作

```js
const {
  after
} = require("trackpoint-tools");

const func1 = after(name => {
  console.log("seed some ", name);
})(name => {
  console.log("func1", name);
});

func1(1);
```

然后执行

```shell
node example/03_wrap_function/outputCode.js
```

**结果**

```shell
func1 1
seed some  1
```
