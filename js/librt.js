// 全局變量
var footerCode = "Power by nginx<br>" + Date()

// 获取document元素的快捷方法
function get(id) {
    return document.getElementById(id)
}

// 查询选择器
function query(tag) {
    return document.querySelector(tag)
}

// 写日志的快捷方法
function log(obj) {
    console.log(obj)
    if (get('log') != null) {
        get('log').innerText += obj + "\n"
        createFooter()
    }
}

// 构建主体(divMain)和足体(divFooter)上下布局
function createDivMain() {
    var divMain = document.createElement('div')
    divMain.id = 'divMain'
    divMain.innerHTML = document.body.innerHTML
    document.body.innerHTML = ''
    document.body.appendChild(divMain)
    var divFooter = document.createElement('div')
    divFooter.id = 'divFooter'
    document.body.appendChild(divFooter)
}

// 构建footer, 前提是保持 header main footer 的布局
// 当 main 高度改变时, 需要调用一下以刷新
function createFooter() {
    var footer = document.getElementById('divFooter')
    var main = document.getElementById('divMain')
    if (footer == null || main == null) {
        return
    }
    footer.innerHTML = footerCode
    var n = window.innerHeight - main.clientHeight - footer.clientHeight - main.offsetTop
    // log('n=' + n +', 浏览器高' + innerHeight + ', main高' + main.clientHeight + ', footer高' + footer.clientHeight)
    if (n > 0) {
        footer.style.marginTop = (n - 0) + 'px'
        // log('令为' + footer.style.marginTop)
    } else {
        footer.style.marginTop = '0px'
    }
}

// 初始化任务, 如添加视点控制等
function init() {
    // 设置视点meta元素
    var meta = document.createElement('meta')
    meta.setAttribute("name", "viewport")
    meta.setAttribute("content", "width=device-width, initial-scale=1.0")
    // query('head').appendChild(meta)
    document.head.appendChild(meta)

    // 指定图标
    // <link rel="icon" href="/favicon.ico">
    var icon = document.createElement('link')
    icon.setAttribute('rel', 'icon')
    icon.setAttribute('href', '/favicon.ico')
    document.head.appendChild(icon)

    // 设置footer之前, 设置divMain
    createDivMain()
    // 设置footer
    createFooter()
}

// 添加事件, 执行初始化任务
window.addEventListener('load', function () {
    init()
})
