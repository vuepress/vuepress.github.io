---
sidebarDepth: 3
---

# vuepress-plugin-serve <GitHubLink repo="vuepress/vuepress-plugin-serve"/>

`vuepress-plugin-serve` 是一个在本地构建静态服务器的 VuePress 插件。

## 用法

### 全局安装

```bash
npm install -g vuepress-plugin-serve
# 或者
yarn global add vuepress-plugin-serve
```

### 局部安装

```bash
npm install vuepress-plugin-serve
# 或者
yarn add vuepress-plugin-serve
```

### 添加到 `config.js`

```js
module.exports = {
  plugins: [
    ['serve', {
      post: 1234,
      staticOptions: {
        dotfiles: 'allow',
      },
    }],
  ]
}
```
或者
```js
module.exports = {
  plugins: {
    serve: {
      beforeServer(app, server) {
        app.get('/path/to/my/custom', function(req, res) {
          res.json({ custom: 'response' })
        })
      },
    },
  }
}
```

## CLI

使用了这个插件以后，VuePress 会新增一个 `serve` 命令。这个命令会使用已经生成的文件来构建服务器。它拥有以下的选项：

### --build

在构建服务器前先执行一轮 `vuepress build`。

### --open

当服务端准备就绪时自动打开浏览器。

### --host `<host>`

参见[host](#host)。

### --port `<port>`

参见[port](#port)。

## 配置

### commandName

- **类型:** `string`
- **默认值:** `'serve'`

vuepress-plugin-serve 会增加一个 vuepress 命令，这个选项可用于自定义命令名称。

### host

- **类型:** `string`
- **默认值:** `'localhost'`

指定服务器的主机名。

### port

- **类型:** `number`
- **默认值:** `8080`

指定服务器监听的端口。

### notFoundPath

- **类型:** `string`
- **默认值:** `'404.html'`

用来存放 404 页面的地址。

### staticOptions

- **类型:** `object`
- **默认值:** `{}`

提供给 [serve-static](https://github.com/expressjs/serve-static#servestaticroot-options) 的选项。

### beforeServer

- **类型:** `(app, server) => void`
- **默认值:** `undefined`

在服务器接受客户端信息之前执行。类似于 VuePress 的 [beforeDevServer](https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#beforedevserver) 选项。

### afterServer

- **类型:** `async (app, server) => void`
- **默认值:** `undefined`

在服务器接受客户端信息之后执行。类似于 VuePress 的 [afterDevServer](https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#afterdevserver) 选项。
