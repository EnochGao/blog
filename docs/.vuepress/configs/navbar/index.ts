import { NavbarConfig } from 'vuepress';

export const navbar: NavbarConfig = [
  {
    text: 'Angular源码解析',
    children: [
      {
        text: '指令',
        link: '/angular/directive/ngTemplateOutlet.md',
      },
    ],
  },
  {
    text: 'ng组件库翻译',
    children: [
      {
        text: 'primeng',
        link: 'http://124.223.57.88',
      },
    ],
  },
  {
    text: 'JavaScript视频',
    children: [
      {
        text: 'es5',
        link: 'https://space.bilibili.com/7557420/channel/seriesdetail?sid=2857263',
      },
    ],
  },
];
