import{_ as i,c as r,b as e,d as t,e as a,f as s,a as o,r as p,o as d}from"./app-BthT14PI.js";const u={};function m(c,l){const n=p("RouteLink");return d(),r("div",null,[l[34]||(l[34]=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter"},[e("span",null,"Frontmatter")])],-1)),l[35]||(l[35]=e("h2",{id:"date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date"},[e("span",null,"date")])],-1)),e("ul",null,[l[2]||(l[2]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1)),l[3]||(l[3]=e("li",null,[e("p",null,"Details:"),e("p",null,"Created date for the page."),e("p",null,[t("You should specify the date in the form of "),e("code",null,"yyyy-MM-dd"),t(", or follow the "),e("a",{href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},"YAML Timestamp Type"),t(".")])],-1)),e("li",null,[l[1]||(l[1]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[a(n,{to:"/reference/node-api.html#date"},{default:s(()=>l[0]||(l[0]=[t("Node API > Page Properties > date")])),_:1})])])])]),l[36]||(l[36]=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description"},[e("span",null,"description")])],-1)),e("ul",null,[l[6]||(l[6]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1)),l[7]||(l[7]=e("li",null,[e("p",null,"Details:"),e("p",null,"Description for the page."),e("p",null,[t("This will override the "),e("code",null,"description"),t(" option in your site config.")])],-1)),e("li",null,[l[5]||(l[5]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[a(n,{to:"/reference/config.html#description"},{default:s(()=>l[4]||(l[4]=[t("Config > description")])),_:1})])])])]),l[37]||(l[37]=o(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head"><span>head</span></a></h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">head:</span></span>
<span class="line"><span style="color:#6796E6;">  -</span><span style="color:#6796E6;"> -</span><span style="color:#D4D4D4;"> meta</span></span>
<span class="line"><span style="color:#6796E6;">    -</span><span style="color:#D4D4D4;"> name: foo</span></span>
<span class="line"><span style="color:#D4D4D4;">      content: yaml array syntax</span></span>
<span class="line"><span style="color:#6796E6;">  -</span><span style="color:#D4D4D4;"> [meta, { name: bar, content: square brackets syntax }]</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">meta</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#9CDCFE;"> content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yaml array syntax&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">meta</span><span style="color:#9CDCFE;"> name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#9CDCFE;"> content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;square brackets syntax&quot;</span><span style="color:#808080;"> /&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)),e("ul",null,[e("li",null,[l[9]||(l[9]=t("Also see: ")),e("ul",null,[e("li",null,[a(n,{to:"/reference/config.html#head"},{default:s(()=>l[8]||(l[8]=[t("Config > head")])),_:1})])])])]),l[38]||(l[38]=e("h2",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang"},[e("span",null,"lang")])],-1)),e("ul",null,[l[13]||(l[13]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1)),l[14]||(l[14]=e("li",null,[e("p",null,"Details:"),e("p",null,"Language for the page."),e("p",null,[t("This will override the "),e("code",null,"lang"),t(" option in your site config.")])],-1)),e("li",null,[l[12]||(l[12]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[a(n,{to:"/reference/config.html#lang"},{default:s(()=>l[10]||(l[10]=[t("Config > lang")])),_:1})]),e("li",null,[a(n,{to:"/reference/node-api.html#lang"},{default:s(()=>l[11]||(l[11]=[t("Node API > Page Properties > lang")])),_:1})])])])]),l[39]||(l[39]=o(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>layout</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don&#39;t specify this frontmatter, the default layout will be used. You should refer to the theme&#39;s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/client.ts</code> file:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#9CDCFE;"> CustomLayout</span><span style="color:#C586C0;"> from</span><span style="color:#CE9178;"> &#39;./CustomLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">    CustomLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set custom layout in frontmatter:</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">layout: CustomLayout</span></span>
<span class="line"><span style="color:#569CD6;font-weight:bold;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink"><span>permalink</span></a></h2>`,7)),e("ul",null,[l[19]||(l[19]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string | null")])],-1)),l[20]||(l[20]=e("li",null,[e("p",null,"Details:"),e("p",null,"Permalink for the page."),e("p",null,"This will override the default route path that determined by the file path of the page."),e("p",null,[t("When it is set to "),e("code",null,"null"),t(", the permalink of the page will be disabled.")])],-1)),e("li",null,[l[18]||(l[18]=e("p",null,"Also see:",-1)),e("ul",null,[l[17]||(l[17]=e("li",null,[e("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1)),e("li",null,[a(n,{to:"/guide/page.html#routing"},{default:s(()=>l[15]||(l[15]=[t("Guide > Page > Routing")])),_:1})]),e("li",null,[a(n,{to:"/reference/node-api.html#permalink"},{default:s(()=>l[16]||(l[16]=[t("Node API > Page Properties > permalink")])),_:1})])])])]),l[40]||(l[40]=o(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern"><span>permalinkPattern</span></a></h2><ul><li><p>Type: <code>string | null</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This will override the <code>permalinkPattern</code> option in your site config.</p><p>This won&#39;t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">date: 2021-01-03</span></span>
<span class="line"><span style="color:#D4D4D4;">permalinkPattern: :year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#569CD6;font-weight:bold;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/foo-bar.html</code>.</p><ul><li><p>Example 2:</p><p>The page filename is <code>2021-01-03-bar-baz.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#D4D4D4;">permalinkPattern: :year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#569CD6;font-weight:bold;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/bar-baz.html</code>.</p>`,7)),e("ul",null,[e("li",null,[l[25]||(l[25]=t("Also see: ")),e("ul",null,[e("li",null,[a(n,{to:"/reference/config.html#permalinkpattern"},{default:s(()=>l[21]||(l[21]=[t("Config > permalinkPattern")])),_:1})]),l[23]||(l[23]=e("li",null,[e("a",{href:"#date"},"Frontmatter > date")],-1)),l[24]||(l[24]=e("li",null,[e("a",{href:"#permalink"},"Frontmatter > permalink")],-1)),e("li",null,[a(n,{to:"/reference/node-api.html#permalink"},{default:s(()=>l[22]||(l[22]=[t("Node API > Page Properties > permalink")])),_:1})])])])]),l[41]||(l[41]=e("h2",{id:"routemeta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routemeta"},[e("span",null,"routeMeta")])],-1)),e("ul",null,[l[28]||(l[28]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"Record<string, unknown>")])],-1)),l[29]||(l[29]=e("li",null,[e("p",null,"Details:"),e("p",null,"Custom data to be attached to the page route.")],-1)),e("li",null,[l[27]||(l[27]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[a(n,{to:"/reference/node-api.html#routeMeta"},{default:s(()=>l[26]||(l[26]=[t("Node API > Page Properties > routeMeta")])),_:1})])])])]),l[42]||(l[42]=e("h2",{id:"title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#title"},[e("span",null,"title")])],-1)),e("ul",null,[l[32]||(l[32]=e("li",null,[e("p",null,[t("Type: "),e("code",null,"string")])],-1)),l[33]||(l[33]=e("li",null,[e("p",null,"Details:"),e("p",null,"Title for the page."),e("p",null,[t("If you don't specify "),e("code",null,"title"),t(" in frontmatter, content of the first level-one header (i.e. "),e("code",null,"# title"),t(") will be used as the title.")])],-1)),e("li",null,[l[31]||(l[31]=e("p",null,"Also see:",-1)),e("ul",null,[e("li",null,[a(n,{to:"/reference/node-api.html#title"},{default:s(()=>l[30]||(l[30]=[t("Node API > Page Properties > title")])),_:1})])])])])])}const h=i(u,[["render",m],["__file","frontmatter.html.vue"]]),f=JSON.parse('{"path":"/reference/frontmatter.html","title":"Frontmatter","lang":"en-US","frontmatter":{"description":"Frontmatter date Type: string Details: Created date for the page. You should specify the date in the form of yyyy-MM-dd, or follow the YAML Timestamp Type. Also see: description...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuepress.vuejs.org/zh/reference/frontmatter.html"}],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/reference/frontmatter.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Frontmatter"}],["meta",{"property":"og:description","content":"Frontmatter date Type: string Details: Created date for the page. You should specify the date in the form of yyyy-MM-dd, or follow the YAML Timestamp Type. Also see: description..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-16T12:45:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-16T12:45:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frontmatter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-16T12:45:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"date","slug":"date","link":"#date","children":[]},{"level":2,"title":"description","slug":"description","link":"#description","children":[]},{"level":2,"title":"head","slug":"head","link":"#head","children":[]},{"level":2,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":2,"title":"layout","slug":"layout","link":"#layout","children":[]},{"level":2,"title":"permalink","slug":"permalink","link":"#permalink","children":[]},{"level":2,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]},{"level":2,"title":"routeMeta","slug":"routemeta","link":"#routemeta","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]}],"git":{"updatedTime":1715863544000,"contributors":[{"name":"张怀文","username":"张怀文","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/张怀文"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":5,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":1,"url":"https://github.com/Mr.Hope"},{"name":"Xinyu Liu","username":"Xinyu Liu","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/Xinyu Liu"}]},"autoDesc":true,"filePathRelative":"reference/frontmatter.md"}');export{h as comp,f as data};