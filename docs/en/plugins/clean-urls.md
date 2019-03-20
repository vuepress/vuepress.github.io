---
sidebarDepth: 3
---

# vuepress-plugin-clean-urls <GitHubLink repo="vuepress/vuepress-plugin-clean-urls"/>

`vuepress-plugin-clean-urls` is a plugin that provides support for clean urls.

::: warning
This plugin will always work on your dev server, but VuePress **does not have the right** to modify server identification. If you want your URLs to follow a certain pattern (e.g. `/routing` instead of `/routing.html` or `routing/`), you should make sure that your server would treat it as an HTML. This means that you may need to configure your server specifically.

**References:**

- For Netify users: [https://www.netlify.com/docs/redirects/#trailing-slash](https://www.netlify.com/docs/redirects/#trailing-slash).
- For Surge users: [https://surge.sh/help/using-clean-urls-automatically](https://surge.sh/help/using-clean-urls-automatically).
:::

## Usage

### Global Installation

```bash
npm install -g vuepress-plugin-clean-urls
# OR
yarn global add vuepress-plugin-clean-urls
```

### Local Installation

```bash
npm install vuepress-plugin-clean-urls
# OR
yarn add vuepress-plugin-clean-urls
```

### Add to `config.js`

```js
module.exports = {
  plugins: [
    'clean-urls',
  ]
}
```
or
```js
module.exports = {
  plugins: {
    'clean-urls': {
      normalSuffix: '',
      indexSuffix: '',
    },
  }
}
```

## Configurations

### normalSuffix

- **type:** `string`
- **default:** `'/'`

The suffix for normal pages. For example, `foo/bar.md` will become:

- `foo/bar.html` by default (without this plugin)
- `foo/bar/` (with `normalSuffix` set to `'/'`)
- `foo/bar` (with `normalSuffix` set to `''`)

### indexSuffix

- **type:** `string`
- **default:** `'/'`

The suffix for index pages. For example, `foo/index.md` will become:

- `foo/` by default (without this plugin)
- `foo` (with `indexSuffix` set to `''`)
- `foo/index.html` (with `indexSuffix` set to `'/index.html'`)

::: tip
An index page is a page with a file name of `index.md` or `readme.md` (case insensitive).
:::

### notFoundPath

- **type:** `string`
- **default:** `'/404.html'`

URL for "404 not found" page.

