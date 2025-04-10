import{_ as t,c as r,b as n,a as o,d as l,e as a,w as p,r as i,o as c}from"./app-Co8nLnwj.js";const D={};function d(y,s){const e=i("RouteLink");return c(),r("div",null,[s[20]||(s[20]=n("h1",{id:"插件-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插件-api"},[n("span",null,"插件 API")])],-1)),n("p",null,[s[1]||(s[1]=l("你可以查看 ")),a(e,{to:"/zh/reference/node-api.html"},{default:p(()=>s[0]||(s[0]=[l("Node API")])),_:1}),s[2]||(s[2]=l(" 来了解如何使用插件 Hooks 中的 VuePress App 实例。"))]),s[21]||(s[21]=o('<h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览"><span>概览</span></a></h2><p>插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理：</p><ul><li><a href="#name">name</a></li><li><a href="#multiple">multiple</a></li></ul><p>下列 Hooks 会在初始化 App 时处理：</p><ul><li><a href="#extendsmarkdownoptions">extendsMarkdownOptions</a></li><li><a href="#extendsmarkdown">extendsMarkdown</a></li><li><a href="#extendspageoptions">extendsPageOptions</a></li><li><a href="#extendspage">extendsPage</a></li><li><a href="#oninitialized">onInitialized</a></li></ul><p>下列 Hooks 会在准备文件时处理：</p><ul><li><a href="#clientconfigfile">clientConfigFile</a></li><li><a href="#onprepared">onPrepared</a></li></ul><p>下列 Hooks 会在 dev / build 时处理：</p><ul><li><a href="#extendsbundleroptions">extendsBundlerOptions</a></li><li><a href="#alias">alias</a></li><li><a href="#define">define</a></li><li><a href="#onwatched">onWatched</a></li><li><a href="#ongenerated">onGenerated</a></li></ul>',9)),n("blockquote",null,[n("p",null,[s[4]||(s[4]=l("查看 ")),a(e,{to:"/zh/advanced/architecture.html#%E6%A0%B8%E5%BF%83%E6%B5%81%E7%A8%8B%E4%B8%8E-hooks"},{default:p(()=>s[3]||(s[3]=[l("深入 > 架构 > 核心流程与 Hooks")])),_:1}),s[5]||(s[5]=l(" 来更好地理解该流程。"))])]),s[22]||(s[22]=o(`<h2 id="基础配置项" tabindex="-1"><a class="header-anchor" href="#基础配置项"><span>基础配置项</span></a></h2><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>插件的名称。</p><p>它会被用来识别插件，以避免多次使用同一个插件，因此应确保你的插件名称是独一无二的。</p><p>它应遵从如下命名约定：</p><ul><li>非 Scoped: <code>vuepress-plugin-foo</code></li><li>Scoped: <code>@org/vuepress-plugin-foo</code></li></ul></li><li><p>参考：</p><ul><li><a href="#multiple">插件 API &gt; multiple</a></li></ul></li></ul><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>插件是否能够被多次使用。</p><p>如果设置为 <code>false</code> ，当有相同名称的插件被使用时，先使用的会被后使用的替换掉。</p><p>如果设置为 <code>true</code> ，相同名称的插件可以被多次使用且不会被替换。</p></li><li><p>参考：</p><ul><li><a href="#name">插件 API &gt; name</a></li></ul></li></ul><h2 id="开发-hooks" tabindex="-1"><a class="header-anchor" href="#开发-hooks"><span>开发 Hooks</span></a></h2><h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>alias</span></a></h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义路径别名。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/alias&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clientconfigfile" tabindex="-1"><a class="header-anchor" href="#clientconfigfile"><span>clientConfigFile</span></a></h3><ul><li><p>类型： <code>string | ((app: App) =&gt; string | Promise&lt;string&gt;)</code></p></li><li><p>详情：</p><p>客户端配置文件路径。</p><p>该 Hook 接收文件绝对路径，或者一个返回路径的函数。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  clientConfigFile:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.js&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)),n("ul",null,[n("li",null,[s[8]||(s[8]=l("参考： ")),n("ul",null,[n("li",null,[a(e,{to:"/zh/reference/client-api.html#defineclientconfig"},{default:p(()=>s[6]||(s[6]=[l("客户端 API > defineClientConfig")])),_:1})]),n("li",null,[a(e,{to:"/zh/advanced/cookbook/usage-of-client-config.html"},{default:p(()=>s[7]||(s[7]=[l("深入 > Cookbook > 客户端配置的使用方法")])),_:1})])])])]),s[23]||(s[23]=o(`<h3 id="define" tabindex="-1"><a class="header-anchor" href="#define"><span>define</span></a></h3><ul><li><p>类型： <code>Record&lt;string, any&gt; | ((app: App, isServer: boolean) =&gt; Record&lt;string, any&gt;)</code></p></li><li><p>详情：</p><p>定义全局常量。</p><p>该 Hook 接收一个对象，或者一个返回对象的函数。</p><p>它可以被用于向客户端文件传递变量。注意这里的值都会自动被 <code>JSON.stringify()</code> 处理。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  define:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    __GLOBAL_BOOLEAN__:</span><span style="color:#569CD6;"> true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    __GLOBAL_STRING__:</span><span style="color:#CE9178;"> &#39;foobar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">    __GLOBAL_OBJECT__:</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">foo:</span><span style="color:#CE9178;"> &#39;bar&#39;</span><span style="color:#D4D4D4;"> },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendsbundleroptions" tabindex="-1"><a class="header-anchor" href="#extendsbundleroptions"><span>extendsBundlerOptions</span></a></h3><ul><li><p>类型： <code>(options: BundlerOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Bundler 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Bundler 配置项。</p><p>该 Hook 可以用于修改 Bundler 配置项。</p><p>你可以通过 <code>app.options.bundler.name</code> 判断用户当前使用的 Bundler。</p></li><li><p>示例：</p></li></ul><p>添加默认的 <a href="https://vuejs.org/api/application.html#app-config-compileroptions" target="_blank" rel="noopener noreferrer">app.compilerOptions.isCustomElement</a> 配置：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsBundlerOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // 修改 @vuepress/bundler-vite 的配置项</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> isCustomElement</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#9CDCFE;">        bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vuePluginOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">template</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#D4D4D4;">        (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">          if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#569CD6;"> true</span></span>
<span class="line"><span style="color:#C586C0;">          if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#569CD6;"> true</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // 修改 @vuepress/bundler-webpack 的配置项</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bundler</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;@vuepress/bundler-webpack&#39;</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> isCustomElement</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">isCustomElement</span></span>
<span class="line"><span style="color:#9CDCFE;">      bundlerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">compilerOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">        if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#D4D4D4;">?.(</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">)) </span><span style="color:#C586C0;">return</span><span style="color:#569CD6;"> true</span></span>
<span class="line"><span style="color:#C586C0;">        if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;my-custom-element&#39;</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span><span style="color:#569CD6;"> true</span></span>
<span class="line"><span style="color:#D4D4D4;">      }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),n("ul",null,[n("li",null,[s[11]||(s[11]=l("参考： ")),n("ul",null,[n("li",null,[a(e,{to:"/zh/reference/bundler/vite.html"},{default:p(()=>s[9]||(s[9]=[l("打包工具 > Vite")])),_:1})]),n("li",null,[a(e,{to:"/zh/reference/bundler/webpack.html"},{default:p(()=>s[10]||(s[10]=[l("打包工具 > Webpack")])),_:1})])])])]),s[24]||(s[24]=o(`<h3 id="extendsmarkdownoptions" tabindex="-1"><a class="header-anchor" href="#extendsmarkdownoptions"><span>extendsMarkdownOptions</span></a></h3><ul><li><p>类型： <code>(options: MarkdownOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Markdown 配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 Markdown 配置项。</p><p>该 Hook 可以用于修改 Markdown 配置项。</p></li><li><p>示例：</p></li></ul><p>修改默认提取的子标题层级：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsMarkdownOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> === </span><span style="color:#569CD6;">false</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#9CDCFE;">    markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;"> ??= {}</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;">) </span><span style="color:#C586C0;">return</span></span>
<span class="line"><span style="color:#9CDCFE;">    markdownOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;"> = [</span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">3</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">4</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">, </span><span style="color:#B5CEA8;">6</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),n("ul",null,[n("li",null,[s[13]||(s[13]=l("参考： ")),n("ul",null,[n("li",null,[a(e,{to:"/zh/reference/config.html#markdown"},{default:p(()=>s[12]||(s[12]=[l("配置 > markdown")])),_:1})])])])]),s[25]||(s[25]=o(`<h3 id="extendsmarkdown" tabindex="-1"><a class="header-anchor" href="#extendsmarkdown"><span>extendsMarkdown</span></a></h3><ul><li><p>类型： <code>(md: Markdown, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>Markdown 增强。</p><p>该 Hook 接收一个函数，在参数中会收到一个由 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 提供的 <code>Markdown</code> 实例。</p><p>该 Hook 可以用来添加额外的 markdown-it 插件、应用额外的自定义功能。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsMarkdown</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    md</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">use</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">plugin1</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#9CDCFE;">    md</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">linkify</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">set</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">fuzzyEmail:</span><span style="color:#569CD6;"> false</span><span style="color:#D4D4D4;"> })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extendspageoptions" tabindex="-1"><a class="header-anchor" href="#extendspageoptions"><span>extendsPageOptions</span></a></h3><ul><li><p>类型： <code>(options: PageOptions, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面配置项扩展。</p><p>该 Hook 接收一个函数，在参数中会收到 <code>createPage</code> 传入的配置项。</p><p>该 Hook 可以用于修改页面配置项。</p></li><li><p>示例：</p></li></ul><p>为 <code>_posts</code> 目录下的页面设置永久链接 Pattern ：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsPageOptions</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">filePath</span><span style="color:#D4D4D4;">?.</span><span style="color:#DCDCAA;">startsWith</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">source</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;_posts/&#39;</span><span style="color:#D4D4D4;">))) {</span></span>
<span class="line"><span style="color:#9CDCFE;">      pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> = </span><span style="color:#9CDCFE;">pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;"> ?? {}</span></span>
<span class="line"><span style="color:#9CDCFE;">      pageOptions</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">frontmatter</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">permalinkPattern</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;/:year/:month/:day/:slug.html&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)),n("ul",null,[n("li",null,[s[15]||(s[15]=l("参考： ")),n("ul",null,[n("li",null,[a(e,{to:"/zh/reference/node-api.html#createPage"},{default:p(()=>s[14]||(s[14]=[l("Node API > Page > createPage")])),_:1})])])])]),s[26]||(s[26]=o(`<h3 id="extendspage" tabindex="-1"><a class="header-anchor" href="#extendspage"><span>extendsPage</span></a></h3><ul><li><p>类型： <code>(page: Page, app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>页面扩展。</p><p>该 Hook 接收一个函数，在参数中会收到一个 <code>Page</code> 实例。</p><p>该 Hook 可以用来在 Page 对象上添加额外的属性，或修改现有的属性等。</p><p>值得一提的是，针对 <code>page.data</code> 和 <code>page.routeMeta</code> 的改动可以在客户端代码中使用。</p></li><li><p>示例：</p></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  extendsPage</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#9CDCFE;">    page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端组件中：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePageData</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> page</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePageData</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#9CDCFE;">    console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">value</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">bar</span><span style="color:#D4D4D4;">) </span><span style="color:#6A9955;">// bar</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),n("ul",null,[n("li",null,[s[19]||(s[19]=l("参考： ")),n("ul",null,[n("li",null,[a(e,{to:"/zh/reference/client-api.html#usepagedata"},{default:p(()=>s[16]||(s[16]=[l("客户端 API > usePageData")])),_:1})]),n("li",null,[a(e,{to:"/zh/reference/node-api.html#data"},{default:p(()=>s[17]||(s[17]=[l("Node API > Page 属性 > data")])),_:1})]),n("li",null,[a(e,{to:"/zh/reference/node-api.html#routemeta"},{default:p(()=>s[18]||(s[18]=[l("Node API > Page 属性 > routeMeta")])),_:1})])])])]),s[27]||(s[27]=o('<h2 id="生命周期-hooks" tabindex="-1"><a class="header-anchor" href="#生命周期-hooks"><span>生命周期 Hooks</span></a></h2><h3 id="oninitialized" tabindex="-1"><a class="header-anchor" href="#oninitialized"><span>onInitialized</span></a></h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 初始化后被立即调用。</p></li></ul><h3 id="onprepared" tabindex="-1"><a class="header-anchor" href="#onprepared"><span>onPrepared</span></a></h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成文件准备后被立即调用。</p></li></ul><h3 id="onwatched" tabindex="-1"><a class="header-anchor" href="#onwatched"><span>onWatched</span></a></h3><ul><li><p>类型： <code>(app: App, watchers: Closable[], restart: () =&gt; Promise&lt;void&gt;) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 启动开发服务器并开始监听文件修改后被调用。</p><p><code>watchers</code> 是一个文件监听器的数组。在修改配置文件导致重启 dev 命令时，这些监听器会被自动关闭。如果你在当前 Hook 中添加了新的监听器，你应该把它们也加入到这个数组中，确保在重启 dev 命令时它们能被正确关闭。</p><p><code>restart</code> 方法用来重启 dev 命令。调用该方法时， <code>watchers</code> 数组中的监听器也会被自动关闭。</p></li></ul><h3 id="ongenerated" tabindex="-1"><a class="header-anchor" href="#ongenerated"><span>onGenerated</span></a></h3><ul><li><p>类型： <code>(app: App) =&gt; void | Promise&lt;void&gt;</code></p></li><li><p>详情：</p><p>该 Hook 会在 VuePress App 完成静态文件生成后被立即调用。</p></li></ul>',9))])}const C=t(D,[["render",d]]),m=JSON.parse('{"path":"/zh/reference/plugin-api.html","title":"插件 API","lang":"zh-CN","frontmatter":{"description":"插件 API 你可以查看 来了解如何使用插件 Hooks 中的 VuePress App 实例。 概览 插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理： name multiple 下列 Hooks 会在初始化 App 时处理： extendsMarkdownOptions extendsMarkdown extendsPageOptio...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T15:46:43.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/zh/reference/plugin-api.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"插件 API"}],["meta",{"property":"og:description","content":"插件 API 你可以查看 来了解如何使用插件 Hooks 中的 VuePress App 实例。 概览 插件需要在初始化之前使用。基础配置项会在使用插件时立即被处理： name multiple 下列 Hooks 会在初始化 App 时处理： extendsMarkdownOptions extendsMarkdown extendsPageOptio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-06T15:46:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T15:46:43.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress.vuejs.org/reference/plugin-api.html"}]]},"headers":[{"level":2,"title":"概览","slug":"概览","link":"#概览","children":[]},{"level":2,"title":"基础配置项","slug":"基础配置项","link":"#基础配置项","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"multiple","slug":"multiple","link":"#multiple","children":[]}]},{"level":2,"title":"开发 Hooks","slug":"开发-hooks","link":"#开发-hooks","children":[{"level":3,"title":"alias","slug":"alias","link":"#alias","children":[]},{"level":3,"title":"clientConfigFile","slug":"clientconfigfile","link":"#clientconfigfile","children":[]},{"level":3,"title":"define","slug":"define","link":"#define","children":[]},{"level":3,"title":"extendsBundlerOptions","slug":"extendsbundleroptions","link":"#extendsbundleroptions","children":[]},{"level":3,"title":"extendsMarkdownOptions","slug":"extendsmarkdownoptions","link":"#extendsmarkdownoptions","children":[]},{"level":3,"title":"extendsMarkdown","slug":"extendsmarkdown","link":"#extendsmarkdown","children":[]},{"level":3,"title":"extendsPageOptions","slug":"extendspageoptions","link":"#extendspageoptions","children":[]},{"level":3,"title":"extendsPage","slug":"extendspage","link":"#extendspage","children":[]}]},{"level":2,"title":"生命周期 Hooks","slug":"生命周期-hooks","link":"#生命周期-hooks","children":[{"level":3,"title":"onInitialized","slug":"oninitialized","link":"#oninitialized","children":[]},{"level":3,"title":"onPrepared","slug":"onprepared","link":"#onprepared","children":[]},{"level":3,"title":"onWatched","slug":"onwatched","link":"#onwatched","children":[]},{"level":3,"title":"onGenerated","slug":"ongenerated","link":"#ongenerated","children":[]}]}],"git":{"updatedTime":1707234403000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":1},{"name":"Xinyu Liu","username":"","email":"meteor.lxy@foxmail.com","commits":1}],"changelog":[{"hash":"da95c8371e8b538d03aa20f53c472fc329929e97","time":1707234403000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: remove npm badges from core references"},{"hash":"67a46e5a932c787baab1b752519edca76898bd4f","time":1706899209000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: revert meta to routeMeta"},{"hash":"d2696f74e3745eb1c7a3436dfbbf50cb506965f0","time":1706888813000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: rename routeMeta to meta and update description"},{"hash":"d65303182f5d8861d9001bfd7681407a3900b050","time":1703740814000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update imports usage"},{"hash":"7c7989891cb87959d90c82ce18c7a5bb650ee46b","time":1702213846000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"build: set up lint and format scripts (#4)","coAuthors":[{"name":"Xinyu Liu","email":"meteor.lxy@foxmail.com"}]},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"zh/reference/plugin-api.md"}');export{C as comp,m as data};
