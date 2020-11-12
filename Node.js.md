# Node.js

## 1. Node.js 介绍

### 1.1 Node.js 是什么

- 不是一门语言
- 不是一个库，框架
- 是一个 JavaScript 运行时环境
- 脱离浏览器运行 JavaScript代码

- 浏览器中的 JavaScript
  - EcmaScript
  - BOM
  - DOM
- Node.js 中的 JavaScript
  - 没有 BOM, DOM
  - EcmaScript
  - 提供了一些服务器级别操作的 API
    - 文件读写
    - 网络服务的构建
    - 网络通信
    - http 服务器
    - ......
- 构建于 Chrome V8 的引擎之上
- 事件驱动
- NIO API
- 轻量级高效

- npm node package manager ex : npm install jquery

### 1.2 Node.js 能做什么

- Web 服务器后台
- 命令行工具
  - npm -> Node
  - git -> C
  - hexo -> Node
- 对于前端开发工程师来讲，接触 Node 最多的是它的命令行工具
  - 自己写的少，用第三方的多
  - webpack
  - gulp
  - npm

### 1.3 预备知识

- HTML
- CSS
- JavaScript
- 命令行操作
- 服务端开发

### 1.4 官方 API 文档

[Node 官方 API](https://nodejs.org/dist/latest-v6.x/docs/api)

[JavaScript 标准参考教程](http://javascript.ruanyifeng.com)

### 1.5 Node.js 内容

- B/S 编程模型
  - Browser - Server
  - Back-end
- 模块化编程
  - RequireJS
  - SeaJS
  - `@import('filepath') `引用加载 JavaScript 脚本文件
  - 以前认知的 JavaScript 只能通过 `script` 标签来加载
- Node 常用 API
- 异步编程
  - 回调函数
  - Promise
  - async
  - generator
- Express Web 开发框架
- Ecmascript 6

-> 帮助学习

- Vue.js
- React
- Angular

## 2. Hello World

helloworld.js 禁止使用 node.js 文件名

```javascript
console.log('hello world')
```

console : 

```shell
node helloworld.js
```

