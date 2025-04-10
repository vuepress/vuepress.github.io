import{_ as c,c as u,a as o,e as i,b as e,w as n,d as l,r as d,o as m}from"./app-Co8nLnwj.js";const v={};function b(h,s){const t=d("CodeTabs"),p=d("RouteLink");return m(),u("div",null,[s[38]||(s[38]=o('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1><div class="hint-container warning"><p class="hint-container-title">注意</p><p>VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 <a href="https://github.com/vuepress/core/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">更新日志</a>。</p></div><h2 id="在线试一试" tabindex="-1"><a class="header-anchor" href="#在线试一试"><span>在线试一试</span></a></h2><p>你可以通过 <a href="https://stackblitz.com/fork/vuepress" target="_blank" rel="noopener noreferrer">StackBlitz</a> 在你的浏览器里直接使用 VuePress 。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境"><span>依赖环境</span></a></h3><ul><li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js v18.19.0+</a></li><li>包管理器，如 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a>、<a href="https://classic.yarnpkg.com/en/" target="_blank" rel="noopener noreferrer">yarn</a>、<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm</a> 等。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>使用 <a href="https://pnpm.io/zh/" target="_blank" rel="noopener noreferrer">pnpm</a> 时，你需要安装 <code>vue</code> 作为 peer-dependencies 。</li><li>使用 <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">yarn 2+</a> 时，你需要在 <a href="https://yarnpkg.com/configuration/yarnrc#nodeLinker" target="_blank" rel="noopener noreferrer"><code>.yarnrc.yml</code></a> 文件中设置 <code>nodeLinker: &#39;node-modules&#39;</code> 。</li></ul></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h3><h4 id="通过命令行创建" tabindex="-1"><a class="header-anchor" href="#通过命令行创建"><span>通过命令行创建</span></a></h4><p>你可以通过 <a href="https://www.npmjs.com/package/create-vuepress" target="_blank" rel="noopener noreferrer">create-vuepress</a> 直接创建项目模板。</p>',11)),i(t,{id:"55",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:r})=>s[0]||(s[0]=[l("pnpm")])),title1:n(({value:a,isActive:r})=>s[1]||(s[1]=[l("yarn")])),title2:n(({value:a,isActive:r})=>s[2]||(s[2]=[l("npm")])),tab0:n(({value:a,isActive:r})=>s[3]||(s[3]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," create"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:n(({value:a,isActive:r})=>s[4]||(s[4]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," create"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab2:n(({value:a,isActive:r})=>s[5]||(s[5]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," init"),e("span",{style:{color:"#CE9178"}}," vuepress"),e("span",{style:{color:"#CE9178"}}," vuepress-starter")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),s[39]||(s[39]=o(`<h4 id="手动创建" tabindex="-1"><a class="header-anchor" href="#手动创建"><span>手动创建</span></a></h4><p>这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。</p><ul><li>创建并进入一个新目录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> vuepress-starter</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#CE9178;"> vuepress-starter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化项目</li></ul>`,5)),i(t,{id:"87",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:r})=>s[6]||(s[6]=[l("pnpm")])),title1:n(({value:a,isActive:r})=>s[7]||(s[7]=[l("yarn")])),title2:n(({value:a,isActive:r})=>s[8]||(s[8]=[l("npm")])),tab0:n(({value:a,isActive:r})=>s[9]||(s[9]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:n(({value:a,isActive:r})=>s[10]||(s[10]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab2:n(({value:a,isActive:r})=>s[11]||(s[11]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"git"),e("span",{style:{color:"#CE9178"}}," init")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," init")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[40]||(s[40]=e("ul",null,[e("li",null,"安装 VuePress")],-1)),i(t,{id:"105",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:r})=>s[12]||(s[12]=[l("pnpm")])),title1:n(({value:a,isActive:r})=>s[13]||(s[13]=[l("yarn")])),title2:n(({value:a,isActive:r})=>s[14]||(s[14]=[l("npm")])),tab0:n(({value:a,isActive:r})=>s[15]||(s[15]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vuepress 和 vue")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next"),e("span",{style:{color:"#CE9178"}}," vue")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装打包工具和主题")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab1:n(({value:a,isActive:r})=>s[16]||(s[16]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vuepress")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装打包工具和主题")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," add"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),tab2:n(({value:a,isActive:r})=>s[17]||(s[17]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装 vuepress")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," vuepress@next")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A9955"}},"# 安装打包工具和主题")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," install"),e("span",{style:{color:"#569CD6"}}," -D"),e("span",{style:{color:"#CE9178"}}," @vuepress/bundler-vite@next"),e("span",{style:{color:"#CE9178"}}," @vuepress/theme-default@next")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1)])),_:1}),s[41]||(s[41]=o(`<ul><li>创建 <code>docs</code> 目录和 <code>docs/.vuepress</code> 目录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> docs</span></span>
<span class="line"><span style="color:#DCDCAA;">mkdir</span><span style="color:#CE9178;"> docs/.vuepress</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 VuePress 配置文件 <code>docs/.vuepress/config.js</code></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  bundler:</span><span style="color:#DCDCAA;"> viteBundler</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建你的第一篇文档</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#CE9178;"> &#39;# Hello VuePress&#39;</span><span style="color:#D4D4D4;"> &gt; </span><span style="color:#CE9178;">docs/README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><p>创建完成后，你项目的目录结构应该是这样的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vuepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>docs</code> 目录是你放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。</p><p><code>docs/.vuepress</code> 目录，即源文件目录下的 <code>.vuepress</code> 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 <code>.gitignore</code> 文件中。</p><details class="hint-container details"><summary>示例 <code>.gitignore</code> 文件</summary><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span># VuePress 默认临时文件目录</span></span>
<span class="line"><span>.vuepress/.temp</span></span>
<span class="line"><span># VuePress 默认缓存目录</span></span>
<span class="line"><span>.vuepress/.cache</span></span>
<span class="line"><span># VuePress 默认构建生成的静态文件目录</span></span>
<span class="line"><span>.vuepress/dist</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="开始使用-vuepress" tabindex="-1"><a class="header-anchor" href="#开始使用-vuepress"><span>开始使用 VuePress</span></a></h2><h3 id="启动开发服务器" tabindex="-1"><a class="header-anchor" href="#启动开发服务器"><span>启动开发服务器</span></a></h3><p>你可以在 <code>package.json</code> 中添加一些 <a href="https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts" target="_blank" rel="noopener noreferrer">scripts</a> ：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#9CDCFE;">  &quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;docs:dev&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress dev docs&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    &quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>docs:dev</code> 脚本可以启动开发服务器:</p>`,17)),i(t,{id:"169",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:r})=>s[18]||(s[18]=[l("pnpm")])),title1:n(({value:a,isActive:r})=>s[19]||(s[19]=[l("yarn")])),title2:n(({value:a,isActive:r})=>s[20]||(s[20]=[l("npm")])),tab0:n(({value:a,isActive:r})=>s[21]||(s[21]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:n(({value:a,isActive:r})=>s[22]||(s[22]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab2:n(({value:a,isActive:r})=>s[23]||(s[23]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," run"),e("span",{style:{color:"#CE9178"}}," docs:dev")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),s[42]||(s[42]=e("p",null,[l("VuePress 会在 "),e("a",{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},"http://localhost:8080"),l(" 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。")],-1)),s[43]||(s[43]=e("h3",{id:"构建你的网站",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#构建你的网站"},[e("span",null,"构建你的网站")])],-1)),s[44]||(s[44]=e("p",null,[l("运行 "),e("code",null,"docs:build"),l(" 脚本可以构建你的网站：")],-1)),i(t,{id:"189",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],"tab-id":"shell"},{title0:n(({value:a,isActive:r})=>s[24]||(s[24]=[l("pnpm")])),title1:n(({value:a,isActive:r})=>s[25]||(s[25]=[l("yarn")])),title2:n(({value:a,isActive:r})=>s[26]||(s[26]=[l("npm")])),tab0:n(({value:a,isActive:r})=>s[27]||(s[27]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"pnpm"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab1:n(({value:a,isActive:r})=>s[28]||(s[28]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"yarn"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),tab2:n(({value:a,isActive:r})=>s[29]||(s[29]=[e("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash",style:{"background-color":"#1E1E1E",color:"#D4D4D4"}},[e("pre",{class:"shiki dark-plus vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#DCDCAA"}},"npm"),e("span",{style:{color:"#CE9178"}}," run"),e("span",{style:{color:"#CE9178"}}," docs:build")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1)])),_:1}),e("p",null,[s[31]||(s[31]=l("在 ")),s[32]||(s[32]=e("code",null,"docs/.vuepress/dist",-1)),s[33]||(s[33]=l(" 目录中可以找到构建生成的静态文件。你可以查看 ")),i(p,{to:"/zh/guide/deployment.html"},{default:n(()=>s[30]||(s[30]=[l("部署")])),_:1}),s[34]||(s[34]=l(" 来了解如何部署你的网站。"))]),s[45]||(s[45]=e("h2",{id:"进一步了解-vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#进一步了解-vuepress"},[e("span",null,"进一步了解 VuePress")])],-1)),s[46]||(s[46]=e("p",null,"现在，你应该已经有了一个简单可用的 VuePress 网站。但你可能仍需要阅读后续的指南来更加了解 VuePress 。",-1)),e("p",null,[s[36]||(s[36]=l("下一步，前往 ")),i(p,{to:"/zh/guide/configuration.html"},{default:n(()=>s[35]||(s[35]=[l("配置")])),_:1}),s[37]||(s[37]=l(" 了解更多配置文件相关的内容。"))])])}const g=c(v,[["render",b]]),D=JSON.parse('{"path":"/zh/guide/getting-started.html","title":"快速上手","lang":"zh-CN","frontmatter":{"description":"快速上手 注意 VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 更新日志。 在线试一试 你可以通过 StackBlitz 在你的浏览器里...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速上手\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T11:25:41.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/zh/guide/getting-started.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"快速上手"}],["meta",{"property":"og:description","content":"快速上手 注意 VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 更新日志。 在线试一试 你可以通过 StackBlitz 在你的浏览器里..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T11:25:41.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T11:25:41.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress.vuejs.org/guide/getting-started.html"}]]},"headers":[{"level":2,"title":"在线试一试","slug":"在线试一试","link":"#在线试一试","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"依赖环境","slug":"依赖环境","link":"#依赖环境","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]}]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"开始使用 VuePress","slug":"开始使用-vuepress","link":"#开始使用-vuepress","children":[{"level":3,"title":"启动开发服务器","slug":"启动开发服务器","link":"#启动开发服务器","children":[]},{"level":3,"title":"构建你的网站","slug":"构建你的网站","link":"#构建你的网站","children":[]}]},{"level":2,"title":"进一步了解 VuePress","slug":"进一步了解-vuepress","link":"#进一步了解-vuepress","children":[]}],"git":{"updatedTime":1727090741000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":1},{"name":"Xinyu Liu","username":"","email":"meteor.lxy@foxmail.com","commits":1},{"name":"Mister-Hope","username":"Mister-Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mister-Hope"}],"changelog":[{"hash":"08b7485f2afb648cac9ffd6cc5f5aed4581dbe8b","time":1727090741000,"email":"mister-hope@outlook.com","author":"Mister-Hope","message":"docs: support latest theme (#39)"},{"hash":"73ae4b5ebe812c23db637c2a9eac777bb3c1ec77","time":1725091279000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update required node version"},{"hash":"ed517002e66cf216d64dc41aecd1983982720047","time":1706100072000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: add create-vuepress to getting-started (#6)","coAuthors":[{"name":"Xinyu Liu","email":"meteor.lxy@foxmail.com"}]},{"hash":"8397875674087984bc3b7efcf39cdb54077ba363","time":1703824718000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update core repository url"},{"hash":"d65303182f5d8861d9001bfd7681407a3900b050","time":1703740814000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update imports usage"},{"hash":"381d6de86c873249825e4ba1defc93f807bec5c1","time":1703738388000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update bundler and theme guide, improve getting-started guide"},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"zh/guide/getting-started.md"}');export{g as comp,D as data};
