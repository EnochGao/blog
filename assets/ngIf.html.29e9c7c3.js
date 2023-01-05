import{_ as l,r as t,o as s,c as d,a as e,b as a,d as i,e as r}from"./app.e446c182.js";const v={},c=e("h1",{id:"ngif",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ngif","aria-hidden":"true"},"#"),i(" ngIf")],-1),u=e("h2",{id:"\u524D\u63D0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u63D0","aria-hidden":"true"},"#"),i(" \u524D\u63D0")],-1),m=i("\u5047\u8BBE\u4F60\u5DF2\u4E86\u89E3 Angular \u6846\u67B6\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u77E5\u6653"),o={href:"https://angular.cn/guide/built-in-directives",target:"_blank",rel:"noopener noreferrer"},b=i("\u6307\u4EE4"),g=i("\u7B49\u76F8\u5173\u6982\u5FF5\u53CA\u4F5C\u7528\u3002"),h=r(`<h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p><code>NgIf</code>\u6839\u636E\u8868\u8FBE\u5F0F\u7684\u503C\uFF08\u5F3A\u8F6C\u4E3A boolean\uFF09\u662F\u5426\u4E3A\u771F\u503C\uFF0C\u6765\u6709\u6761\u4EF6\u7684\u5305\u542B\u67D0\u4E2A\u6A21\u677F\u3002\u5F53\u8868\u8FBE\u5F0F\u8BA1\u7B97\u4E3A true \u65F6\uFF0CAngular \u4F1A\u6E32\u67D3 then \u5B50\u53E5\u4E2D\u63D0\u4F9B\u7684\u6A21\u677F\uFF0C\u5F53\u4E3A false \u6216 null \u65F6\u5219\u6E32\u67D3\u53EF\u9009\u7684 else \u5B50\u53E5\u4E2D\u7684\u6A21\u677F\u3002else \u5B50\u53E5\u7684\u9ED8\u8BA4\u6A21\u677F\u662F\u7A7A\u767D\u6A21\u677F\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><p>\u901A\u5E38\u4F7F\u7528\u6307\u4EE4\u7684\u7B80\u5199\u5F62\u5F0F: <code>*ngIf=&quot;condition&quot;</code>\uFF0C\u4F5C\u4E3A\u63D2\u5165\u6A21\u677F\u7684\u951A\u70B9\u5143\u7D20\u7684\u5C5E\u6027\u63D0\u4F9B\u3002 Angular \u5C06\u5176\u6269\u5C55\u4E3A\u66F4\u660E\u786E\u7684\u7248\u672C\uFF0C\u5176\u4E2D\u951A\u70B9\u5143\u7D20\u5305\u542B\u5728 <code>&lt;ng-template&gt;</code> \u5143\u7D20\u4E2D\u3002</p><p>\u5177\u6709\u7B80\u5199\u8BED\u6CD5\u7684\u7B80\u5355\u5F62\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div *ngIf=&quot;condition&quot;&gt;condition\u4E3Atrue\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5177\u6709\u6269\u5C55\u8BED\u6CD5\u5F62\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-template [ngIf]=&quot;condition&quot;&gt;
  &lt;div&gt;condition\u4E3Atrue\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/div&gt;
&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E26\u6709 else \u5757\u7684\u683C\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div *ngIf=&quot;condition; else elseBlock&quot;&gt;\u6761\u4EF6\u4E3Atrue\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/div&gt;

&lt;ng-template #elseBlock&gt;condition\u4E3Afalse\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E26\u6709 then else \u5757\u7684\u683C\u5F0F:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div *ngIf=&quot;condition; then thenBlock else elseBlock&quot;&gt;&lt;/div&gt;
&lt;ng-template #thenBlock&gt;condition\u4E3Atrue\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/ng-template&gt;
&lt;ng-template #elseBlock&gt;condition\u4E3Afalse\u65F6\u5185\u5BB9\u5C06\u88AB\u6E32\u67D3&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u503C\u5B58\u50A8\u4E3A\u672C\u5730\u53D8\u91CF\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div *ngIf=&quot;condition as value; else elseBlock&quot;&gt;{{value}}&lt;/div&gt;
&lt;ng-template #elseBlock&gt;value\u4E3Anull\u65F6\u5185\u5BB9\u88AB\u6E32\u67D3&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5199\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5199\u8BED\u6CD5" aria-hidden="true">#</a> \u7B80\u5199\u8BED\u6CD5</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;div class=&quot;hero-list&quot; *ngIf=&quot;heroes else loading&quot;&gt;...&lt;/div&gt;

&lt;ng-template #loading&gt;
  &lt;div&gt;Loading...&lt;/div&gt;
&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B49\u540C\u4E8E</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>&lt;ng-template [ngIf]=&quot;heroes&quot; [ngIfElse]=&quot;loading&quot;&gt;
  &lt;div class=&quot;hero-list&quot;&gt;...&lt;/div&gt;
&lt;/ng-template&gt;

&lt;ng-template #loading&gt;
  &lt;div&gt;Loading...&lt;/div&gt;
&lt;/ng-template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> \u6E90\u7801\u5206\u6790</h2><p>\u6E90\u7801\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>@Directive({
  selector: &#39;[ngIf]&#39;,
  standalone: true,
})
export class NgIf&lt;T = unknown&gt; {
  private _context: NgIfContext&lt;T&gt; = new NgIfContext&lt;T&gt;();
  private _thenTemplateRef: TemplateRef&lt;NgIfContext&lt;T&gt;&gt;|null = null;
  private _elseTemplateRef: TemplateRef&lt;NgIfContext&lt;T&gt;&gt;|null = null;
  private _thenViewRef: EmbeddedViewRef&lt;NgIfContext&lt;T&gt;&gt;|null = null;
  private _elseViewRef: EmbeddedViewRef&lt;NgIfContext&lt;T&gt;&gt;|null = null;

  constructor(private _viewContainer: ViewContainerRef, templateRef: TemplateRef&lt;NgIfContext&lt;T&gt;&gt;) {
    this._thenTemplateRef = templateRef;
  }

  /**
   * The Boolean expression to evaluate as the condition for showing a template.
   */
  @Input()
  set ngIf(condition: T) {
    this._context.$implicit = this._context.ngIf = condition;
    this._updateView();
  }

  /**
   * A template to show if the condition expression evaluates to true.
   */
  @Input()
  set ngIfThen(templateRef: TemplateRef&lt;NgIfContext&lt;T&gt;&gt;|null) {
    assertTemplate(&#39;ngIfThen&#39;, templateRef);
    this._thenTemplateRef = templateRef;
    this._thenViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  /**
   * A template to show if the condition expression evaluates to false.
   */
  @Input()
  set ngIfElse(templateRef: TemplateRef&lt;NgIfContext&lt;T&gt;&gt;|null) {
    assertTemplate(&#39;ngIfElse&#39;, templateRef);
    this._elseTemplateRef = templateRef;
    this._elseViewRef = null;  // clear previous view if any.
    this._updateView();
  }

  private _updateView() {
    if (this._context.$implicit) {
      if (!this._thenViewRef) {
        this._viewContainer.clear();
        this._elseViewRef = null;
        if (this._thenTemplateRef) {
          this._thenViewRef =
              this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
        }
      }
    } else {
      if (!this._elseViewRef) {
        this._viewContainer.clear();
        this._thenViewRef = null;
        if (this._elseTemplateRef) {
          this._elseViewRef =
              this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
        }
      }
    }
  }

  /** @internal */
  public static ngIfUseIfTypeGuard: void;

  /**
   * Assert the correct type of the expression bound to the \`ngIf\` input within the template.
   *
   * The presence of this static field is a signal to the Ivy template type check compiler that
   * when the \`NgIf\` structural directive renders its template, the type of the expression bound
   * to \`ngIf\` should be narrowed in some way. For \`NgIf\`, the binding expression itself is used to
   * narrow its type, which allows the strictNullChecks feature of TypeScript to work with \`NgIf\`.
   */
  static ngTemplateGuard_ngIf: &#39;binding&#39;;

  /**
   * Asserts the correct type of the context for the template that \`NgIf\` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * \`NgIf\` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard&lt;T&gt;(dir: NgIf&lt;T&gt;, ctx: any):
      ctx is NgIfContext&lt;Exclude&lt;T, false|0|&#39;&#39;|null|undefined&gt;&gt; {
    return true;
  }
}

/**
 * @publicApi
 */
export class NgIfContext&lt;T = unknown&gt; {
  public $implicit: T = null!;
  public ngIf: T = null!;
}

function assertTemplate(property: string, templateRef: TemplateRef&lt;any&gt;|null): void {
  const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
  if (!isTemplateRefOrNull) {
    throw new Error(\`\${property} must be a TemplateRef, but received &#39;\${stringify(templateRef)}&#39;.\`);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6838\u5FC3\u5B9E\u73B0\u90E8\u5206\u662F47\u884C<code>_updateView()</code>\u65B9\u6CD5\uFF0C\u4E3B\u8981\u662F\u4F7F\u7528<code>ViewContainer</code>\u7684<code>createEmbeddedView</code>\u65B9\u6CD5\uFF0C\u5C06<code>ng-template</code>\u5B9E\u4F8B\u4F20\u5165\uFF0C\u8FDB\u884C\u663E\u793A</p>`,22);function p(f,_){const n=t("ExternalLinkIcon");return s(),d("div",null,[c,u,e("p",null,[m,e("a",o,[b,a(n)]),g]),h])}const I=l(v,[["render",p],["__file","ngIf.html.vue"]]);export{I as default};
