---
sidebarDepth: 3
---

# vuepress-plugin-zooming <GitHubLink repo="vuepress/vuepress-plugin-zooming"/>

在你的 VuePress 站点中使用 [zooming](https://github.com/kingdido999/zooming)。

这个插件将会使你的图片支持点击缩放。

## 安装

```sh
npm install vuepress-plugin-zooming
```

## 使用

### 引入该插件

在配置文件中引入 `vuepress-plugin-zooming`。

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

```js
module.exports = {
  plugins: [
    'vuepress-plugin-zooming',
  ],
}
```

### 插件配置

设置该插件的配置选项：

> 前往 [zooming 的文档](https://desmonding.me/zooming/docs/#/configuration?id=options) 查看所有支持的 `options`。

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-zooming', {
      // 支持点击缩放的图片元素的选择器
      // 默认值： '.content img'
      selector: '.my-wrapper .my-img',

      // 进入一个页面后，经过一定延迟后使页面中的图片支持缩放
      // 默认值： 500
      delay: 1000,

      // zooming 的 options
      // 默认值： {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
```

### 高级用法

在组件中手动更新支持缩放的图片：

```js
// SomeComponent.vue
export default {
  methods: {
    updateImages () {
      // 通过某些操作更新当前页面的图片
      this.$nextTick(() => {
        // 立即更新 zooming
        this.$vuepress.zooming.update() // 使用默认的 selector
        this.$vuepress.zooming.update('.new-images') // 使用自定义的 selector

        // 在一定延迟后更新 zooming
        this.$vuepress.zooming.updateDelay() // 使用默认的 selector 和 delay
        this.$vuepress.zooming.updateDelay('.new-images') // 使用自定义的 selector 和默认的 delay
        this.$vuepress.zooming.updateDelay('.new-images', 1000) // 使用自定义的 selector 和 delay
      })
    },
  },
}
```

在你的组件中直接获取 `Zooming` 实例：

> 前往 [zooming 的文档](https://desmonding.me/zooming/docs/#/api-reference) 查看所有支持的方法。

```js
// SomeComponent.vue
export default {
  methods: {
    openImages () {
      // 获取 Zooming 实例
      const zooming = this.$vuepress.zooming.instance

      // 调用实例方法
      zooming.open()
    },
  },
}
```
