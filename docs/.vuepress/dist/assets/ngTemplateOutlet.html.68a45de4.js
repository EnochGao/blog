import{_ as a,o as d,c as s,a as e,b as i,d as t,e as l,r as o}from"./app.1b97009a.js";const c={},r=e("h1",{id:"ngtemplateoutlet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ngtemplateoutlet","aria-hidden":"true"},"#"),t(" ngTemplateOutlet")],-1),u=e("h2",{id:"\u524D\u63D0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u63D0","aria-hidden":"true"},"#"),t(" \u524D\u63D0")],-1),m=t("\u5047\u8BBE\u4F60\u5DF2\u4E86\u89E3Angular\u6846\u67B6\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u77E5\u6653"),v={href:"https://angular.cn/guide/built-in-directives",target:"_blank",rel:"noopener noreferrer"},p=t("\u6307\u4EE4"),g=t("\u7B49\u76F8\u5173\u6982\u5FF5\u53CA\u4F5C\u7528\u3002"),h=e("h2",{id:"\u529F\u80FD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u529F\u80FD","aria-hidden":"true"},"#"),t(" \u529F\u80FD")],-1),b=e("p",null,[e("code",null,"ngTemplateOutlet"),t("\uFF1A\u6839\u636E\u4E00\u4E2A\u63D0\u524D\u5907\u597D\u7684"),e("code",null,"TemplateRef"),t("\u63D2\u5165\u4E00\u4E2A\u5185\u5D4C\u89C6\u56FE\u3002")],-1),_=e("h2",{id:"\u7528\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7528\u6CD5","aria-hidden":"true"},"#"),t(" \u7528\u6CD5")],-1),f=t("\u5E73\u5E38\u5728\u4F7F\u7528\u4E00\u4E9B\u7B2C\u4E09\u65B9\u5E93\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u6BD4\u5982"),x={href:"https://ng.ant.design/docs/introduce/zh",target:"_blank",rel:"noopener noreferrer"},T=t("ng-zorro"),C=t("\u4E2D\u7684"),O={href:"https://ng.ant.design/components/rate/zh",target:"_blank",rel:"noopener noreferrer"},R=t("Rate\u8BC4\u5206"),q=t("\u7EC4\u4EF6\uFF0C\u67E5\u770Bapi\u6587\u6863\u65F6\u4F1A\u53D1\u73B0\u5176\u4E2D"),w=e("code",null,"nzCharacter",-1),k=t("\u5C5E\u6027\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2ATemplateRef\u7C7B\u578B\u503C\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7528\u6237\u81EA\u5B9A\u4E49\u529F\u80FD\u3002"),y=l(`<table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>[nzCharacter]</td><td>\u81EA\u5B9A\u4E49\u5B57\u7B26</td><td><code>TemplateRef&lt;void&gt;</code></td><td><code>&lt;i nz-icon nzType=&quot;star&quot;&gt;&lt;/i&gt;</code></td></tr></tbody></table><p>demo:</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a170c96a5f74b57893a70ae4c80c89b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import { Component } from &#39;@angular/core&#39;;

@Component({ selector: &#39;nz-demo-rate-character&#39;,
template: \`
    &lt;nz-rate [ngModel]=&quot;0&quot; nzAllowHalf [nzCharacter]=&quot;characterIcon&quot;&gt;&lt;/nz-rate&gt;
    &lt;ng-template #characterIcon let-num&gt;&lt;i nz-icon nzType=&quot;heart&quot;&gt;&lt;/i&gt;&lt;/ng-template&gt;
\`,
styles: []
})
export class NzDemoRateCharacterComponent {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),z=t("\u90A3\u4ED6\u662F\u600E\u4E48\u5B9E\u73B0\u7684\uFF0C\u4E3A\u4EC0\u4E48\u4F20\u9012\u4E00\u4E2ATemplateRef\u7C7B\u578B\u6A21\u677F\u5C31\u4F1A\u5B9E\u73B0\u81EA\u5B9A\u4E49\uFF0C\u770B\u4E00\u4E0B\u5B83\u7684"),V={href:"https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/rate/rate-item.component.ts",target:"_blank",rel:"noopener noreferrer"},E=t("\u6E90\u7801"),I=t(" \u56E0\u4E3A\u8BC4\u5206\u5217\u8868\u6709\u591A\u4E2Aitem\uFF0C\u6240\u4EE5"),N=e("code",null,"nzCharacter",-1),$=t("\u6700\u7EC8\u4F5C\u7528\u5230"),M=e("code",null,"NzRateItemComponent",-1),D=t("\u7EC4\u4EF6\u4E0A\uFF1A"),j=l(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div class=&quot;ant-rate-star-second&quot; (mouseover)=&quot;hoverRate(false); $event.stopPropagation()&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0A\u6240\u793A\u6211\u4EEC\u53D1\u73B0<code>character</code>\u5C5E\u6027\u8D4B\u503C\u7ED9\u4E86<code>ngTemplateOutlet</code>\u3002</p><p>\u7EFC\u8FF0\u4E0A\u5C42\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u6A21\u677F\uFF08\u8FD9\u91CC\u7684\u5C0F\u5FC3\u5FC3\uFF09\u4F5C\u4E3A\u6269\u5C55\u4F20\u9012\u7ED9\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u901A\u8FC7<code>ngTemplateOutlet</code>\u4ECE\u800C\u5B9E\u73B0\u4E86\u7528\u6237\u53EF\u5B9A\u5236\u5316\u529F\u80FD\u3002</p><p>\u8BA9\u6211\u4EEC\u7EE7\u7EED\u5256\u6790<code>ngTemplateOutlet</code>\u662F\u600E\u4E48\u5B9E\u73B0\u7684\u3002</p><h2 id="ngtemplateoutlet-\u6E90\u7801\u5206\u6790-v13-3-x" tabindex="-1"><a class="header-anchor" href="#ngtemplateoutlet-\u6E90\u7801\u5206\u6790-v13-3-x" aria-hidden="true">#</a> ngTemplateOutlet \u6E90\u7801\u5206\u6790\uFF08v13.3.x\uFF09</h2>`,5),A=t("\u5176\u5B9E"),B=e("code",null,"ngTemplateOutlet",-1),P=t("\u662F\u4E00\u4E2Aangular\u6846\u67B6\u7684\u5185\u7F6E\u7ED3\u6784\u6307\u4EE4\u3002\u6E90\u7801\u5730\u5740"),S={href:"https://github.com/angular/angular/tree/13.3.x/packages/common/src/directives/ng_template_outlet.ts",target:"_blank",rel:"noopener noreferrer"},G=t("\u6233"),H=t("\u3002"),L=l(`<p>\u5B83\u5728common\u5305\u7684directives\u6587\u4EF6\u5939\u4E2D\uFF0C\u6240\u4EE5\u8BF4\u8981\u60F3\u4F7F\u7528\u8FD9\u4E2A\u6307\u4EE4\uFF0C\u9879\u76EEmodule\u4E2D\u5FC5\u987B\u5F15\u5165<code>CommonModule</code>,\u5F53\u7136<code>CommonModule</code>\u8FD8\u6709\u5F88\u591A\u4E1C\u897F\uFF0C\u5B83\u5B9E\u73B0Angular\u6846\u67B6\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u5305\u62EC\u6307\u4EE4\u548C\u7BA1\u9053\u3001\u8DEF\u7531\u4E2D\u4F7F\u7528\u7684\u4F4D\u7F6E\u670D\u52A1\u3001HTTP\u670D\u52A1\u3001\u672C\u5730\u5316\u652F\u6301\u7B49\u7B49\uFF0C\u8FD9\u4E2A\u4EE5\u540E\u518D\u8FDB\u884C\u4ECB\u7ECD\u3002\uFF08ps:\u5982\u679C\u4F60\u662F\u4F7F\u7528<code>ng g m xxx</code>\u811A\u624B\u67B6\u751F\u6210\uFF0Ccli\u4F1A\u9ED8\u8BA4\u5C06<code>CommonModule</code>\u5BFC\u5165\u5230xxx.module\u4E2D\uFF0C\u5F00\u53D1\u65F6\u5185\u7F6E\u7EC4\u4EF6\u6307\u4EE4\u4F7F\u7528\u62A5\u9519\u53EF\u4EE5\u68C0\u67E5\u4E00\u4E0B\u662F\u5426\u4E0D\u5C0F\u5FC3\u5220\u6389\u4E86<code>CommonModule</code>\u8FD9\u662F\u4E00\u4E2A\u5C0F\u6280\u5DE7\uFF09\u3002</p><p>\u8A00\u5F52\u6B63\u4F20\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B<code>ngTemplateOutlet</code>\u7684\u5B9E\u73B0\uFF0C\u4EE3\u7801\u4E0D\u591A\uFF0C\u76F4\u63A5\u8D34\u51FA\u6765\u65B9\u4FBF\u9605\u8BFB\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>import {Directive, EmbeddedViewRef, Injector, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from &#39;@angular/core&#39;;

/**
 * @ngModule CommonModule
 *
 * @description
 *
 * \u6839\u636E\u4E00\u4E2A\u63D0\u524D\u5907\u597D\u7684 TemplateRef \u63D2\u5165\u4E00\u4E2A\u5185\u5D4C\u89C6\u56FE\u3002
 *
 * \u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E [ngTemplateOutletContext] \u6765\u7ED9 EmbeddedViewRef \u9644\u52A0\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002
 * [ngTemplateOutletContext] \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7684 key \u53EF\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 let \u8BED\u53E5\u8FDB\u884C\u7ED1\u5B9A\u3002
 *
 * @usageNotes
 * \`\`\`html
 * &lt;ng-container *ngTemplateOutlet=&quot;templateRefExp; context: contextExp&quot;&gt;&lt;/ng-container&gt;
 * \`\`\`
 * \u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u4F7F\u7528 $implicit \u8FD9\u4E2A key \u4F1A\u628A\u5BF9\u5E94\u7684\u503C\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u503C
 *
 */
@Directive({ selector: &#39;[ngTemplateOutlet]&#39; })
export class NgTemplateOutlet implements OnChanges {
  private _viewRef: EmbeddedViewRef&lt;any&gt; | null = null;

  /**
   * \u9644\u52A0\u5230 {@link EmbeddedViewRef} \u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002\u8FD9\u5E94\u8BE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7684\u952E\u540D\u5C06\u53EF\u4EE5\u5728\u5C40\u90E8\u6A21\u677F\u4E2D\u4F7F\u7528 let \u58F0\u660E\u4E2D\u8FDB\u884C\u7ED1\u5B9A\u3002
   * \u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u4F7F\u7528 $implicit \u4E3A\u952E\u540D\u65F6\uFF0C\u5C06\u628A\u5B83\u4F5C\u4E3A\u9ED8\u8BA4\u503C
   */
  @Input() public ngTemplateOutletContext: Object | null = null;

  /**
   * \u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6A21\u677F\u5F15\u7528\u4EE5\u53CA\u6A21\u677F\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61
   */
  @Input() public ngTemplateOutlet: TemplateRef&lt;any&gt; | null = null;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  /** @nodoc */
  ngOnChanges(changes: SimpleChanges) {
    if (changes[&#39;ngTemplateOutlet&#39;]) {
      const viewContainerRef = this._viewContainerRef;

      if (this._viewRef) {
        viewContainerRef.remove(viewContainerRef.indexOf(this._viewRef));
      }

      this._viewRef = this.ngTemplateOutlet ?
        viewContainerRef.createEmbeddedView(this.ngTemplateOutlet, this.ngTemplateOutletContext) :
        null;
    } else if (
      this._viewRef &amp;&amp; changes[&#39;ngTemplateOutletContext&#39;] &amp;&amp; this.ngTemplateOutletContext) {
      this._viewRef.context = this.ngTemplateOutletContext;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>\u4E2A\u4EBA\u8FD8\u662F\u89C9\u5F97angular\u6E90\u7801\u6CE8\u91CA\u505A\u7684\u8FD8\u662F\u5F88\u597D(\u4E0A\u8FF0\u6CE8\u91CA\u7ED9\u7FFB\u8BD1\u4E86\u4E00\u4E0B)\uFF0C\u6211\u4EEC\u5E94\u8BE5\u517B\u6210\u5199\u6CE8\u91CA\u7684\u597D\u4E60\u60EF\u3002</em></p><p>\u6211\u4EEC\u53D1\u73B0<code>NgTemplateOutlet</code>\u7C7B\u5B9E\u73B0\u4E86<code>OnChanges</code>\u94A9\u5B50\u51FD\u6570\uFF0C\u76EE\u7684\u662F\u5F53@Input\u5C5E\u6027\u503C\u53D1\u751F\u6539\u53D8\u65F6\u80FD\u591F\u8FDB\u884C\u521B\u5EFA\u65B0\u7684\u89C6\u56FE\u3002\u5B83\u6709\u4E24\u4E2A\u8F93\u5165\u5C5E\u6027:<code>ngTemplateOutlet</code>\u548C<code>ngTemplateOutletContext</code>\u3002<code>ngTemplateOutlet</code>\u5C31\u662FTemplateRef\u7C7B\u578B\u7684\u6A21\u677F\u7247\u6BB5\uFF0C<code>ngTemplateOutletContext</code>\u662F\u4E00\u4E2A\u7684\u5BF9\u8C61\uFF0C\u4ED6\u6765\u7ED9 <code>EmbeddedViewRef</code>(\u5185\u5D4C\u5F0F\u89C6\u56FE\uFF0C\u4E5F\u5C31\u662F\u81EA\u5B9A\u4E49\u7684ng-template) \u9644\u52A0\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u8BE5\u5BF9\u8C61\u7684 key \u53EF\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 let \u8BED\u53E5\u8FDB\u884C\u7ED1\u5B9A\u3002</p><p>\u4F8B\u5982\u521A\u624D\u7684\u8BC4\u5206\u7EC4\u4EF6\uFF0C\u5982\u679C<code>[ngTemplateOutletContext]=&quot;{ $implicit: index ;a:1}&quot;</code>\u5C31\u53EF\u4EE5\u5C06index\u7684\u503C\uFF0Ca=1\u4F20\u9012\u7ED9\u4E0A\u5C42\u7684<code>&lt;ng-template&gt;</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-template let-num let-xxx=&quot;a&quot;&gt;{{num}}{{xxx}}&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7528let\u5B9A\u4E49\u4E24\u4E2A\u53D8\u91CF\u5206\u522B\u662Fnum\u548Cxxx\uFF0C\u8FD9\u5C06\u4F1A\u83B7\u5F97num(\u5B9E\u9645\u7EC4\u4EF6\u5185\u90E8\u7684index)\u548Cxxx(\u5B9E\u9645a\u7684\u503C\u4E5F\u5C31\u662F1)\u7684\u503C\u3002\u8FD9\u4E48\u505A\u7684\u597D\u5904\u662F\uFF0C\u7EC4\u4EF6\u5185\u90E8\u72B6\u6001\u53EF\u4EE5\u4F20\u9012\u51FA\u53BB\uFF0C\u8BA9\u4E0A\u5C42\u83B7\u53D6\u5230\u60F3\u8981\u7684\u6570\u636E\u3002</p><p>\u8FD9\u91CC\u6709\u4E2A\u5C0F\u6280\u5DE7\uFF0C<code>$implicit</code>\u4F5C\u4E3A\u9ED8\u8BA4key\uFF0C\u6A21\u677F\u4E2D\u7528let-num\u5B9A\u4E49\u53D8\u91CF\u65F6\u9ED8\u8BA4\u53D6<code>$implicit</code>\u5BF9\u5E94\u7684\u503C\uFF0C\u5176\u4ED6key\u503C\u9700\u8981\u88AB\u8D4B\u503C\uFF1Alet-xxx=&#39;a&#39;\u3002</p><h2 id="\u5B9E\u73B0\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u903B\u8F91" aria-hidden="true">#</a> \u5B9E\u73B0\u903B\u8F91</h2><p>\u672C\u8D28\u4F7F\u7528<code>ViewContainerRef</code>\u91CC\u7684<code>createEmbeddedView()</code>\u65B9\u6CD5\u521B\u5EFA\u5185\u5D4C\u5F0F\u89C6\u56FE\u3002<code>ViewContainerRef</code>\u4E0D\u4EC5\u662F\u521B\u5EFA\u5185\u5D4C\u5F0F\u89C6\u56FE\uFF0C\u8FD8\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u7EC4\u4EF6\u3002\u540E\u7EED\u4F1A\u4ECB\u7ECD<code>ViewContainerRef</code>\u3002</p><p>\u4EE3\u7801\u903B\u8F91\uFF1A</p><ol><li>\u5982\u679CngTemplateOutlet\u6709\u8F93\u5165</li><li>\u5148\u5224\u65AD\u5F53\u524D\u5BB9\u5668\u5185\u6709\u6CA1\u6709\u89C6\u56FE\uFF08_viewRef\uFF09\uFF0C\u5982\u679C\u6709\u5148\u6E05\u7A7A\u89C6\u56FE\u5BB9\u5668</li><li>\u8C03\u7528<code>createEmbeddedView()</code>\u521B\u5EFA\u5185\u5D4C\u5F0F\u89C6\u56FE</li><li>\u5982\u679C\u5F53\u524D\u89C6\u56FE\u5BB9\u5668\u4E0D\u4E3A\u7A7A\u4E14ngTemplateOutletContext\u6709\u8F93\u5165\uFF0C\u5219\u7ED9\u521B\u5EFA\u7684\u89C6\u56FE\uFF08_viewRef\uFF09\u6DFB\u52A0\u4E0A\u4E0B\u6587</li></ol><h2 id="\u7B80\u5199\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u5F62\u5F0F" aria-hidden="true">#</a> \u7B80\u5199\u5F62\u5F0F</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-container *ngTemplateOutlet=&quot;temp;context:context;&quot;&gt;&lt;/ng-container&gt;
\u8FD9\u662Fng\u7684\u7B80\u5199\u5F62\u5F0F\uFF0C\u6700\u7EC8\u7531\u7F16\u8BD1\u5668\u89E3\u5F00\u7B49\u540C\u4E8E\u4E0B\u9762\u7684\u683C\u5F0F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-container [ngTemplateOutlet]=&quot;temp&quot; [ngTemplateOutletContext]=&quot;context&quot;&gt;&lt;/ng-container&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u4F7F\u7528\u7B80\u5199\u5F62\u5F0F\u786E\u4FDD\u90FD\u662F\u4EE5ngTemplateOutlet\u5F00\u5934
@Directive({ selector: &#39;[ngTemplateOutlet]&#39; })
@Input() public ngTemplateOutlet: TemplateRef&lt;any&gt; | null = null;
@Input() public ngTemplateOutletContext: Object | null = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u601D\u7EF4\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u601D\u7EF4\u6269\u5C55" aria-hidden="true">#</a> \u601D\u7EF4\u6269\u5C55</h2><p>\u53EF\u4EE5\u7528\u6295\u5F71\u7684\u65B9\u5F0F\u5B9E\u73B0\u7EC4\u4EF6\u6269\u5C55\uFF0C\u7C7B\u4F3C\u4E8E\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;a-component&gt;
  &lt;ng-template&gt;hi,Enoch Gao!&lt;/ng-template&gt;
&lt;/a-component&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a-component\u5185\u90E8\u901A\u8FC7@ContentChild\u6CE8\u89E3\u83B7\u53D6TemplateRef\u4E5F\u662F\u4E00\u79CD\u6BD4\u8F83\u5E38\u89C1\u6269\u5C55\u5B9E\u73B0\u65B9\u5F0F\u3002</p><p>TemplateRef\u7684\u83B7\u53D6\u65B9\u5F0F\u6709\u591A\u79CD\u65B9\u5F0F\uFF1A</p><ol><li>\u53EF\u4EE5\u901A\u8FC7@ViewChild@ViewChildren@ContentChild@ContentChildren\u67E5\u8BE2\u7684\u65B9\u5F0F</li><li>\u4E5F\u53EF\u4EE5<code>&lt;ng-template #temp&gt;</code>\u5B9A\u4E49\u53D8\u91CF\u7684\u5F62\u5F0F</li><li>\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6307\u4EE4</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-template appCustomDir&gt;\u6211\u662F\u6269\u5C55\u5185\u5BB9&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7appCustomDir\u6307\u4EE4\u6784\u9020\u51FD\u6570\u4E2D\u6CE8\u5165<code>constructor(private temp:TemplateRef){}</code>\u83B7\u53D6\u5230TemplateRef 4. ...</p><p>\u4E07\u53D8\u4E0D\u79BB\u5176\u5B97\uFF0C\u53EA\u8981\u6211\u4EEC\u83B7\u53D6\u5230\u4E86TemplateRef\u5C31\u53EF\u4EE5\u5B9E\u73B0\u6269\u5C55\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u901A\u8FC7\u5185\u7F6E\u6307\u4EE4<code>ngTemplateOutlet</code>\u53EF\u4EE5\u5B9E\u73B0\u7EC4\u4EF6\u5B9A\u5236\u5316\u529F\u80FD\uFF0C\u5728\u6211\u4EEC\u5199\u901A\u7528\u7EC4\u4EF6\u7684\u65F6\u5019\u53EF\u63D0\u9AD8\u7EC4\u4EF6\u7684\u89C4\u8303\u5316\uFF0C\u5B9A\u5236\u5316\u80FD\u529B\u3002</p>`,28);function Z(F,J){const n=o("ExternalLinkIcon");return d(),s("div",null,[r,u,e("p",null,[m,e("a",v,[p,i(n)]),g]),h,b,_,e("p",null,[f,e("a",x,[T,i(n)]),C,e("a",O,[R,i(n)]),q,w,k]),y,e("p",null,[z,e("a",V,[E,i(n)]),I,N,$,M,D]),j,e("p",null,[A,B,P,e("a",S,[G,i(n)]),H]),L])}var Q=a(c,[["render",Z],["__file","ngTemplateOutlet.html.vue"]]);export{Q as default};
