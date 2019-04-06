---
sidebarDepth: 3
---

# vuepress-plugin-medium-zoom <GitHubLink repo="vuepress/vuepress-plugin-medium-zoom"/>

Use [medium-zoom](https://github.com/francoischalifour/medium-zoom) in your VuePress site.

This plugin will make your images zoomable.

## Installation

```sh
npm install vuepress-plugin-medium-zoom
```

## Usage

### Use this plugin

Add `vuepress-plugin-medium-zoom` in your config file.

> See [official docs](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)

```js
module.exports = {
  plugins: [
    'vuepress-plugin-medium-zoom',
  ],
}
```

### Plugin config

Set the config of this plugin:

> See the [docs of medium-zoom](https://github.com/francoischalifour/medium-zoom#options) for all available `options`.

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-medium-zoom', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: '.my-wrapper .my-img',

      // make imgaes zoomable with delay after entering a page
      // default: 500
      delay: 1000,

      // options of medium-zoom
      // default: {}
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
      },
    }],
  ],
}
```

Change the default `z-index` of the `medium-zoom-overlay` in `palette.styl`:

> See [official docs](https://v1.vuepress.vuejs.org/config/#palette-styl)

```stylus
// default: 100
$mediumZoomZIndex = 10000
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
        // update mediumZoom immediately
        this.$vuepress.mediumZoom.update() // with default selector
        this.$vuepress.mediumZoom.update('.new-images') // with custom selector

        // update mediumZoom with delay
        this.$vuepress.mediumZoom.updateDelay() // with default selector and delay
        this.$vuepress.mediumZoom.updateDelay('.new-images') // with custom selector and default delay
        this.$vuepress.mediumZoom.updateDelay('.new-images', 1000) // with custom selector and delay
      })
    },
  },
}
```

Get the `mediumZoom` instance directly in your components:

> See the [docs of medium-zoom](https://github.com/francoischalifour/medium-zoom#methods) for all available methods.

```js
// SomeComponent.vue
export default {
  methods: {
    openImages () {
      // get the mediumZoom instance
      const zoom = this.$vuepress.mediumZoom.instance

      // call the instance methods
      zoom.open()
    },
  },
}
```
