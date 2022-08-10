import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
  '/angular/': [
    {
      text: 'Angular指令',
      children: [
        '/angular/ngTemplateOutlet.md',
        '/angular/ngComponentOutlet.md',
      ]
    },
  ]
};