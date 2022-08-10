import{_ as s,o as d,c as t,a as e,b as l,d as n,e as o,r as c}from"./app.9988634b.js";const r={},a=e("h1",{id:"ngcomponentoutlet",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ngcomponentoutlet","aria-hidden":"true"},"#"),n(" ngComponentOutlet")],-1),v=e("h2",{id:"\u524D\u8A00",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u524D\u8A00","aria-hidden":"true"},"#"),n(" \u524D\u8A00")],-1),m=n("\u4E0A\u4E00\u7BC7\u6587\u7AE0\u6211\u4EEC\u4ECB\u7ECD\u4E86"),u={href:"https://juejin.cn/post/7088226652177743909",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"ngTemplateOutlet",-1),b=n("\u7684\u4F7F\u7528\uFF0C\u672C\u6587\u7EE7\u7EED\u4ECB\u7ECD\u53E6\u4E00\u4E2A\u7C7B\u4F3C\u6307\u4EE4"),g=e("code",null,"ngComponentOutlet",-1),h=n("\u3002"),C=n("\u524D\u63D0\u4F60\u5DF2\u4E86\u89E3Angular\u6846\u67B6\u7684\u57FA\u672C\u4F7F\u7528\uFF0C\u77E5\u6653"),_={href:"https://angular.cn/guide/built-in-directives",target:"_blank",rel:"noopener noreferrer"},f=n("\u6307\u4EE4"),y=n("\u7B49\u76F8\u5173\u6982\u5FF5\u53CA\u4F5C\u7528\u3002"),x=e("li",null,"ng\u7248\u672C\uFF1Av13.3.x",-1),O=n("\u6E90\u7801\uFF1A"),j={href:"https://github.com/angular/angular/blob/13.3.x/packages/common/src/directives/ng_component_outlet.ts",target:"_blank",rel:"noopener noreferrer"},R=n("\u5730\u5740"),N=o(`<h2 id="\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD" aria-hidden="true">#</a> \u529F\u80FD</h2><p><code>ngComponentOutlet</code>\uFF1A\u5B9E\u4F8B\u5316\u5355\u4E2AComponent\u7EC4\u4EF6\uFF0C\u5E76\u5C06\u5176\uFF08\u5BBF\u4E3B\u89C6\u56FE\uFF09\u63D2\u5165\u5230\u5F53\u524D\u89C6\u56FE\u4E2D\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>@Component({
  selector: &#39;app-hello&#39;,
  template: \`
    &lt;p&gt;hello,EnochGao!&lt;/p&gt;
  \`,
  styles: []
})
export class HelloComponent{  // hello\u6A21\u677F\u7EC4\u4EF6
}

@Component({
  selector: &#39;app-root&#39;,
  template: \`
    &lt;ng-container *ngComponentOutlet=&quot;component&quot;&gt;&lt;/ng-container&gt;
  \`,
  styles: []
})
export class AppComponent{ // app\u7EC4\u4EF6
  component = HelloComponent; // \u5F15\u7528\u6A21\u677F\u7EC4\u4EF6
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u56FE\uFF1A</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c18651430d9b4e9ea1ee4c9dbe48e5ec~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"> \u53EF\u4EE5\u770B\u5230<code>ngComponentOutlet</code>\u6307\u4EE4\u5C06hello\u7EC4\u4EF6\u6E32\u67D3\u5230app\u7EC4\u4EF6\u4E2D\u3002</p><h2 id="\u5176\u4ED6\u63A7\u5236\u9879" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u63A7\u5236\u9879" aria-hidden="true">#</a> \u5176\u4ED6\u63A7\u5236\u9879</h2><p>\u5B83\u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u7CBE\u786E\u5B9E\u73B0\u7EC4\u4EF6\u7684\u521B\u5EFA\uFF1A</p><ul><li><code>ngComponentOutletInjector</code>:\u53EF\u9009\u7684\uFF0C\u81EA\u5B9A\u4E49 Injector\uFF0C\u5C06\u7528\u4F5C\u6B64\u7EC4\u4EF6\u7684\u7236\u7EA7\u3002\u9ED8\u8BA4\u4E3A\u5F53\u524D\u89C6\u56FE\u5BB9\u5668\u7684\u6CE8\u5165\u5668\u3002</li><li><code>ngComponentOutletContent</code>:\u53EF\u9009\u7684\uFF0C\u8981\u63D2\u5165\u5230\u7EC4\u4EF6\u5185\u5BB9\u90E8\u5206\u7684\u53EF\u6295\u5F71\u8282\u70B9\u5217\u8868\uFF08\u5982\u679C\u5B58\u5728\uFF09</li><li><code>ngComponentOutletNgModuleFactory</code>: \u53EF\u9009\u7684\uFF0C\u6A21\u5757\u5DE5\u5382\u5141\u8BB8\u52A8\u6001\u52A0\u8F7D\u5176\u4ED6\u6A21\u5757\uFF0C\u7136\u540E\u4ECE\u8BE5\u6A21\u5757\u52A0\u8F7D\u7EC4\u4EF6\u3002\uFF08v14\u7248\u672C\u5C06\u4F1A\u5E9F\u5F03\uFF0C\u6539\u7528ngComponentOutletNgModule\uFF09</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>@Injectable()
export class NameService { // \u4E00\u4E2A\u670D\u52A1
  myName = &#39;EnochGao&#39;;
}

@Component({
  selector: &#39;app-content&#39;,
  template: \`
    &lt;span&gt;{{text}}&lt;/span&gt;
    &lt;div&gt;
      name:{{nameService.myName}}
    &lt;/div&gt;
    &lt;ng-content&gt;&lt;/ng-content&gt;
    &lt;ng-content&gt;&lt;/ng-content&gt;
  \`,
  styles: [\`
    :host{
      display:block;
      border:1px solid red;
    }
   \`
  ]
})
export class ContentComponent { // content\u6A21\u677F\u7EC4\u4EF6\uFF0C\u4F9D\u8D56\u670D\u52A1
  text = &#39;content\u7EC4\u4EF6\u5DF2\u52A0\u8F7D\uFF01&#39;;
  constructor(public nameService: NameService) { }
}


@Component({
  selector: &#39;app-root&#39;,
  template: \`
  &lt;ng-container *ngComponentOutlet=&quot;contentComponent;injector: myInjector;content: myContent&quot;&gt;
  &lt;/ng-container&gt;
  \`,
  style: []
})
export class AppComponent { // app\u7EC4\u4EF6
  contentComponent = ContentComponent;
  myInjector: Injector;
  myContent: any[][];

  constructor(
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
    const div1 = this.document.createElement(&#39;div&#39;);
    const text1 = this.document.createTextNode(&#39;\u6295\u5F71\u5185\u5BB91...&#39;);
    div1.appendChild(text1);

    const div2 = this.document.createElement(&#39;div&#39;);
    const text2 = this.document.createTextNode(&#39;\u6295\u5F71\u5185\u5BB92...&#39;);
    div2.appendChild(text2);

    this.myContent = [[div1], [div2]];
    this.myInjector = Injector.create({
    providers: [{ provide: NameService, deps: [] }],
    parent: this.injector
    });
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u56FE\uFF1A <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0ac77b8e8474c7b98c96516a5a0bdd2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u6B64\u5916\u6211\u4EEC\u8FD8\u53EF\u4EE5\u6307\u5B9A<code>ngComponentOutletNgModuleFactory</code>(v14\u7248\u672C\u4E2D\u6A21\u5757\u5DE5\u5382\u4F1A\u88AB\u5220\u9664\uFF0C\u5C06\u4F1A\u76F4\u63A5\u4F20\u9012moduleRef)</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>@Component({
  selector: &#39;app-core-demo&#39;,
  template: \`
    &lt;span&gt;{{text}}&lt;/span&gt;
  \`,
  styles: [\`
    :host{
      display:block;
      border:1px solid green;
    }\`
  ]
})
export class CoreDemoComponent { // core\u7EC4\u4EF6
  text = &#39;core\u7EC4\u4EF6\u5DF2\u52A0\u8F7D\uFF01&#39;;

}

@NgModule({
  declarations: [
    CoreDemoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { // core\u6A21\u5757\uFF0C\u6CE8\u610F\u540E\u7EED\u6211\u4EEC\u4E0D\u4F1A\u5C06coreModule\u5F15\u5165\u5230AppModule\u4E2D
// \u770B\u770B\u662F\u5426\u4F1A\u52A0\u8F7D\u6210\u529F
}


@Component({
  selector: &#39;app-root&#39;,
  template: \`
    &lt;ng-container *ngComponentOutlet=&quot;coreComponent;ngModuleFactory:factory&quot;&gt;&lt;/ng-container&gt;
  \`,
  style: []
})
export class AppComponent { // app\u7EC4\u4EF6
  coreComponent = CoreDemoComponent; // \u5F15\u5165core\u7EC4\u4EF6
  factory: NgModuleFactory&lt;any&gt;;

  constructor(
    private compiler: Compiler,
  ) {
   this.factory = this.compiler.compileModuleSync(CoreModule);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6548\u679C\u56FE\uFF1A</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1322c0b835cb446891d248e5161c8439~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> \u6E90\u7801\u5206\u6790</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>@Directive({ selector: &#39;[ngComponentOutlet]&#39; })
export class NgComponentOutlet implements OnChanges, OnDestroy {
  @Input() ngComponentOutlet!: Type&lt;any&gt;;
  @Input() ngComponentOutletInjector!: Injector;
  @Input() ngComponentOutletContent!: any[][];
  @Input() ngComponentOutletNgModuleFactory!: NgModuleFactory&lt;any&gt;;

  private _componentRef: ComponentRef&lt;any&gt; | null = null;
  private _moduleRef: NgModuleRef&lt;any&gt; | null = null;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {

    this._viewContainerRef.clear();
    this._componentRef = null;

    if (this.ngComponentOutlet) {
      const elInjector = this.ngComponentOutletInjector || this._viewContainerRef.parentInjector;

      if (changes[&#39;ngComponentOutletNgModuleFactory&#39;]) {
        if (this._moduleRef) {
          this._moduleRef.destroy();
        }

        if (this.ngComponentOutletNgModuleFactory) {
          const parentModule = elInjector.get(NgModuleRef);
          this._moduleRef = this.ngComponentOutletNgModuleFactory.create(parentModule.injector);
        } else {
          this._moduleRef = null;
        }
      }

       // \u627E\u5230\u89E3\u6790\u7EC4\u4EF6\u5DE5\u5382
      const componentFactoryResolver = this._moduleRef ?
        this._moduleRef.componentFactoryResolver :
        elInjector.get(ComponentFactoryResolver);

      const componentFactory = componentFactoryResolver.resolveComponentFactory(this.ngComponentOutlet);

      this._componentRef = this._viewContainerRef.createComponent(
        componentFactory,
        this._viewContainerRef.length,
        elInjector,
        this.ngComponentOutletContent
      );
    }
  }

  ngOnDestroy() {
    if (this._moduleRef) {
      this._moduleRef.destroy();
    };
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u5B9E\u4EE3\u7801\u7684\u6838\u5FC3\u5B9E\u73B0\u601D\u8DEF\u662F\uFF1A\u627E\u5230\u4F20\u5165\u7EC4\u4EF6\u7684<code>componentFactoryResolver</code>(\u7EC4\u4EF6\u5DE5\u5382\u89E3\u6790\u5668)\u8FD9\u4E2A\u5DE5\u5382\u5BF9\u8C61\uFF0C\u7136\u540E\u901A\u8FC7<code>ViewContainerRef</code>\u7684createComponent\u65B9\u6CD5\uFF0C\u5C06\u7EC4\u5EFA\u6E32\u67D3\u5230\u89C6\u56FE\u5BB9\u5668\u4E2D\u3002\u81F3\u4E8E\u4F20\u5165\u6A21\u5757\u5DE5\u5382\u7684\u65B9\u5F0F:\u9996\u5148\u627E\u5230\u4F20\u5165\u7EC4\u4EF6\u5BF9\u5E94\u7684\u6A21\u5757\u5F15\u7528\uFF0C\u6A21\u5757\u5F15\u7528\u4E0B\u6709\u5BF9\u5E94\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u5DE5\u5382\u89E3\u6790\u5668\u3002</p><p>\u53EF\u89C1<code>ViewContainerRef</code>\u8FD9\u4E2A\u7C7B\u529F\u80FD\u5F3A\u5927\uFF0C<code>ngTemplateOutlet</code>\u6A21\u677F\u6E32\u67D3\uFF0C\u6700\u7EC8\u4E5F\u662F\u901A\u8FC7\u5B83\u6765\u521B\u5EFA\u7684\u3002</p><h2 id="\u601D\u7EF4\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u601D\u7EF4\u6269\u5C55" aria-hidden="true">#</a> \u601D\u7EF4\u6269\u5C55</h2><p>\u5B9E\u9645\u9879\u76EE\u4E2D\u662F\u5426\u5B58\u5728\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u7684\u9700\u6C42\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5E7F\u544A\u4F4D\u8F6E\u64AD\u529F\u80FD\uFF08\u6BCF\u4E00\u4E2A\u5E7F\u544A\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u901A\u8FC7<code>ngComponentOutlet</code>\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0\u5E7F\u544A\u7684\u52A8\u6001\u8F6E\u64AD\uFF09\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<code>ngComponentOutlet</code>\u6307\u4EE4\u7684\u5F62\u5F0F\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u662F\u5728\u6A21\u677F\u4E2D\u901A\u8FC7\u6807\u7B7E\u7684\u5F62\u5F0F\u52A0\u8F7D\u3002\u5B83\u53EF\u4EE5\u5B9E\u73B0\u901A\u8FC7\u4EE3\u7801\u8FDB\u884C\u7075\u6D3B\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u5C06\u7236\u7EC4\u4EF6\u4E0E\u5B50\u7EC4\u4EF6\u8FDB\u884C\u89E3\u8026\uFF0C\u7B26\u5408\u5F00\u95ED\u539F\u5219\u3002</p>`,23);function I(M,k){const i=c("ExternalLinkIcon");return d(),t("div",null,[a,v,e("p",null,[m,e("a",u,[p,l(i)]),b,g,h]),e("p",null,[C,e("a",_,[f,l(i)]),y]),e("ul",null,[x,e("li",null,[O,e("a",j,[R,l(i)])])]),N])}var w=s(r,[["render",I],["__file","ngComponentOutlet.html.vue"]]);export{w as default};
