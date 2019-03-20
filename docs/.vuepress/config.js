const ecosystem = require('./ecosystem')

module.exports = ({ isProd }) => ({
  plugins: [
    ['@vuepress/medium-zoom', {
      selector: '.content img:not(.no-medium-zoom)',
    }],
    ['@vuepress/back-to-top'],
    ['clean-urls', {
      normalSuffix: '/',
    }],
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['git-log'],
    ['mathjax', {
      macros: {
        '\\Z': '\\mathbb{Z}',
      },
    }],
    ['serve'],
    ['redirect', {
      locales: true,
    }],
  ],

  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'VuePress Community',
      description: 'Community supported ecosystem for VuePress',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress 社区',
      description: '社区维护的 VuePress 生态系统',
    },
  },
  
  themeConfig: {
    repo: 'vuepress/vuepress.github.io',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
      },
    },
    sidebar: {
      '/en/': getSidebar('Plugins'),
      '/zh/': getSidebar('插件'),
    },
  },

  evergreen: !isProd,
})

const getSidebar = (plugins, themes, others) => [{
  title: plugins,
  collapsable: false,
  children: ecosystem.plugins.map(name => `plugins/${name}`),
}]
