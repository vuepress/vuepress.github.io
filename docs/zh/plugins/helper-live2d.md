---
sidebarDepth: 3
---

# vuepress-plugin-helper-live2d <GitHubLink repo="JoeyBling/vuepress-plugin-helper-live2d"/>

```
 _          _                      _ _           ____     _
| |__   ___| |_ __   ___ _ __     | (_)_   _____|___ \ __| |
| '_ \ / _ \ | '_ \ / _ \ '__|____| | \ \ / / _ \ __) / _` |
| | | |  __/ | |_) |  __/ | |_____| | |\ V /  __// __/ (_| |
|_| |_|\___|_| .__/ \___|_|       |_|_| \_/ \___|_____\__,_|
             |_|
```


## 介绍
&#160;&#160;&#160;&#160;**VuePress集成Live2D看板娘 Live2D plugin for VuePress.**
- [vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d) 是为 [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`制作的插件。

## 线上预览

> **预览 ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## 推荐一款VuePress主题
> **一款简洁优雅的VuePress主题 ➡️ [https://github.com/JoeyBling/vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)**

## 效果截图

![截图](https://github.com/JoeyBling/vuepress-plugin-helper-live2d/raw/master/examples/images/web_mini.png)

## 安装

```bash
yarn add vuepress-plugin-helper-live2d
# or
npm install vuepress-plugin-helper-live2d --save
```

------------

## 开始使用

### 引入该插件

在配置文件中引入 `vuepress-plugin-helper-live2d`

> 查看 [官方文档](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-helper-live2d',
  ],
}
```

### 插件配置

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
```