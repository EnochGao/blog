import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  '/angular/': [
    {
      text: '指令',
      children: [
        '/angular/ngTemplateOutlet.md',
        '/angular/ngComponentOutlet.md',
        '/angular/ngIf.md',
      ]
    },
  ]
};