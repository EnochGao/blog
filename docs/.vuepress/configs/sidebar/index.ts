import { SidebarConfig } from 'vuepress';

export const sidebar: SidebarConfig = {
  '/angular/directive': [
    {
      text: '指令',
      children: [
        '/angular/directive/ngTemplateOutlet.md',
        '/angular/directive/ngComponentOutlet.md',
        '/angular/directive/ngIf.md',
      ],
    },
  ],
};
