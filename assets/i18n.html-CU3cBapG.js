import{_ as i,c as t,a,b as n,d as e,e as o,w as p,r,o as c}from"./app-Co8nLnwj.js";const d={},m={class:"hint-container tip"};function u(D,s){const l=r("RouteLink");return c(),t("div",null,[s[8]||(s[8]=a(`<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持"><span>多语言支持</span></a></h1><h2 id="站点多语言配置" tabindex="-1"><a class="header-anchor" href="#站点多语言配置"><span>站点多语言配置</span></a></h2><p>要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span>docs</span></span>
<span class="line"><span>├─ README.md</span></span>
<span class="line"><span>├─ foo.md</span></span>
<span class="line"><span>├─ nested</span></span>
<span class="line"><span>│  └─ README.md</span></span>
<span class="line"><span>└─ zh</span></span>
<span class="line"><span>   ├─ README.md</span></span>
<span class="line"><span>   ├─ foo.md</span></span>
<span class="line"><span>   └─ nested</span></span>
<span class="line"><span>      └─ README.md</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4)),n("p",null,[s[1]||(s[1]=e("然后，在你的 ")),o(l,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:p(()=>s[0]||(s[0]=[e("配置文件")])),_:1}),s[2]||(s[2]=e(" 中设置 ")),s[3]||(s[3]=n("code",null,"locales",-1)),s[4]||(s[4]=e(" 选项："))]),s[9]||(s[9]=a(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">    // 键名是该语言所属的子路径</span></span>
<span class="line"><span style="color:#6A9955;">    // 作为特例，默认语言可以使用 &#39;/&#39; 作为其路径。</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      title:</span><span style="color:#CE9178;"> &#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      description:</span><span style="color:#CE9178;"> &#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#CE9178;">    &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      lang:</span><span style="color:#CE9178;"> &#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      title:</span><span style="color:#CE9178;"> &#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#9CDCFE;">      description:</span><span style="color:#CE9178;"> &#39;Vue 驱动的静态网站生成器&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个语言没有声明 <code>lang</code>, <code>title</code>, <code>description</code> 或者 <code>head</code> ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。</p>`,2)),n("div",m,[s[7]||(s[7]=n("p",{class:"hint-container-title"},"提示",-1)),n("p",null,[s[6]||(s[6]=e("配置参考： ")),o(l,{to:"/zh/reference/config.html#locales"},{default:p(()=>s[5]||(s[5]=[e("locales")])),_:1})])]),s[10]||(s[10]=a(`<h2 id="主题多语言配置" tabindex="-1"><a class="header-anchor" href="#主题多语言配置"><span>主题多语言配置</span></a></h2><p>VuePress 没有限制主题如何提供多语言支持，因此每个主题可能会有不同的多语言配置方式，而且部分主题可能不会提供多语言支持。建议你查看主题本身的文档来获取更详细的指引。</p><p>如果你使用的是默认主题，那么它提供多语言支持的方式和上述是一致的：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="background-color:#1E1E1E;color:#D4D4D4;"><pre class="shiki dark-plus vp-code"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  theme:</span><span style="color:#DCDCAA;"> defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">    locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#CE9178;">      &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        selectLanguageName:</span><span style="color:#CE9178;"> &#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>配置参考：</p><ul><li><a href="https://ecosystem.vuejs.press/zh/themes/default/config.html" target="_blank" rel="noopener noreferrer">默认主题 &gt; 配置</a></li><li><a href="https://ecosystem.vuejs.press/zh/themes/default/locale.html" target="_blank" rel="noopener noreferrer">默认主题 &gt; 语言配置</a></li></ul></div>`,5))])}const y=i(d,[["render",u]]),h=JSON.parse('{"path":"/zh/guide/i18n.html","title":"多语言支持","lang":"zh-CN","frontmatter":{"description":"多语言支持 站点多语言配置 要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构： 然后，在你的 中设置 locales 选项： 如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。 提示...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"多语言支持\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T10:07:08.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://vuepress.vuejs.org/zh/guide/i18n.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"多语言支持"}],["meta",{"property":"og:description","content":"多语言支持 站点多语言配置 要启用 VuePress 的多语言支持，首先需要使用如下的文件目录结构： 然后，在你的 中设置 locales 选项： 如果一个语言没有声明 lang, title, description 或者 head ，VuePress 将会尝试使用顶层配置的对应值。如果每个语言都声明了这些值，那么顶层配置中的对应值可以被省略。 提示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-01T10:07:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T10:07:08.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress.vuejs.org/guide/i18n.html"}]]},"headers":[{"level":2,"title":"站点多语言配置","slug":"站点多语言配置","link":"#站点多语言配置","children":[]},{"level":2,"title":"主题多语言配置","slug":"主题多语言配置","link":"#主题多语言配置","children":[]}],"git":{"updatedTime":1706782028000,"contributors":[{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2,"url":"https://github.com/meteorlxy"},{"name":"Mr.Hope","username":"","email":"mister-hope@outlook.com","commits":2}],"changelog":[{"hash":"908ad19df913bb6144e611801a69f518d44f4447","time":1706782028000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: fix default theme broken link, close #12"},{"hash":"738b95312fde71a25034532f51fa7c54a51af334","time":1706701598000,"email":"mister-hope@outlook.com","author":"Mr.Hope","message":"docs: remove default theme and plugin docs","tag":"v2.0.0-rc.2"},{"hash":"381d6de86c873249825e4ba1defc93f807bec5c1","time":1703738388000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"docs: update bundler and theme guide, improve getting-started guide"},{"hash":"4b4cfcd626bc3920c689cf7ac85e2706700cc928","time":1701614677000,"email":"meteor.lxy@foxmail.com","author":"meteorlxy","message":"build: migrate docs into a separate repo"}]},"autoDesc":true,"filePathRelative":"zh/guide/i18n.md"}');export{y as comp,h as data};
