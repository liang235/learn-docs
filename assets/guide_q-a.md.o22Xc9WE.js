import{_ as s,c as a,o as i,a4 as n,a7 as e}from"./chunks/framework.DqHORQeI.js";const g=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/q-a.md","filePath":"guide/q-a.md"}'),p={name:"guide/q-a.md"},t=n('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="安装依赖时有警告" tabindex="-1">安装依赖时有警告 <a class="header-anchor" href="#安装依赖时有警告" aria-label="Permalink to &quot;安装依赖时有警告&quot;">​</a></h2><p><img src="'+e+`" alt="An image"> 这是一个可以无视的警告，因为依赖已经安装成功了</p><p>如果对这个问题感兴趣，可以浏览下这个 <a href="https://github.com/pnpm/pnpm/issues/4183" target="_blank" rel="noreferrer">issue</a> ，里面有给出一个忽略警告的方案，就是在 <code>package.json</code> 中添加</p><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pnpm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;peerDependencyRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;ignoreMissing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;postcss&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;rollup&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这样你下次再安装依赖的时候，就不会出现该警告了</p><p>如果还是有这个问题，可以在根根目录下的 <code>.npmrc</code> 添加</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shamefully</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hoist</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">strict</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">peer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dependencies</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="为什么本地开发环境首次载入很慢" tabindex="-1">为什么本地开发环境首次载入很慢 <a class="header-anchor" href="#为什么本地开发环境首次载入很慢" aria-label="Permalink to &quot;为什么本地开发环境首次载入很慢&quot;">​</a></h2><p>主要是 <code>Vite</code> 的原因，具体可以阅读这篇文章了解 <a href="https://juejin.cn/post/7129041114174062628" target="_blank" rel="noreferrer">《为什么有人说 vite 快，有人却说 vite 慢？》</a></p>`,10),l=[t];function r(h,k,d,o,c,u){return i(),a("div",null,l)}const b=s(p,[["render",r]]);export{g as __pageData,b as default};