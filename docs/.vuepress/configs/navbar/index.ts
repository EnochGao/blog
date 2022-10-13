import { NavbarConfig } from 'vuepress';

export const navbar: NavbarConfig = [
  {
    text: 'Angular源码解析',
    link: '/angular/ngTemplateOutlet.md',
  },
  {
    text: 'ng组件库翻译',
    children: [
      {
        text: 'primeng',
        link:'http://124.223.57.88'
      },
    ],
  },
];
