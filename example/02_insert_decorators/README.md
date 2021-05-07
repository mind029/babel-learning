# demo2

插入对应的装饰器包，已经对应的方法

## usage

在项目的根目录运行

```shell
node example/02_insert_decorators/index.js
```

控制台会打印出，插入了包和给类方法加入了装饰器

```js
import { logs } from "@lx-frontend/decorator-helps";

class Test {
  @logs
  hello() {
    console.log('hello');
  }

}

```
