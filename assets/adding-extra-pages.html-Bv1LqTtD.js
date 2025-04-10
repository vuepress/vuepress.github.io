import{_ as t,c as p,b as a,a as r,d as e,e as l,w as o,r as i,o as c}from"./app-Co8nLnwj.js";const d={};function D(m,s){const n=i("RouteLink");return c(),p("div",null,[s[5]||(s[5]=a("h1",{id:"adding-extra-pages",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#adding-extra-pages"},[a("span",null,"Adding Extra Pages")])],-1)),s[6]||(s[6]=a("p",null,"Sometimes you might want to add some extra pages without creating a markdown file in the source directory.",-1)),a("p",null,[s[2]||(s[2]=e("With the help of ")),l(n,{to:"/reference/plugin-api.html"},{default:o(()=>s[0]||(s[0]=[e("Plugin API")])),_:1}),s[3]||(s[3]=e(" and ")),l(n,{to:"/reference/node-api.html"},{default:o(()=>s[1]||(s[1]=[e("Node API")])),_:1}),s[4]||(s[4]=e(", we can do that with ease."))]),s[7]||(s[7]=r(`<h2 id="add-a-default-homepage" tabindex="-1"><a class="header-anchor" href="#add-a-default-homepage"><span>Add a Default Homepage</span></a></h2><p>As a theme author, you may not require users to create a <code>/README.md</code> file as the homepage, but you want to provide a default one:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">createPage</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  // all pages have been loaded after initialization</span></span>
<span class="line"><span style="color:#569CD6;">  async</span><span style="color:#DCDCAA;"> onInitialized</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#6A9955;">    // if the homepage does not exist</span></span>
<span class="line"><span style="color:#C586C0;">    if</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">every</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">page</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#9CDCFE;"> page</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> !== </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">)) {</span></span>
<span class="line"><span style="color:#6A9955;">      // create a homepage</span></span>
<span class="line"><span style="color:#569CD6;">      const</span><span style="color:#4FC1FF;"> homepage</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#DCDCAA;"> createPage</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, {</span></span>
<span class="line"><span style="color:#9CDCFE;">        path:</span><span style="color:#CE9178;"> &#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">        // set frontmatter</span></span>
<span class="line"><span style="color:#9CDCFE;">        frontmatter:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          layout:</span><span style="color:#CE9178;"> &#39;Layout&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#6A9955;">        // set markdown content</span></span>
<span class="line"><span style="color:#9CDCFE;">        content:</span><span style="color:#CE9178;"> \`</span><span style="color:#D7BA7D;">\\</span></span>
<span class="line"><span style="color:#CE9178;"># Welcome to </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">title</span><span style="color:#569CD6;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">This is the default homepage</span></span>
<span class="line"><span style="color:#CE9178;">\`</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      })</span></span>
<span class="line"><span style="color:#6A9955;">      // add it to \`app.pages\`</span></span>
<span class="line"><span style="color:#9CDCFE;">      app</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">pages</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">push</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">homepage</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const u=t(d,[["render",D]]),g=JSON.parse('{"path":"/advanced/cookbook/adding-extra-pages.html","title":"Adding Extra Pages","lang":"en-US","frontmatter":{"description":"Adding Extra Pages Sometimes you might want to add some extra pages without creating a markdown file in the source directory. With the help of and , we can do that with ease. Ad...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Adding Extra Pages\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-28T05:20:14.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/advanced/cookbook/adding-extra-pages.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Adding Extra Pages"}],["meta",{"property":"og:description","content":"Adding Extra Pages Sometimes you might want to add some extra pages without creating a markdown file in the source directory. With the help of and , we can do that with ease. Ad..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-28T05:20:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-28T05:20:14.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress.vuejs.org/zh/advanced/cookbook/adding-extra-pages.html"}]]},"headers":[{"level":2,"title":"Add a Default Homepage","slug":"add-a-default-homepage","link":"#add-a-default-homepage","children":[]}],"git":{"updatedTime":1703740814000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2,"url":"https://github.com/meteorlxy"}],"changelog":[{"hash":"d65303182f5d8861d9001bfd7681407a3900b050","time":1703740814000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update imports usage"},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"advanced/cookbook/adding-extra-pages.md"}');export{u as comp,g as data};
