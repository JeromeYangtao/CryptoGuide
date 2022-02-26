import{b as n}from"./app.2c3fe455.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<p><img src="https://s3.bmp.ovh/imgs/2022/02/efe9f454645647ea.png" alt=""></p><p>\u5F88\u591A\u4EBA\u90FD\u53EF\u80FD\u7ECF\u5386\u8FC7\u8FD9\u6837\u7684\u573A\u666F\uFF1A</p><p><strong>1\u3001\u81EA\u5DF1\u60F3\u5230\u4E86\u4E00\u4E2A&quot;\u7EDD\u5999&quot;\u7684\u4EA4\u6613\u7B56\u7565\uFF0C\u7167\u7740\u4E00\u987F\u64CD\u4F5C\u5374\u4E8F\u5F97\u53EA\u5269\u88E4\u8869\uFF0C\u611F\u6168\u8981\u662F\u4E00\u5F00\u59CB\u5C31\u77E5\u9053\u7B56\u7565\u4E0D\u9760\u8C31\u5C31\u597D\u4E86</strong></p><p><strong>2\u3001\u4ECE\u67D0\u672C\u6570\u6216\u8005\u5927 V \u90A3\u91CC\u5F97\u77E5\u4E86\u67D0\u4E2A\u6307\u6807\uFF0C\u7167\u7740\u9AD8\u629B\u4F4E\u5438\uFF0C\u4EE5\u4E3A\u9A6C\u4E0A\u5C31\u8981\u522B\u5885\u9760\u6D77\uFF0C\u6700\u540E\u53D7\u76CA\u5374\u5E73\u5E73\u65E0\u5947</strong></p><p><strong>3\u3001\u6709\u65F6\u7B56\u7565\u5176\u5B9E\u662F\u6709\u6548\u7684\uFF0C\u4F46\u81EA\u5DF1\u65E0\u4ECE\u5224\u65AD\u5BF9\u9519\uFF0C\u65E9\u65E9\u5272\u8089/\u6B62\u76C8\u79BB\u573A</strong> \u200B</p><p>\u5176\u5B9E\u5982\u679C\u6709\u610F\u8BC6\u5BF9\u81EA\u5DF1\u7684\u4EA4\u6613\u7B56\u7565\u505A\u4E00\u6B21\u56DE\u6D4B\uFF0C\u5C31\u53EF\u4EE5\u907F\u514D\u4E0A\u9762\u7684\u95EE\u9898\u3002\u5F53\u7136\u5F88\u591A\u4EBA\u662F\u4E0D\u77E5\u9053\u600E\u4E48\u505A\u56DE\u6D4B\uFF0C\u672C\u6587\u5C31\u6559\u4E00\u4E2A\u600E\u4E48\u5FEB\u901F\u505A\u56DE\u6D4B\u7684\u8D85\u7EA7\u5E72\u6D3B \u200B</p><h3 id="tradingview" tabindex="-1"><a class="header-anchor" href="#tradingview" aria-hidden="true">#</a> TradingView</h3><p>TradingView \u662F\u4E13\u4E1A\u4EA4\u6613\u5458\u6700\u559C\u6B22\u7684\u770B\u6570\u5E73\u53F0\uFF0C\u4E0A\u9762\u7684\u6570\u636E\u548C\u56FE\u8868\u5DE5\u5177\u90FD\u662F\u6700\u597D\u7528\u7684\u3002\u540C\u65F6\u5B83\u4E5F\u63D0\u4F9B\u4E86\u6570\u636E\u56DE\u6D4B\u548C\u4E70\u5356\u7684\u4E00\u6574\u5957\u65B9\u6848\u3002 \u200B</p><p>\u4EE5\u4E0B\u9762\u8FD9\u4E2A macd \u6307\u6807\uFF08\u4E00\u4E2A\u6280\u672F\u6D3E\u5E38\u7528\u7684\u6280\u672F\u6307\u6807\uFF09\u4F5C\u4E3A\u4F8B\u5B50\uFF0C\u62FF BTC \u65E5\u7EBF\u4F5C\u4E3A\u4EA4\u6613\u5BF9\u8C61\uFF0C\u80DC\u7387\u53EA\u6709 39%\uFF0C\u5229\u6DA6 31 %\uFF0C\u6700\u5927\u56DE\u64A4 18%</p><p><img src="https://s3.bmp.ovh/imgs/2022/02/efe9f454645647ea.png" alt=""></p><p>\u800C\u56DE\u6D4B\u6240\u9700\u8981\u7684\u4EE3\u7801\u53EA\u6709\u4E0B\u9762\u8FD9\u51E0\u884C\uFF0C\u5177\u5907\u57FA\u672C\u7684\u7F16\u7A0B\u77E5\u8BC6\u5C31\u80FD\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//@version=5</span>
<span class="token function">strategy</span><span class="token punctuation">(</span><span class="token string">&quot;MACD Strategy&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>overlay <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fastLength <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
slowlength <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
MACDLength <span class="token operator">=</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">MACD</span> <span class="token operator">=</span> ta<span class="token punctuation">.</span><span class="token function">ema</span><span class="token punctuation">(</span>close<span class="token punctuation">,</span> fastLength<span class="token punctuation">)</span> <span class="token operator">-</span> ta<span class="token punctuation">.</span><span class="token function">ema</span><span class="token punctuation">(</span>close<span class="token punctuation">,</span> slowlength<span class="token punctuation">)</span><span class="token punctuation">;</span>
aMACD <span class="token operator">=</span> ta<span class="token punctuation">.</span><span class="token function">ema</span><span class="token punctuation">(</span><span class="token constant">MACD</span><span class="token punctuation">,</span> MACDLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
delta <span class="token operator">=</span> <span class="token constant">MACD</span> <span class="token operator">-</span> aMACD<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ta<span class="token punctuation">.</span><span class="token function">crossover</span><span class="token punctuation">(</span>delta<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  strategy<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token string">&quot;MacdLE&quot;</span><span class="token punctuation">,</span> strategy<span class="token punctuation">.</span>long<span class="token punctuation">,</span> <span class="token punctuation">(</span>comment <span class="token operator">=</span> <span class="token string">&quot;MacdLE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ta<span class="token punctuation">.</span><span class="token function">crossunder</span><span class="token punctuation">(</span>delta<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  strategy<span class="token punctuation">.</span><span class="token function">entry</span><span class="token punctuation">(</span><span class="token string">&quot;MacdSE&quot;</span><span class="token punctuation">,</span> strategy<span class="token punctuation">.</span>short<span class="token punctuation">,</span> <span class="token punctuation">(</span>comment <span class="token operator">=</span> <span class="token string">&quot;MacdSE&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//plot(strategy.equity, title=&quot;equity&quot;, color=color.red, linewidth=2, style=plot.style_areabr)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u5BF9\u4E8E\u7279\u522B\u7ECF\u5178\u7684\u7B56\u7565\u751A\u81F3\u4E0D\u9700\u8981\u81EA\u5DF1\u5199\uFF0C\u793E\u533A\u5F88\u591A\u4EBA\u5DF2\u7ECF\u5199\u597D\u4E86\uFF0C\u76F4\u63A5\u7528\u5C31\u884C\u3002</p><p><strong>\u4EC5\u505A\u4E2A\u4EBA\u89C2\u5BDF\u8BB0\u5F55\uFF0C\u4E0D\u4F5C\u4E3A\u4EFB\u4F55\u6295\u8D44\u5EFA\u8BAE\u3002</strong><strong>\u200B</strong></p><p>\u52A0\u5165\u793E\u533A\u4EA4\u6D41\uFF1A front_end_101</p>`,15);function p(o,e){return t}var l=s(a,[["render",p]]);export{l as default};
