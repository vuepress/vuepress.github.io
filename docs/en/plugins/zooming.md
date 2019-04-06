---
sidebarDepth: 3
---

# vuepress-plugin-zooming <GitHubLink repo="vuepress/vuepress-plugin-zooming"/>

Use [zooming](https://github.com/kingdido999/zooming) in your VuePress site.

This plugin will make your images zoomable.

## Installation

```sh
npm install vuepress-plugin-zooming
```

## Usage

### Use this plugin

Add `vuepress-plugin-zooming` in your config file.

> See [official docs](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)

```js
module.exports = {
  plugins: [
    'vuepress-plugin-zooming',
  ],
}
```

### Plugin config

Set the config of this plugin:

> See the [docs of zooming](https://desmonding.me/zooming/docs/#/configuration?id=options) for all available `options`.

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: '.my-wrapper .my-img',

      // make imgaes zoomable with delay after entering a page
      // default: 500
      delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
```

### Advanced usage

Update zoomable images manually in your components:

```js
// SomeComponent.vue
export default {
  methods: {
    updateImages () {
      // do something to update images in this page
      this.$nextTick(() => {
        // update zooming immediately
        this.$vuepress.zooming.update() // with default selector
        this.$vuepress.zooming.update('.new-images') // with custom selector

        // update zooming with delay
        this.$vuepress.zooming.updateDelay() // with default selector and delay
        this.$vuepress.zooming.updateDelay('.new-images') // with custom selector and default delay
        this.$vuepress.zooming.updateDelay('.new-images', 1000) // with custom selector and delay
      })
    },
  },
}
```

Get the `Zooming` instance directly in your components:

> See the [docs of zooming](https://desmonding.me/zooming/docs/#/api-reference) for all available methods.

```js
// SomeComponent.vue
export default {
  methods: {
    openImages () {
      // get the Zooming instance
      const zooming = this.$vuepress.zooming.instance

      // call the instance methods
      zooming.open(img)
    },
  },
}
```
