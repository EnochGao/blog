export const themeData = JSON.parse("{\"logo\":\"https://avatars.githubusercontent.com/u/41459067?v=4\",\"repo\":\"https://github.com/EnochGao/blog\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"Angular源码解析\",\"children\":[{\"text\":\"指令\",\"link\":\"/angular/directive/ngTemplateOutlet.md\"}]},{\"text\":\"ng组件库翻译\",\"children\":[{\"text\":\"primeng\",\"link\":\"https://enochgao.github.io/primeng-cn/\"}]},{\"text\":\"JavaScript视频\",\"children\":[{\"text\":\"es5\",\"link\":\"https://space.bilibili.com/7557420/channel/seriesdetail?sid=2857263\"}]}],\"sidebar\":{\"/angular/directive\":[{\"text\":\"指令\",\"children\":[\"/angular/directive/ngTemplateOutlet.md\",\"/angular/directive/ngComponentOutlet.md\",\"/angular/directive/ngIf.md\"]}]},\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
