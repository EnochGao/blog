---
next:
  text: 下一篇
  link: ./ngComponentOutlet.md
---

# ngIf

## 前提

假设你已了解 Angular 框架的基本使用，知晓[指令](https://angular.cn/guide/built-in-directives)等相关概念及作用。

## 功能

`NgIf`根据表达式的值（强转为 boolean）是否为真值，来有条件的包含某个模板。当表达式计算为 true 时，Angular 会渲染 then 子句中提供的模板，当为 false 或 null 时则渲染可选的 else 子句中的模板。else 子句的默认模板是空白模板。

## 用法

通常使用指令的简写形式: `*ngIf="condition"`，作为插入模板的锚点元素的属性提供。
Angular 将其扩展为更明确的版本，其中锚点元素包含在 `<ng-template>` 元素中。

具有简写语法的简单形式:

```html
<div *ngIf="condition">condition为true时内容将被渲染</div>
```

具有扩展语法的简单形式:

```html
<ng-template [ngIf]="condition">
  <div>condition为true时内容将被渲染</div>
</ng-template>
```

带有 else 块的格式:

```html
<div *ngIf="condition; else elseBlock">条件为true时内容将被渲染</div>

<ng-template #elseBlock>condition为false时内容将被渲染</ng-template>
```

带有 then else 块的格式:

```html
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>condition为true时内容将被渲染</ng-template>
<ng-template #elseBlock>condition为false时内容将被渲染</ng-template>
```

将值存储为本地变量：

```html
<div *ngIf="condition as value; else elseBlock">{{value}}</div>
<ng-template #elseBlock>value为null时内容被渲染</ng-template>
```

### 简写语法

```html
<div class="hero-list" *ngIf="heroes else loading">...</div>

<ng-template #loading>
  <div>Loading...</div>
</ng-template>
```

等同于

```html
<ng-template [ngIf]="heroes" [ngIfElse]="loading">
  <div class="hero-list">...</div>
</ng-template>

<ng-template #loading>
  <div>Loading...</div>
</ng-template>
```
