# babel-tutorial

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


browerlist 说明：

```js
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        // 访问网站：http://browserl.ist/ 输入条件，查看匹配结果
        // 条件1：返回数据按从右边到左算，首先满足 not ie <= 8，表示 排除ie8及以下办法。
        // 条件2：返回是数据过滤是否为 最后3个版本，然后针对 ie8 进行排除。
        // 条件3：
        "browsers": ["> 0.5%", "last 3 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```
