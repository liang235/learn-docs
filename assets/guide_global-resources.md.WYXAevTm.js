import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.DqHORQeI.js";const u=JSON.parse('{"title":"全局资源","description":"","frontmatter":{},"headers":[],"relativePath":"guide/global-resources.md","filePath":"guide/global-resources.md"}'),e={name:"guide/global-resources.md"},l=n(`<h1 id="全局资源" tabindex="-1">全局资源 <a class="header-anchor" href="#全局资源" aria-label="Permalink to &quot;全局资源&quot;">​</a></h1><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>框架用到的图片资源都放在 <code>/src/assets/images/</code> 目录下，可自行新建文件夹分类管理</p><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h2><p>样式存放目录为 <code>/src/assets/styles/</code> ，因为 Vue 的文件特性，页面样式建议写在 .vue 文件里，所以该目录只存放全局样式，方便统一管理</p><p>此目录下还有一个特殊目录，即 <code>/src/assets/styles/resources/</code> ，这是全局 <code>SCSS</code> 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西</p></div><p>配置自动导入，无需在页面上引用即可生效并使用</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vite.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fs&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // node 文件模块</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 导入全局 scss 资源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scssResources</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readdirSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src/assets/styles/resources&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dirname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">statSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`src/assets/styles/resources/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scssResources.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`@use &quot;src/assets/styles/resources/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dirname</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; as *;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置全局 scss 资源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">css</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    preprocessorOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        scss</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            additionalData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: scssResources.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><h3 id="公共组件-components-组件" tabindex="-1">公共组件 <a href="./../components/">components 组件</a> <a class="header-anchor" href="#公共组件-components-组件" aria-label="Permalink to &quot;公共组件 [components 组件](../components/index.md)&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components</a> 提供支持</p></div><p>公共组件存放在 <code>/src/components/</code> 目录下，每个组件按文件夹进行区分</p><p>每个组件的文件夹内至少保留一个文件名为 <code>index.vue</code> 的组件入口（可参考 <code>SvgIcon</code> 组件），文件夹名称即为组件名</p><h3 id="局部组件" tabindex="-1">局部组件 <a class="header-anchor" href="#局部组件" aria-label="Permalink to &quot;局部组件&quot;">​</a></h3><p>局部组件没有提供专门的存放目录，我们建议采用就近原则，即局部组件与使用页面离得越近越好。你可以在每个模块的文件夹下，建立一个 <code>components</code> 文件夹用于存放局部组件</p>`,16),p=[l];function t(h,r,k,c,d,o){return i(),a("div",null,p)}const g=s(e,[["render",t]]);export{u as __pageData,g as default};