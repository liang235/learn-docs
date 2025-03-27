import{_ as a,c as i,o as e,a2 as n}from"./chunks/framework.CXlnX6pr.js";const u=JSON.parse('{"title":"useThrottleFn","description":"","frontmatter":{},"headers":[],"relativePath":"vueuse/useThrottleFn.md","filePath":"vueuse/useThrottleFn.md"}'),t={name:"vueuse/useThrottleFn.md"};function l(h,s,r,p,k,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="usethrottlefn" tabindex="-1">useThrottleFn <a class="header-anchor" href="#usethrottlefn" aria-label="Permalink to &quot;useThrottleFn&quot;">​</a></h1><ul><li>节流：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行（函数会被立即执行），如果在同一个单位时间内某事件被触发多次，只有一次能生效</li><li>解决问题：为了解决短时间内大量触发某函数而导致的性能问题，比如触发频率过高导致的响应速度跟不上触发频率，出现延迟，假死或卡顿的现象</li><li>使用场景： <ul><li>鼠标连续不断地触发某事件（如点击查询数据），只在单位时间内只触发一次</li><li>在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次 <code>ajax</code> 请求，而不是在用户停下滚动页面操作时才去请求数据</li><li>监听滚动事件，比如是否滑到底部自动加载更多，用 <code>throttle</code> 来判断</li></ul></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useThrottleFn } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vueuse/core&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // vue 工具库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 下面的 1000 为时间单位，表示点击事件后，一秒内只执行一次，但是函数会被立即执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> throttledFn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useThrottleFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 执行方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,4)]))}const c=a(t,[["render",l]]);export{u as __pageData,c as default};
