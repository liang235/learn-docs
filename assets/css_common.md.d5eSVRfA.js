import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DqHORQeI.js";const b=JSON.parse('{"title":"常用样式","description":"","frontmatter":{},"headers":[],"relativePath":"css/common.md","filePath":"css/common.md"}'),e={name:"css/common.md"},l=n(`<h1 id="常用样式" tabindex="-1">常用样式 <a class="header-anchor" href="#常用样式" aria-label="Permalink to &quot;常用样式&quot;">​</a></h1><h2 id="文字超出" tabindex="-1">文字超出... <a class="header-anchor" href="#文字超出" aria-label="Permalink to &quot;文字超出...&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">overflow: hidden;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">white-space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: nowrap;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ellipsis;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="文字超出多行" tabindex="-1">文字超出多行... <a class="header-anchor" href="#文字超出多行" aria-label="Permalink to &quot;文字超出多行...&quot;">​</a></h2><ul><li>如果不想使用混入的方式，可以拿出来单独设置 <code>-webkit-line-clamp</code></li></ul><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@mixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> text-ellipsis($line: 1) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    overflow: hidden;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    word-break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">break-all</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    text-overflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ellipsis;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    display: -webkit-box;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    -webkit-line-clamp: $line;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    -webkit-box-orient: vertical;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6),p=[l];function t(r,h,c,o,d,k){return i(),a("div",null,p)}const m=s(e,[["render",t]]);export{b as __pageData,m as default};