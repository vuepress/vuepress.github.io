import{_ as r}from"./hero-BNkrhNQ6.js";import{_ as i,c as p,a as t,b as a,d as e,e as l,w as o,r as d,o as c}from"./app-Co8nLnwj.js";const u={},m={class:"hint-container tip"},y={class:"hint-container tip"};function D(g,s){const n=d("RouteLink");return c(),p("div",null,[s[32]||(s[32]=t('<h1 id="assets" tabindex="-1"><a class="header-anchor" href="#assets"><span>Assets</span></a></h1><h2 id="relative-urls" tabindex="-1"><a class="header-anchor" href="#relative-urls"><span>Relative URLs</span></a></h2><p>You can reference any assets using relative URLs in your Markdown content:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">./image.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>or</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">An image</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">image.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This is generally the suggested way to import images, as users usually place images near the Markdown file that references them.</p><h2 id="public-files" tabindex="-1"><a class="header-anchor" href="#public-files"><span>Public Files</span></a></h2><p>You can put some static assets inside public directory, and they will be copied to the root of the generated directory.</p>',9)),a("p",null,[s[1]||(s[1]=e("The default public directory is ")),s[2]||(s[2]=a("code",null,".vuepress/public",-1)),s[3]||(s[3]=e(", which can be changed by ")),l(n,{to:"/reference/config.html#public"},{default:o(()=>s[0]||(s[0]=[e("public")])),_:1}),s[4]||(s[4]=e(" option."))]),s[33]||(s[33]=t(`<p>It would be useful in some cases:</p><ul><li>You may need to provide static assets that are not directly referenced in any of your Markdown files, for example, favicon and PWA icons.</li><li>You may need to serve some shared static assets, which may even be referenced outside your site, for example, logo images.</li><li>You may want to reference images using absolute URLs in your Markdown content.</li></ul><p>Take our documentation source files as an example, we are putting the logo of VuePress inside the public directory:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> docs</span></span>
<span class="line"><span style="color:#DCDCAA;">   ├─</span><span style="color:#CE9178;"> .vuepress</span></span>
<span class="line"><span style="color:#D4D4D4;">   |  </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> public</span></span>
<span class="line"><span style="color:#D4D4D4;">   |     </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> images</span></span>
<span class="line"><span style="color:#D4D4D4;">   |        </span><span style="color:#DCDCAA;">└─</span><span style="color:#CE9178;"> hero.png</span><span style="color:#6A9955;">  # &lt;- Logo file</span></span>
<span class="line"><span style="color:#DCDCAA;">   └─</span><span style="color:#CE9178;"> guide</span></span>
<span class="line"><span style="color:#DCDCAA;">      └─</span><span style="color:#CE9178;"> assets.md</span><span style="color:#6A9955;">       # &lt;- Here we are</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can reference our logo in current page like this:</p><p><strong>Input</strong></p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p><img src="`+r+'" alt="VuePress Logo"></p><h3 id="base-helper" tabindex="-1"><a class="header-anchor" href="#base-helper"><span>Base Helper</span></a></h3>',10)),a("p",null,[s[6]||(s[6]=e("If your site is deployed to a non-root URL, for example, ")),s[7]||(s[7]=a("code",null,"https://foo.github.io/bar/",-1)),s[8]||(s[8]=e(", then the ")),l(n,{to:"/reference/config.html#base"},{default:o(()=>s[5]||(s[5]=[e("base")])),_:1}),s[9]||(s[9]=e(" should be set to ")),s[10]||(s[10]=a("code",null,"'/bar/'",-1)),s[11]||(s[11]=e(". Obviously, your public files would be served like ")),s[12]||(s[12]=a("code",null,"https://foo.github.io/bar/images/hero.png",-1)),s[13]||(s[13]=e(" after deployment."))]),s[34]||(s[34]=t('<p>In most cases, you don&#39;t need to worry about the reference path of those public files, as VuePress will automatically handle <code>base</code> for you:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#6A9955;">&lt;!-- you don&#39;t need to prepend `/bar/` to `/images/hero.png` manually --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">![</span><span style="color:#CE9178;">VuePress Logo</span><span style="color:#D4D4D4;">](</span><span style="color:#D4D4D4;text-decoration:underline;">/images/hero.png</span><span style="color:#D4D4D4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2)),a("div",m,[s[21]||(s[21]=a("p",{class:"hint-container-title"},"Tips",-1)),a("p",null,[s[16]||(s[16]=e("When using ")),l(n,{to:"/reference/bundler/webpack.html"},{default:o(()=>s[14]||(s[14]=[e("webpack bundler")])),_:1}),s[17]||(s[17]=e(", you need to set ")),l(n,{to:"/reference/config.html#markdown-assets"},{default:o(()=>s[15]||(s[15]=[e("markdown.assets.absolutePathPrependBase")])),_:1}),s[18]||(s[18]=e(" to ")),s[19]||(s[19]=a("code",null,"true",-1)),s[20]||(s[20]=e(" to automatically prepend base to markdown images."))])]),a("p",null,[s[23]||(s[23]=e("However, sometimes you may have some dynamical links referencing public files, especially when you are authoring a custom theme. In such case, the ")),s[24]||(s[24]=a("code",null,"base",-1)),s[25]||(s[25]=e(" could not be handled automatically. To help with that, VuePress provides a ")),l(n,{to:"/reference/client-api.html#withbase"},{default:o(()=>s[22]||(s[22]=[e("withBase")])),_:1}),s[26]||(s[26]=e(" helper to prepend ")),s[27]||(s[27]=a("code",null,"base",-1)),s[28]||(s[28]=e(" for you:"))]),s[35]||(s[35]=t(`<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">withBase</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> logoPath</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;/images/hero.png&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> :src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;withBase(logoPath)&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also access the helper by <code>$withBase</code> directly:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> :src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;$withBase(&#39;/images/hero.png&#39;)&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;VuePress Logo&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="packages-and-path-aliases" tabindex="-1"><a class="header-anchor" href="#packages-and-path-aliases"><span>Packages and Path Aliases</span></a></h2><p>Although it is not a common usage, you can reference images from dependent packages:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> install</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> package-name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Since markdown image syntax regards image links as relative paths by default, you need to use <code>&lt;img&gt;</code> tag:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;package-name/image.png&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Image from dependency&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The path aliases that set in config file are also supported:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@alias&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/some/dir&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">img</span><span style="color:#9CDCFE;"> src</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;@alias/image.png&quot;</span><span style="color:#9CDCFE;"> alt</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;Image from path alias&quot;</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11)),a("div",y,[s[31]||(s[31]=a("p",{class:"hint-container-title"},"Tips",-1)),a("p",null,[s[30]||(s[30]=e("Config reference: ")),l(n,{to:"/reference/plugin-api.html#alias"},{default:o(()=>s[29]||(s[29]=[e("alias")])),_:1})])])])}const b=i(u,[["render",D]]),C=JSON.parse('{"path":"/guide/assets.html","title":"Assets","lang":"en-US","frontmatter":{"description":"Assets Relative URLs You can reference any assets using relative URLs in your Markdown content: or This is generally the suggested way to import images, as users usually place i...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Assets\\",\\"image\\":[\\"https://vuepress.vuejs.org/images/hero.png\\",\\"https://vuepress.vuejs.org/images/hero.png\\",\\"https://vuepress.vuejs.org/images/hero.png\\"],\\"dateModified\\":\\"2024-08-31T07:59:53.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/guide/assets.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Assets"}],["meta",{"property":"og:description","content":"Assets Relative URLs You can reference any assets using relative URLs in your Markdown content: or This is generally the suggested way to import images, as users usually place i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress.vuejs.org/images/hero.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T07:59:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T07:59:53.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress.vuejs.org/zh/guide/assets.html"}]]},"headers":[{"level":2,"title":"Relative URLs","slug":"relative-urls","link":"#relative-urls","children":[]},{"level":2,"title":"Public Files","slug":"public-files","link":"#public-files","children":[{"level":3,"title":"Base Helper","slug":"base-helper","link":"#base-helper","children":[]}]},{"level":2,"title":"Packages and Path Aliases","slug":"packages-and-path-aliases","link":"#packages-and-path-aliases","children":[]}],"git":{"updatedTime":1725091193000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":4,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":1},{"name":"Xinyu Liu","username":"","email":"meteor.lxy@foxmail.com","commits":1}],"changelog":[{"hash":"c50d39999bf77e769c24d46e37d3780fe48e621b","time":1725091193000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"style: fix lint errors"},{"hash":"d65303182f5d8861d9001bfd7681407a3900b050","time":1703740814000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update imports usage"},{"hash":"679b8e8000cd1ee281d84757699400d502cb5e81","time":1703048697000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: add tip for handling webpack assets base"},{"hash":"7c7989891cb87959d90c82ce18c7a5bb650ee46b","time":1702213846000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"build: set up lint and format scripts (#4)","coAuthors":[{"name":"Xinyu Liu","email":"meteor.lxy@foxmail.com"}]},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"guide/assets.md"}');export{b as comp,C as data};
