import{_ as l,c as o,b as e,a as t,d as a,e as p,w as r,r as c,o as i}from"./app-B155H8kC.js";const m={};function d(y,s){const n=c("RouteLink");return i(),o("div",null,[s[3]||(s[3]=e("h1",{id:"making-a-theme-extendable",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#making-a-theme-extendable"},[e("span",null,"Making a Theme Extendable")])],-1)),s[4]||(s[4]=e("p",null,"Sometimes users might want make some minor changes to a theme, but they don't want to fork and modify the entire project.",-1)),e("p",null,[s[1]||(s[1]=a("With the help of ")),p(n,{to:"/reference/theme-api.html"},{default:r(()=>s[0]||(s[0]=[a("Theme API")])),_:1,__:[0]}),s[2]||(s[2]=a(", you can make your theme extendable, allowing users to make their own modifications easily."))]),s[5]||(s[5]=t(`<p>You must have known that how to <a href="https://ecosystem.vuejs.press/themes/default/extending.html" target="_blank" rel="noopener noreferrer">extend default theme</a>. Here we&#39;ll introduce how to make your own theme extendable like default theme.</p><h2 id="layout-slots" tabindex="-1"><a class="header-anchor" href="#layout-slots"><span>Layout Slots</span></a></h2><p>This approach requires you to determine which parts of your theme could be extended. It is more suitable for those common customizations like page footer or header.</p><p>You just need to provide slots in your layouts, and tell users how to make use of them:</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-vue"><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;my-theme-layout&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">slot</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;page-header&quot;</span><span style="color:#F44747;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">Content</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">slot</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;page-footer&quot;</span><span style="color:#F44747;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component-aliases" tabindex="-1"><a class="header-anchor" href="#component-aliases"><span>Component Aliases</span></a></h2><p>This approach requires you to consider which components of your theme should be replaceable, and you also need to split components into a suitable granularity.</p><p>First, set <code>alias</code> for replaceable components of you theme:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-ts"><span class="line"><span style="color:#C586C0;">import</span><span style="color:#C586C0;"> type</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Theme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#4FC1FF;"> __dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#569CD6;"> const</span><span style="color:#DCDCAA;"> fooTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">Theme</span><span style="color:#569CD6;"> =&gt;</span><span style="color:#D4D4D4;"> ({</span></span>
<span class="line"><span style="color:#9CDCFE;">  name:</span><span style="color:#CE9178;"> &#39;vuepress-theme-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">  alias:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // set alias for replaceable components</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@theme/Navbar.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;components/Navbar.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;@theme/Sidebar.vue&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#9CDCFE;"> path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;components/Sidebar.vue&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next, use those components via aliases in your theme:</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code class="language-vue"><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> Navbar</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;@theme/Navbar.vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> Sidebar</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;@theme/Sidebar.vue&#39;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">div</span><span style="color:#9CDCFE;"> class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;my-theme-layout&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">Navbar</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">Sidebar</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">Content</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, users can replace specific components by overriding the <code>alias</code> when extending or using your theme.</p>`,12))])}const D=l(m,[["render",d]]),h=JSON.parse(`{"path":"/advanced/cookbook/making-a-theme-extendable.html","title":"Making a Theme Extendable","lang":"en-US","frontmatter":{"description":"Making a Theme Extendable Sometimes users might want make some minor changes to a theme, but they don't want to fork and modify the entire project. With the help of , you can ma...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Making a Theme Extendable\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-31T07:59:53.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/advanced/cookbook/making-a-theme-extendable.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Making a Theme Extendable"}],["meta",{"property":"og:description","content":"Making a Theme Extendable Sometimes users might want make some minor changes to a theme, but they don't want to fork and modify the entire project. With the help of , you can ma..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T07:59:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T07:59:53.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress.vuejs.org/zh/advanced/cookbook/making-a-theme-extendable.html"}]]},"git":{"updatedTime":1725091193000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":1}],"changelog":[{"hash":"c50d39999bf77e769c24d46e37d3780fe48e621b","time":1725091193000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"style: fix lint errors"},{"hash":"738b95312fde71a25034532f51fa7c54a51af334","time":1706701598000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: remove default theme and plugin docs","tag":"v2.0.0-rc.2"},{"hash":"d65303182f5d8861d9001bfd7681407a3900b050","time":1703740814000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update imports usage"},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/making-a-theme-extendable.md"}`);export{D as comp,h as data};
