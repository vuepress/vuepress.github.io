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


## Introduce
&#160;&#160;&#160;&#160;**VuePress集成Live2D看板娘 Live2D plugin for VuePress.**
- [vuepress-plugin-helper-live2d](https://github.com/JoeyBling/vuepress-plugin-helper-live2d) Is for [VuePress](https://v1.vuepress.vuejs.org/zh/) `1.0.0+`Make the plugin.

## Preview

> **Preview ➡️ [https://zhousiwei.gitee.io/ibooks](https://zhousiwei.gitee.io/ibooks)**

## Recommend a VuePress theme
> **A simple and elegant theme for VuePress. ➡️ [https://github.com/JoeyBling/vuepress-theme-yilia-plus](https://github.com/JoeyBling/vuepress-theme-yilia-plus)**

## Screenshots

![Screenshots](https://github.com/JoeyBling/vuepress-plugin-helper-live2d/raw/master/examples/images/web_mini.png)

## Installation

```bash
yarn add vuepress-plugin-helper-live2d
# or
npm install vuepress-plugin-helper-live2d --save
```

------------

## Begin to use

### Import the plug-in

Introduced in the configuration file `vuepress-plugin-helper-live2d`

> See [official docs](https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html)。

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-helper-live2d',
  ],
}
```

### Plugin config

```javascript
module.exports = {
  plugins: [
    [
      'vuepress-plugin-helper-live2d', {
        live2d: {
          // Whether to enable (set to false if off)(default: true)
          enable: true,
          // The model name(default: hibiki)>>>Please refer to:
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "right", // Display position：left/right(default: 'right')
            width: 135, // Width of model(default: 135)
            height: 300, // Height of model(default: 300)
            hOffset: 65, //  Horizontal shift(default: 65)
            vOffset: 0, //  Vertical migration(default: 0)
          },
          mobile: {
            show: false // Whether it is displayed on the mobile device(default: false)
          },
          react: {
            opacity: 0.8 // Model transparency(default: 0.8)
          }
        }
      }
    ]
  ]
}
```