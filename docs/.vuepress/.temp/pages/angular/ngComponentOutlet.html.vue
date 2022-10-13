<template><div><h1 id="ngcomponentoutlet" tabindex="-1"><a class="header-anchor" href="#ngcomponentoutlet" aria-hidden="true">#</a> ngComponentOutlet</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>上一篇文章我们介绍了<code v-pre>ngTemplateOutlet</code>的使用，本文继续介绍另一个类似指令<code v-pre>ngComponentOutlet</code>。</p>
<p>前提你已了解Angular框架的基本使用，知晓<a href="https://angular.cn/guide/built-in-directives" target="_blank" rel="noopener noreferrer">指令<ExternalLinkIcon/></a>等相关概念及作用。</p>
<ul>
<li>ng版本：v13.3.x</li>
<li>源码：<a href="https://github.com/angular/angular/blob/13.3.x/packages/common/src/directives/ng_component_outlet.ts" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<p><code v-pre>ngComponentOutlet</code>：实例化单个Component组件，并将其（宿主视图）插入到当前视图中。</p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-hello'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;p>hello,EnochGao!&lt;/p>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">HelloComponent</span><span class="token punctuation">{</span>  <span class="token comment">// hello模板组件</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;ng-container *ngComponentOutlet="component">&lt;/ng-container>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span><span class="token punctuation">{</span> <span class="token comment">// app组件</span>
  component <span class="token operator">=</span> HelloComponent<span class="token punctuation">;</span> <span class="token comment">// 引用模板组件</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c18651430d9b4e9ea1ee4c9dbe48e5ec~tplv-k3u1fbpfcp-watermark.image?" alt="image.png">
可以看到<code v-pre>ngComponentOutlet</code>指令将hello组件渲染到app组件中。</p>
<h2 id="其他控制项" tabindex="-1"><a class="header-anchor" href="#其他控制项" aria-hidden="true">#</a> 其他控制项</h2>
<p>它还有一些其他配置项，可以精确实现组件的创建：</p>
<ul>
<li><code v-pre>ngComponentOutletInjector</code>:可选的，自定义 Injector，将用作此组件的父级。默认为当前视图容器的注入器。</li>
<li><code v-pre>ngComponentOutletContent</code>:可选的，要插入到组件内容部分的可投影节点列表（如果存在）</li>
<li><code v-pre>ngComponentOutletNgModuleFactory</code>: 可选的，模块工厂允许动态加载其他模块，然后从该模块加载组件。（v14版本将会废弃，改用ngComponentOutletNgModule）</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NameService</span> <span class="token punctuation">{</span> <span class="token comment">// 一个服务</span>
  myName <span class="token operator">=</span> <span class="token string">'EnochGao'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-content'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;span>{{text}}&lt;/span>
    &lt;div>
      name:{{nameService.myName}}
    &lt;/div>
    &lt;ng-content>&lt;/ng-content>
    &lt;ng-content>&lt;/ng-content>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    :host{
      display:block;
      border:1px solid red;
    }
   </span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ContentComponent</span> <span class="token punctuation">{</span> <span class="token comment">// content模板组件，依赖服务</span>
  text <span class="token operator">=</span> <span class="token string">'content组件已加载！'</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> nameService<span class="token operator">:</span> NameService<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  &lt;ng-container *ngComponentOutlet="contentComponent;injector: myInjector;content: myContent">
  &lt;/ng-container>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  style<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span> <span class="token comment">// app组件</span>
  contentComponent <span class="token operator">=</span> ContentComponent<span class="token punctuation">;</span>
  myInjector<span class="token operator">:</span> Injector<span class="token punctuation">;</span>
  myContent<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">private</span> injector<span class="token operator">:</span> Injector<span class="token punctuation">,</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Inject</span></span><span class="token punctuation">(</span><span class="token constant">DOCUMENT</span><span class="token punctuation">)</span> <span class="token keyword">private</span> document<span class="token operator">:</span> Document
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> text1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">'投影内容1...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    div1<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> div2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> text2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">'投影内容2...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    div2<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>text2<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>myContent <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>div1<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>div2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myInjector <span class="token operator">=</span> Injector<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> provide<span class="token operator">:</span> NameService<span class="token punctuation">,</span> deps<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    parent<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>injector
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：
<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0ac77b8e8474c7b98c96516a5a0bdd2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<p>此外我们还可以指定<code v-pre>ngComponentOutletNgModuleFactory</code>(v14版本中模块工厂会被删除，将会直接传递moduleRef)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-core-demo'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;span>{{text}}&lt;/span>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    :host{
      display:block;
      border:1px solid green;
    }</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CoreDemoComponent</span> <span class="token punctuation">{</span> <span class="token comment">// core组件</span>
  text <span class="token operator">=</span> <span class="token string">'core组件已加载！'</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  declarations<span class="token operator">:</span> <span class="token punctuation">[</span>
    CoreDemoComponent
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    CommonModule<span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CoreModule</span> <span class="token punctuation">{</span> <span class="token comment">// core模块，注意后续我们不会将coreModule引入到AppModule中</span>
<span class="token comment">// 看看是否会加载成功</span>
<span class="token punctuation">}</span>


<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;ng-container *ngComponentOutlet="coreComponent;ngModuleFactory:factory">&lt;/ng-container>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  style<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span> <span class="token comment">// app组件</span>
  coreComponent <span class="token operator">=</span> CoreDemoComponent<span class="token punctuation">;</span> <span class="token comment">// 引入core组件</span>
  factory<span class="token operator">:</span> NgModuleFactory<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>
    <span class="token keyword">private</span> compiler<span class="token operator">:</span> Compiler<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>factory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span><span class="token function">compileModuleSync</span><span class="token punctuation">(</span>CoreModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1322c0b835cb446891d248e5161c8439~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<h2 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Directive</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> selector<span class="token operator">:</span> <span class="token string">'[ngComponentOutlet]'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgComponentOutlet</span> <span class="token keyword">implements</span> <span class="token class-name">OnChanges</span><span class="token punctuation">,</span> OnDestroy <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> ngComponentOutlet<span class="token operator">!</span><span class="token operator">:</span> Type<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> ngComponentOutletInjector<span class="token operator">!</span><span class="token operator">:</span> Injector<span class="token punctuation">;</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> ngComponentOutletContent<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> ngComponentOutletNgModuleFactory<span class="token operator">!</span><span class="token operator">:</span> NgModuleFactory<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> _componentRef<span class="token operator">:</span> ComponentRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> _moduleRef<span class="token operator">:</span> NgModuleRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> _viewContainerRef<span class="token operator">:</span> ViewContainerRef<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

  <span class="token function">ngOnChanges</span><span class="token punctuation">(</span>changes<span class="token operator">:</span> SimpleChanges<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>_viewContainerRef<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_componentRef <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutlet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> elInjector <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutletInjector <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_viewContainerRef<span class="token punctuation">.</span>parentInjector<span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>changes<span class="token punctuation">[</span><span class="token string">'ngComponentOutletNgModuleFactory'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutletNgModuleFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> parentModule <span class="token operator">=</span> elInjector<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>NgModuleRef<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutletNgModuleFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>parentModule<span class="token punctuation">.</span>injector<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

       <span class="token comment">// 找到解析组件工厂</span>
      <span class="token keyword">const</span> componentFactoryResolver <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef <span class="token operator">?</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef<span class="token punctuation">.</span>componentFactoryResolver <span class="token operator">:</span>
        elInjector<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ComponentFactoryResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> componentFactory <span class="token operator">=</span> componentFactoryResolver<span class="token punctuation">.</span><span class="token function">resolveComponentFactory</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutlet<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>_componentRef <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_viewContainerRef<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span>
        componentFactory<span class="token punctuation">,</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_viewContainerRef<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        elInjector<span class="token punctuation">,</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ngComponentOutletContent
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">ngOnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_moduleRef<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实代码的核心实现思路是：找到传入组件的<code v-pre>componentFactoryResolver</code>(组件工厂解析器)这个工厂对象，然后通过<code v-pre>ViewContainerRef</code>的createComponent方法，将组建渲染到视图容器中。至于传入模块工厂的方式:首先找到传入组件对应的模块引用，模块引用下有对应组件的组件工厂解析器。</p>
<p>可见<code v-pre>ViewContainerRef</code>这个类功能强大，<code v-pre>ngTemplateOutlet</code>模板渲染，最终也是通过它来创建的。</p>
<h2 id="思维扩展" tabindex="-1"><a class="header-anchor" href="#思维扩展" aria-hidden="true">#</a> 思维扩展</h2>
<p>实际项目中是否存在动态加载组件的需求，比如一个广告位轮播功能（每一个广告是一个组件，通过<code v-pre>ngComponentOutlet</code>我们可以实现广告的动态轮播）。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>我们可以通过<code v-pre>ngComponentOutlet</code>指令的形式加载组件，而不是在模板中通过标签的形式加载。它可以实现通过代码进行灵活加载组件，将父组件与子组件进行解耦，符合开闭原则。</p>
</div></template>


