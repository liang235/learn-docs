import{_ as a,c as i,o as e,a2 as n}from"./chunks/framework.CXlnX6pr.js";const o=JSON.parse('{"title":"vxe-table","description":"","frontmatter":{},"headers":[],"relativePath":"package/vxe-table.md","filePath":"package/vxe-table.md"}'),l={name:"package/vxe-table.md"};function p(t,s,r,h,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="vxe-table" tabindex="-1">vxe-table <a class="header-anchor" href="#vxe-table" aria-label="Permalink to &quot;vxe-table&quot;">​</a></h1><p><code>Element Plus</code> 自带的 <code>el-table</code> 组件大部分时候只能满足简单需求的使用，如果对表格有更加复杂场景需求下的使用，推荐使用 <code>vxe-table</code></p><h2 id="安装-官网地址" tabindex="-1">安装 <a href="https://vxetable.cn/#/table/start/install" target="_blank" rel="noreferrer">官网地址</a> <a class="header-anchor" href="#安装-官网地址" aria-label="Permalink to &quot;安装 [官网地址](https://vxetable.cn/#/table/start/install)&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pnpm i xe-utils vxe-table</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="全局安装" tabindex="-1">全局安装 <a class="header-anchor" href="#全局安装" aria-label="Permalink to &quot;全局安装&quot;">​</a></h2><p><code>src/main.js</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { App, createApp } = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import VXETable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vxe-table&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vxe-table/lib/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useTable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(VXETable)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 给 vue 实例挂载内部对象，例如：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // app.config.globalProperties.$XModal = VXETable.modal</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // app.config.globalProperties.$XPrint = VXETable.print</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // app.config.globalProperties.$XSaveFile = VXETable.saveFile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // app.config.globalProperties.$XReadFile = VXETable.readFile</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(useTable).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="按需引入请参考-vite-plugin-style-import" tabindex="-1">按需引入请参考 <a href="./vite-plugin-style-import.html">vite-plugin-style-import</a> <a class="header-anchor" href="#按需引入请参考-vite-plugin-style-import" aria-label="Permalink to &quot;按需引入请参考 [vite-plugin-style-import](./vite-plugin-style-import.md)&quot;">​</a></h2>`,8)]))}const b=a(l,[["render",p]]);export{o as __pageData,b as default};
