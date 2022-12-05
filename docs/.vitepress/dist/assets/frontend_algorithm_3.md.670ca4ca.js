import{_ as s,c as a,o as n,a as o}from"./app.ae7e85d8.js";const i=JSON.parse('{"title":"\u5B9E\u7528\u7B97\u6CD5\u7CFB\u5217\u4E4B\u70B9\u8DDD\u79BB","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/algorithm/3.md"}'),l={name:"frontend/algorithm/3.md"},p=o(`<h1 id="\u5B9E\u7528\u7B97\u6CD5\u7CFB\u5217\u4E4B\u70B9\u8DDD\u79BB" tabindex="-1">\u5B9E\u7528\u7B97\u6CD5\u7CFB\u5217\u4E4B\u70B9\u8DDD\u79BB <a class="header-anchor" href="#\u5B9E\u7528\u7B97\u6CD5\u7CFB\u5217\u4E4B\u70B9\u8DDD\u79BB" aria-hidden="true">#</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> euclideanDistance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hypot</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#A6ACCD;">(a)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">k</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> b[k] </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> a[k]))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">euclideanDistance</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// ~2.2361</span></span>
<span class="line"><span style="color:#82AAFF;">euclideanDistance</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// ~2.4495</span></span>
<span class="line"></span></code></pre></div>`,2),e=[p];function t(c,r,C,A,D,y){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{i as __pageData,_ as default};