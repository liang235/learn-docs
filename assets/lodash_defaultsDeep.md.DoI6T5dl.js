import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DqHORQeI.js";const g=JSON.parse('{"title":"defaultsDeep","description":"","frontmatter":{},"headers":[],"relativePath":"lodash/defaultsDeep.md","filePath":"lodash/defaultsDeep.md"}'),n={name:"lodash/defaultsDeep.md"},l=e(`<h1 id="defaultsdeep" tabindex="-1">defaultsDeep <a class="header-anchor" href="#defaultsdeep" aria-label="Permalink to &quot;defaultsDeep&quot;">​</a></h1><p>对象深合并，分配来源对象的可枚举属性到目标对象所有解析为 <code>undefined</code> 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉，它会递归分配默认属性</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defaultsDeep } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash-es&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // js 工具库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: { b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 目标对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: { b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, c: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 来源对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defaultsDeep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1, obj2))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// =&gt; { &#39;a&#39;: { &#39;b&#39;: 2, &#39;c&#39;: 3 } }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4),t=[l];function p(h,k,r,d,o,c){return i(),a("div",null,t)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};