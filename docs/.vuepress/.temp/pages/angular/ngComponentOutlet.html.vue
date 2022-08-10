<template><div><h1 id="ngcomponentoutlet" tabindex="-1"><a class="header-anchor" href="#ngcomponentoutlet" aria-hidden="true">#</a> ngComponentOutlet</h1>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>上一篇文章我们介绍了<a href="https://juejin.cn/post/7088226652177743909" target="_blank" rel="noopener noreferrer"><code v-pre>ngTemplateOutlet</code><ExternalLinkIcon/></a>的使用，本文继续介绍另一个类似指令<code v-pre>ngComponentOutlet</code>。</p>
<p>前提你已了解Angular框架的基本使用，知晓<a href="https://angular.cn/guide/built-in-directives" target="_blank" rel="noopener noreferrer">指令<ExternalLinkIcon/></a>等相关概念及作用。</p>
<ul>
<li>ng版本：v13.3.x</li>
<li>源码：<a href="https://github.com/angular/angular/blob/13.3.x/packages/common/src/directives/ng_component_outlet.ts" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a></li>
</ul>
<h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>
<p><code v-pre>ngComponentOutlet</code>：实例化单个Component组件，并将其（宿主视图）插入到当前视图中。</p>
<h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@Component({
  selector: 'app-hello',
  template: `
    &lt;p&gt;hello,EnochGao!&lt;/p&gt;
  `,
  styles: []
})
export class HelloComponent{  // hello模板组件
}

@Component({
  selector: 'app-root',
  template: `
    &lt;ng-container *ngComponentOutlet=&quot;component&quot;&gt;&lt;/ng-container&gt;
  `,
  styles: []
})
export class AppComponent{ // app组件
  component = HelloComponent; // 引用模板组件
}

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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@Injectable()
export class NameService { // 一个服务
  myName = 'EnochGao';
}

@Component({
  selector: 'app-content',
  template: `
    &lt;span&gt;{{text}}&lt;/span&gt;
    &lt;div&gt;
      name:{{nameService.myName}}
    &lt;/div&gt;
    &lt;ng-content&gt;&lt;/ng-content&gt;
    &lt;ng-content&gt;&lt;/ng-content&gt;
  `,
  styles: [`
    :host{
      display:block;
      border:1px solid red;
    }
   `
  ]
})
export class ContentComponent { // content模板组件，依赖服务
  text = 'content组件已加载！';
  constructor(public nameService: NameService) { }
}


@Component({
  selector: 'app-root',
  template: `
  &lt;ng-container *ngComponentOutlet=&quot;contentComponent;injector: myInjector;content: myContent&quot;&gt;
  &lt;/ng-container&gt;
  `,
  style: []
})
export class AppComponent { // app组件
  contentComponent = ContentComponent;
  myInjector: Injector;
  myContent: any[][];

  constructor(
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
    const div1 = this.document.createElement('div');
    const text1 = this.document.createTextNode('投影内容1...');
    div1.appendChild(text1);

    const div2 = this.document.createElement('div');
    const text2 = this.document.createTextNode('投影内容2...');
    div2.appendChild(text2);

    this.myContent = [[div1], [div2]];
    this.myInjector = Injector.create({
    providers: [{ provide: NameService, deps: [] }],
    parent: this.injector
    });
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：
<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0ac77b8e8474c7b98c96516a5a0bdd2~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<p>此外我们还可以指定<code v-pre>ngComponentOutletNgModuleFactory</code>(v14版本中模块工厂会被删除，将会直接传递moduleRef)</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@Component({
  selector: 'app-core-demo',
  template: `
    &lt;span&gt;{{text}}&lt;/span&gt;
  `,
  styles: [`
    :host{
      display:block;
      border:1px solid green;
    }`
  ]
})
export class CoreDemoComponent { // core组件
  text = 'core组件已加载！';

}

@NgModule({
  declarations: [
    CoreDemoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { // core模块，注意后续我们不会将coreModule引入到AppModule中
// 看看是否会加载成功
}


@Component({
  selector: 'app-root',
  template: `
    &lt;ng-container *ngComponentOutlet=&quot;coreComponent;ngModuleFactory:factory&quot;&gt;&lt;/ng-container&gt;
  `,
  style: []
})
export class AppComponent { // app组件
  coreComponent = CoreDemoComponent; // 引入core组件
  factory: NgModuleFactory&lt;any&gt;;

  constructor(
    private compiler: Compiler,
  ) {
   this.factory = this.compiler.compileModuleSync(CoreModule);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1322c0b835cb446891d248e5161c8439~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>
<h2 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code>@Directive({ selector: '[ngComponentOutlet]' })
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

      if (changes['ngComponentOutletNgModuleFactory']) {
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

       // 找到解析组件工厂
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实代码的核心实现思路是：找到传入组件的<code v-pre>componentFactoryResolver</code>(组件工厂解析器)这个工厂对象，然后通过<code v-pre>ViewContainerRef</code>的createComponent方法，将组建渲染到视图容器中。至于传入模块工厂的方式:首先找到传入组件对应的模块引用，模块引用下有对应组件的组件工厂解析器。</p>
<p>可见<code v-pre>ViewContainerRef</code>这个类功能强大，<code v-pre>ngTemplateOutlet</code>模板渲染，最终也是通过它来创建的。</p>
<h2 id="思维扩展" tabindex="-1"><a class="header-anchor" href="#思维扩展" aria-hidden="true">#</a> 思维扩展</h2>
<p>实际项目中是否存在动态加载组件的需求，比如一个广告位轮播功能（每一个广告是一个组件，通过<code v-pre>ngComponentOutlet</code>我们可以实现广告的动态轮播）。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>我们可以通过<code v-pre>ngComponentOutlet</code>指令的形式加载组件，而不是在模板中通过标签的形式加载。它可以实现通过代码进行灵活加载组件，将父组件与子组件进行解耦，符合开闭原则。</p>
</div></template>
