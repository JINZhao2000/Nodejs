// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

var btn = document.getElementById('buttonCPUUsage')
btn.onclick=getProcessInfo
function getProcessInfo(){
    console.log("get CPU Usage : ",process.getCPUUsage())
    console.log("env",process.env)
    console.log("arch",process.arch)
    console.log("platform",process.platform)
}