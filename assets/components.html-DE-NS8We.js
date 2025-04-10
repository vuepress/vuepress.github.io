import{_ as o,c as t,a as l,b as e,d as n,e as i,w as p,r,o as c}from"./app-Co8nLnwj.js";const d={};function u(m,s){const a=r("RouteLink");return c(),t("div",null,[s[3]||(s[3]=l(`<h1 id="built-in-components" tabindex="-1"><a class="header-anchor" href="#built-in-components"><span>Built-in Components</span></a></h1><h2 id="autolink" tabindex="-1"><a class="header-anchor" href="#autolink"><span>AutoLink</span></a></h2><ul><li><p>Props:</p><ul><li>config <ul><li>Type: <code>AutoLinkConfig</code></li><li>Required: <code>true</code></li></ul></li></ul></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> AutoLinkConfig</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Pattern to determine if the link should be active, which has higher priority than \`exact\`</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  activeMatch</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">RegExp</span><span style="color:#D4D4D4;"> | </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * The \`aria-label\` attribute</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  ariaLabel</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Whether the link should be active only if the url is an exact match</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  exact</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * URL of the auto link</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * The \`rel\` attribute</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  rel</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * The \`target\` attribute</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  target</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Text of the auto link</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Usage:</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  default slot</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #before</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">before slot</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #after</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">after slot</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> v-slot</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;config&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ config.text }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">AutoLink</span><span style="color:#9CDCFE;"> :config</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;autoLinkConfig&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">template</span><span style="color:#9CDCFE;"> #before</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;config&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{{ config.text }}</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">AutoLink</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component will automatically render internal link as <code>&lt;RouteLink&gt;</code>, and render external link as <code>&lt;a&gt;</code>. It will also add necessary attributes correspondingly.</p><p>You can make use of the <code>before</code> and <code>after</code> slots to render content before and after the text. Also, you can use the <code>default</code> slot to render the text (default text is <code>config.text</code>).</p><p>This component is mainly for developing themes. Users won&#39;t need it in most cases. For theme authors, it&#39;s recommended to use this component to render links that could be either internal or external.</p></li></ul><h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly"><span>ClientOnly</span></a></h2><ul><li>Usage:</li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">ClientOnly</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">NonSsrFriendlyComponent</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">ClientOnly</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component and its children will only be rendered in client-side. That means, it will not be rendered to HTML during build (SSR).</p><p>If a component is trying to access Browser / DOM APIs directly in <code>setup()</code>, an error will occur during build because those APIs are unavailable in Node.js environment. In such case, you could do either:</p><ul><li>Modify the component to only access Browser / DOM APIs in <code>onBeforeMount()</code> or <code>onMounted()</code> hook.</li><li>Wrap the component with <code>&lt;ClientOnly&gt;</code>.</li></ul></li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Since Vue 3.5, if you only want to avoid hydration mismatch, you can try the new <a href="https://blog.vuejs.org/posts/vue-3-5#data-allow-mismatch" target="_blank" rel="noopener noreferrer">data-allow-mismatch</a> attribute instead of <code>&lt;ClientOnly&gt;</code> component.</p></div><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><ul><li><p>Props:</p><ul><li>path <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">Content</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/page.md&quot;</span><span style="color:#808080;"> /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,15)),e("ul",null,[s[2]||(s[2]=e("li",null,[e("p",null,"Details:"),e("p",null,"This component will render the Markdown content of a page."),e("p",null,[n("If the "),e("code",null,"path"),n(" prop is not provided, it will render the page content of current route.")]),e("p",null,"This component is mainly for developing themes. You won't need it in most cases.")],-1)),e("li",null,[s[1]||(s[1]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[i(a,{to:"/reference/node-api.html#path"},{default:p(()=>s[0]||(s[0]=[n("Node API > Page Properties > path")])),_:1})])])])]),s[4]||(s[4]=l(`<h2 id="routelink" tabindex="-1"><a class="header-anchor" href="#routelink"><span>RouteLink</span></a></h2><ul><li><p>Props:</p><ul><li>to <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Required: <code>false</code></li><li>Default: <code>false</code></li></ul></li><li>activeClass <ul><li>Type: <code>string</code></li><li>Required: <code>false</code></li><li>Default: <code>&#39;route-link-active&#39;</code></li></ul></li></ul></li><li><p>Usage:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RouteLink</span><span style="color:#9CDCFE;"> to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/target-page.md&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">target page</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RouteLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">RouteLink</span><span style="color:#9CDCFE;"> active</span><span style="color:#9CDCFE;"> to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;/path/to/current-page.md&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">current page</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">RouteLink</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>This component will render a link to the target page.</p><p>If the <code>active</code> prop is set to <code>true</code>, the link will have an extra <code>activeClass</code>. Notice that the active status won&#39;t be updated automatically when the route changes.</p><p>This component is mainly for developing themes. Users won&#39;t need it in most cases. For theme authors, it&#39;s recommended to use this component to render internal links instead of the <code>&lt;RouterLink&gt;</code> component from <code>vue-router</code>.</p></li></ul>`,4))])}const h=o(d,[["render",u]]),v=JSON.parse('{"path":"/reference/components.html","title":"Built-in Components","lang":"en-US","frontmatter":{"description":"Built-in Components AutoLink Props: config Type: AutoLinkConfig Required: true Usage: Details: This component will automatically render internal link as <RouteLink>, and render ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Built-in Components\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-03T15:31:59.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/reference/components.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Built-in Components"}],["meta",{"property":"og:description","content":"Built-in Components AutoLink Props: config Type: AutoLinkConfig Required: true Usage: Details: This component will automatically render internal link as <RouteLink>, and render ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-03T15:31:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-03T15:31:59.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress.vuejs.org/zh/reference/components.html"}]]},"headers":[{"level":2,"title":"AutoLink","slug":"autolink","link":"#autolink","children":[]},{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"RouteLink","slug":"routelink","link":"#routelink","children":[]}],"git":{"updatedTime":1725377519000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":6,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":1},{"name":"Xinyu Liu","username":"","email":"meteor.lxy@foxmail.com","commits":1},{"name":"张怀文","username":"","email":"mister-hope@outlook.com","commits":1}],"changelog":[{"hash":"b138d6247cdc790783f0a8e6f839e4ecad35d8df","time":1725377519000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: add tip for data-allow-mismatch attribute"},{"hash":"c50d39999bf77e769c24d46e37d3780fe48e621b","time":1725091193000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"style: fix lint errors"},{"hash":"5f57b6cc8de208b75155624ae085f3412c6be364","time":1715863566000,"email":"mister-hope@outlook.com","author":"张怀文","message":"docs: add AutoLink component reference (#24)","coAuthors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com"}]},{"hash":"da95c8371e8b538d03aa20f53c472fc329929e97","time":1707234403000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: remove npm badges from core references"},{"hash":"9761a9b949c48d21fcc1bd73d96c103e73d03344","time":1707115253000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update built-in components reference"},{"hash":"7c7989891cb87959d90c82ce18c7a5bb650ee46b","time":1702213846000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"build: set up lint and format scripts (#4)","coAuthors":[{"name":"Xinyu Liu","email":"meteor.lxy@foxmail.com"}]},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"reference/components.md"}');export{h as comp,v as data};
