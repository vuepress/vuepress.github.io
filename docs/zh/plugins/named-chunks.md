---
sidebarDepth: 3
---

# vuepress-plugin-named-chunks <GitHubLink repo="vuepress/vuepress-plugin-named-chunks"/>

VuePress 使用 [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports) 来加载页面组件和布局组件。每一个组件都会变成一个独立的模块，但它们的名字都是自动生成的，不利于后续追踪。`vuepress-plugin-named-chunks` 是一个用于生成命名模块的 VuePress 插件。

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-named-chunks
# 或者
yarn global add vuepress-plugin-named-chunks
```

### 局部安装

```bash
npm install vuepress-plugin-named-chunks
# 或者
yarn add vuepress-plugin-named-chunks
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    'named-chunks',
  ],
}
```
或者
```js
module.exports = {
  plugins: {
    'named-chunks': {
      pageChunkName: page => 'page' + page.key.slice(1),
      layoutChunkName: layout => 'layout-' + layout.componentName,
    },
  }
}
```

## API

这个插件将会植入在 [context API](https://v1.vuepress.vuejs.org/zh/plugin/context-api.html) 中注入一些属性。

### 页面组件的模块名称

1. `context.pages` 是由 `Page` 对象构成的数组。
2. `page._chunkName` 是对应的页面组件的模块名称。

### 布局组件的模块名称

1. `context.themeAPI.layoutComponentMap` 是由 `LayoutComponent` 对象构成的键值对。
2. `layout.chunkName` 是对应的布局组件的模块名称。

## 配置

### pageChunkName

- **类型:** `((page: Page) => string) | false`
- **默认值:** `({ key }) => 'page' + key.slice(1)`

用于从 `Page` 对象生成模块名称的函数。

### layoutChunkName

- **类型:** `((layout: LayoutComponent) => string) | false`
- **默认值:** `false`

用于从 `LayoutComponent` 对象生成模块名称的函数。
