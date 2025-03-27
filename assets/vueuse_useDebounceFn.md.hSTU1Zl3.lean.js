import{_ as e,c as a,o as i,a2 as n}from"./chunks/framework.CXlnX6pr.js";const k=JSON.parse('{"title":"useDebounceFn","description":"","frontmatter":{},"headers":[],"relativePath":"vueuse/useDebounceFn.md","filePath":"vueuse/useDebounceFn.md"}'),l={name:"vueuse/useDebounceFn.md"};function t(p,s,h,r,c,d){return i(),a("div",null,s[0]||(s[0]=[n(`<h1 id="usedebouncefn" tabindex="-1">useDebounceFn <a class="header-anchor" href="#usedebouncefn" aria-label="Permalink to &quot;useDebounceFn&quot;">​</a></h1><ul><li>防抖：在事件被触发 <code>n</code> 秒后再执行回调函数，如果在这 <code>n</code> 秒内又被触发，则重新计时</li><li>解决问题：为了解决短时间内大量触发某函数而导致的性能问题，比如触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象</li><li>使用场景： <ul><li>用户在输入框中连续输入一串字符后，只会在输入完后去执行最后一次的查询 <code>ajax</code> 请求，这样可以有效减少请求次数，节约请求资源</li><li><code>window</code> 的 <code>resize</code>、<code>scroll</code> 事件，不断地调整浏览器的窗口大小、或者滚动时会触发对应事件，防抖让其只触发一次</li></ul></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useDebounceFn } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vueuse/core&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // vue 工具库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第三个参数为最大等待时间，类似于 lodash debounce</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下面的 1000 为时间单位，表示点击事件后，一秒后才执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> debouncedFn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDebounceFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 执行内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4)]))}const u=e(l,[["render",t]]);export{k as __pageData,u as default};
