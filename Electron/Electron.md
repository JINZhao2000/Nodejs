# Electron

## 1. 什么是 Electron

Electron 是由 HTML, CSS, JavaScript 来构建跨平台桌面应用的一个开源库，通过将 Chromium 和 Node.js 合并到同一个运行时环境中，并将其打包为 Mac, Windows, Linux 系统下的应用来实现这一目的

[electron.js](https://electronjs.org)

## 2. Hello World

electron-quick-start

```shell
npm install
npm start
```

package.json

- 渲染进程

  用户所看到的 web 界面就是由渲染进程描绘出来的，包括 html, css 和 js

- 主进程

  Electron 运行 package.json 的 main 脚本的进程被称为主进程，在主进程中运行的脚本通过创建 web 页面来展示用户界面，一个 Electron 应用总是有且只有一个主进程

  ```json
  "main": "main.js",
  "scripts": {
  	"start": "electron ."
  },
  ```


- 渲染进程调试

  ```shell
  npm start
  ```

  View -> Troggle Developer Tools
  
- 主进程调式

  命令行开关：--inspect=[port]

  ex : electron --inspect=3000 your/app

  ```json
  "scripts": {
  	"start": "electron --inspect=3000 ."
  },
  ```

  浏览器

  ```
  chrome://inspect/
  ```

  Devices - > Configure -> localhost:3000

## 3. 常用事件

[api文档](https://www.electronjs.org/docs/api)

app 常用事件

- ready

  当 Electron 完成初始化时被激发

- window-all-closed

  所有窗口被关闭

- before-quit

  在应用程序开始关闭窗口之前出发

- will-quit

  当所有窗口都已关闭并且应用程序将退出时发出

- quit

  在应用程序退出时发出

web 常用事件

- did-finish-load

  导航完成时触发，即选项卡的旋转器将停止旋转，并指派 onload 事件后

- dom-ready

  一个框架中的文本加载完成后触发该事件

## 4. 进程

main.js

```javascript
const mainWindow = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
		preload: path.join(__dirname, 'preload.js'),
		nodeIntegration:true
	}
})
```

index.html

```html
<div>
	<h2>Process</h2>
	<button id="buttonCPUUsage">GetProcessInfo</button>
</div>
```

renderer.js

```javascript
var btn = document.getElementById('buttonCPUUsage')
btn.onclick=getProcessInfo
function getProcessInfo(){
    console.log("get CPU Usage : ",process.getCPUUsage())
    console.log("env",process.env)
    console.log("arch",process.arch)
    console.log("platform",process.platform)
}
```

