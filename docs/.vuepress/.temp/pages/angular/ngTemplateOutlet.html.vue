<template><div><h1 id="ngtemplateoutlet" tabindex="-1"><a class="header-anchor" href="#ngtemplateoutlet" aria-hidden="true">#</a> ngTemplateOutlet</h1>
<h2 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h2>
<p>假设你已了解Angular框架的基本使用，知晓<a href="https://angular.cn/guide/built-in-directives" target="_blank" rel="noopener noreferrer">指令<ExternalLinkIcon/></a>等相关概念及作用。</p>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<p><code v-pre>ngTemplateOutlet</code>：根据一个提前备好的<code v-pre>TemplateRef</code>插入一个内嵌视图。</p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<p>平常在使用一些第三方库组件的时候，比如<a href="https://ng.ant.design/docs/introduce/zh" target="_blank" rel="noopener noreferrer">ng-zorro<ExternalLinkIcon/></a>中的<a href="https://ng.ant.design/components/rate/zh" target="_blank" rel="noopener noreferrer">Rate评分<ExternalLinkIcon/></a>组件，查看api文档时会发现其中<code v-pre>nzCharacter</code>属性可以传递一个TemplateRef类型值，从而实现用户自定义功能。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>[nzCharacter]</td>
<td>自定义字符</td>
<td><code v-pre>TemplateRef&lt;void&gt;</code></td>
<td><code v-pre>&lt;i nz-icon nzType=&quot;star&quot;&gt;&lt;/i&gt;</code></td>
</tr>
</tbody>
</table>
<p>demo:</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a170c96a5f74b57893a70ae4c80c89b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>import { Component } from '@angular/core';

@Component({ selector: 'nz-demo-rate-character',
template: `
    &lt;nz-rate [ngModel]=&quot;0&quot; nzAllowHalf [nzCharacter]=&quot;characterIcon&quot;&gt;&lt;/nz-rate&gt;
    &lt;ng-template #characterIcon let-num&gt;&lt;i nz-icon nzType=&quot;heart&quot;&gt;&lt;/i&gt;&lt;/ng-template&gt;
`,
styles: []
})
export class NzDemoRateCharacterComponent {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那他是怎么实现的，为什么传递一个TemplateRef类型模板就会实现自定义，看一下它的<a href="https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/rate/rate-item.component.ts" target="_blank" rel="noopener noreferrer">源码<ExternalLinkIcon/></a>
因为评分列表有多个item，所以<code v-pre>nzCharacter</code>最终作用到<code v-pre>NzRateItemComponent</code>组件上：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;div class=&quot;ant-rate-star-second&quot; (mouseover)=&quot;hoverRate(false); $event.stopPropagation()&quot;
(click)=&quot;clickRate(false)&quot;&gt;
    &lt;ng-template
      [ngTemplateOutlet]=&quot;character || defaultCharacter&quot;
      [ngTemplateOutletContext]=&quot;{ $implicit: index }&quot;
    &gt;&lt;/ng-template&gt;
&lt;/div&gt;

&lt;div class=&quot;ant-rate-star-first&quot; (mouseover)=&quot;hoverRate(true); $event.stopPropagation()&quot; (click)=&quot;clickRate(true)&quot;&gt;
    &lt;ng-template
      [ngTemplateOutlet]=&quot;character || defaultCharacter&quot;
      [ngTemplateOutletContext]=&quot;{ $implicit: index }&quot;
    &gt;&lt;/ng-template&gt;
&lt;/div&gt;

&lt;ng-template #defaultCharacter&gt;
&lt;i nz-icon nzType=&quot;star&quot; nzTheme=&quot;fill&quot;&gt;&lt;/i&gt;
&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示我们发现<code v-pre>character</code>属性赋值给了<code v-pre>ngTemplateOutlet</code>。</p>
<p>综述上层用户自定义的模板（这里的小心心）作为扩展传递给评分组件，组件通过<code v-pre>ngTemplateOutlet</code>从而实现了用户可定制化功能。</p>
<p>让我们继续剖析<code v-pre>ngTemplateOutlet</code>是怎么实现的。</p>
<h2 id="ngtemplateoutlet-源码分析-v13-3-x" tabindex="-1"><a class="header-anchor" href="#ngtemplateoutlet-源码分析-v13-3-x" aria-hidden="true">#</a> ngTemplateOutlet 源码分析（v13.3.x）</h2>
<p>其实<code v-pre>ngTemplateOutlet</code>是一个angular框架的内置结构指令。源码地址<a href="https://github.com/angular/angular/tree/13.3.x/packages/common/src/directives/ng_template_outlet.ts" target="_blank" rel="noopener noreferrer">戳<ExternalLinkIcon/></a>。</p>
<p>它在common包的directives文件夹中，所以说要想使用这个指令，项目module中必须引入<code v-pre>CommonModule</code>,当然<code v-pre>CommonModule</code>还有很多东西，它实现Angular框架的基本功能，包括指令和管道、路由中使用的位置服务、HTTP服务、本地化支持等等，这个以后再进行介绍。（ps:如果你是使用<code v-pre>ng g m xxx</code>脚手架生成，cli会默认将<code v-pre>CommonModule</code>导入到xxx.module中，开发时内置组件指令使用报错可以检查一下是否不小心删掉了<code v-pre>CommonModule</code>这是一个小技巧）。</p>
<p>言归正传，我们看一下<code v-pre>ngTemplateOutlet</code>的实现，代码不多，直接贴出来方便阅读：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>import {Directive, EmbeddedViewRef, Injector, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * 根据一个提前备好的 TemplateRef 插入一个内嵌视图。
 *
 * 你可以通过设置 [ngTemplateOutletContext] 来给 EmbeddedViewRef 附加一个上下文对象。
 * [ngTemplateOutletContext] 是一个对象，该对象的 key 可在模板中使用 let 语句进行绑定。
 *
 * @usageNotes
 * ```html
 * &lt;ng-container *ngTemplateOutlet=&quot;templateRefExp; context: contextExp&quot;&gt;&lt;/ng-container&gt;
 * ```
 * 在上下文对象中使用 $implicit 这个 key 会把对应的值设置为默认值
 *
 */
@Directive({ selector: '[ngTemplateOutlet]' })
export class NgTemplateOutlet implements OnChanges {
  private _viewRef: EmbeddedViewRef&lt;any&gt; | null = null;

  /**
   * 附加到 {@link EmbeddedViewRef} 的上下文对象。这应该是一个对象，该对象的键名将可以在局部模板中使用 let 声明中进行绑定。
   * 在上下文对象中使用 $implicit 为键名时，将把它作为默认值
   */
  @Input() public ngTemplateOutletContext: Object | null = null;

  /**
   * 一个字符串，用于定义模板引用以及模板的上下文对象
   */
  @Input() public ngTemplateOutlet: TemplateRef&lt;any&gt; | null = null;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  /** @nodoc */
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ngTemplateOutlet']) {
      const viewContainerRef = this._viewContainerRef;

      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }

      this._viewRef = this.ngTemplateOutlet ?
        viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext) :
        null;
    } else if (
      this._viewRef &amp;&amp; changes['ngTemplateOutletContext'] &amp;&amp; this.ngTemplateOutletContext) {
      this._viewRef.context = this.ngTemplateOutletContext;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>个人还是觉得angular源码注释做的还是很好(上述注释给翻译了一下)，我们应该养成写注释的好习惯。</em></p>
<p>我们发现<code v-pre>NgTemplateOutlet</code>类实现了<code v-pre>OnChanges</code>钩子函数，目的是当@Input属性值发生改变时能够进行创建新的视图。它有两个输入属性:<code v-pre>ngTemplateOutlet</code>和<code v-pre>ngTemplateOutletContext</code>。<code v-pre>ngTemplateOutlet</code>就是TemplateRef类型的模板片段，<code v-pre>ngTemplateOutletContext</code>是一个的对象，他来给 <code v-pre>EmbeddedViewRef</code>(内嵌式视图，也就是自定义的ng-template) 附加一个上下文，该对象的 key 可在模板中使用 let 语句进行绑定。</p>
<p>例如刚才的评分组件，如果<code v-pre>[ngTemplateOutletContext]=&quot;{ $implicit: index ;a:1}&quot;</code>就可以将index的值，a=1传递给上层的<code v-pre>&lt;ng-template&gt;</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;ng-template let-num let-xxx=&quot;a&quot;&gt;{{num}}{{xxx}}&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用let定义两个变量分别是num和xxx，这将会获得num(实际组件内部的index)和xxx(实际a的值也就是1)的值。这么做的好处是，组件内部状态可以传递出去，让上层获取到想要的数据。</p>
<p>这里有个小技巧，<code v-pre>$implicit</code>作为默认key，模板中用let-num定义变量时默认取<code v-pre>$implicit</code>对应的值，其他key值需要被赋值：let-xxx='a'。</p>
<h2 id="实现逻辑" tabindex="-1"><a class="header-anchor" href="#实现逻辑" aria-hidden="true">#</a> 实现逻辑</h2>
<p>本质使用<code v-pre>ViewContainerRef</code>里的<code v-pre>createEmbeddedView()</code>方法创建内嵌式视图。<code v-pre>ViewContainerRef</code>不仅是创建内嵌式视图，还可以用来创建组件。后续会介绍<code v-pre>ViewContainerRef</code>。</p>
<p>代码逻辑：</p>
<ol>
<li>如果ngTemplateOutlet有输入</li>
<li>先判断当前容器内有没有视图（_viewRef），如果有先清空视图容器</li>
<li>调用<code v-pre>createEmbeddedView()</code>创建内嵌式视图</li>
<li>如果当前视图容器不为空且ngTemplateOutletContext有输入，则给创建的视图（_viewRef）添加上下文</li>
</ol>
<h2 id="简写形式" tabindex="-1"><a class="header-anchor" href="#简写形式" aria-hidden="true">#</a> 简写形式</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;ng-container *ngTemplateOutlet=&quot;temp;context:context;&quot;&gt;&lt;/ng-container&gt;
这是ng的简写形式，最终由编译器解开等同于下面的格式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;ng-container [ngTemplateOutlet]=&quot;temp&quot; [ngTemplateOutletContext]=&quot;context&quot;&gt;&lt;/ng-container&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>// 使用简写形式确保都是以ngTemplateOutlet开头
@Directive({ selector: '[ngTemplateOutlet]' })
@Input() public ngTemplateOutlet: TemplateRef&lt;any&gt; | null = null;
@Input() public ngTemplateOutletContext: Object | null = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思维扩展" tabindex="-1"><a class="header-anchor" href="#思维扩展" aria-hidden="true">#</a> 思维扩展</h2>
<p>可以用投影的方式实现组件扩展，类似于：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;a-component&gt;
  &lt;ng-template&gt;hi,Enoch Gao!&lt;/ng-template&gt;
&lt;/a-component&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a-component内部通过@ContentChild注解获取TemplateRef也是一种比较常见扩展实现方式。</p>
<p>TemplateRef的获取方式有多种方式：</p>
<ol>
<li>可以通过@ViewChild@ViewChildren@ContentChild@ContentChildren查询的方式</li>
<li>也可以<code v-pre>&lt;ng-template #temp&gt;</code>定义变量的形式</li>
<li>还可以自定义指令</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;ng-template appCustomDir&gt;我是扩展内容&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过appCustomDir指令构造函数中注入<code v-pre>constructor(private temp:TemplateRef){}</code>获取到TemplateRef
4. ...</p>
<p>万变不离其宗，只要我们获取到了TemplateRef就可以实现扩展。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>通过内置指令<code v-pre>ngTemplateOutlet</code>可以实现组件定制化功能，在我们写通用组件的时候可提高组件的规范化，定制化能力。</p>
</div></template>


