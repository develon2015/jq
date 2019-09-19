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

// 构建footer, 前提是保持 header main footer 的布局
// 当 main 高度改变时, 需要调用一下以刷新
function createFooter() {
    var footer = document.getElementById('footer')
    var main = document.getElementById('main')
    if (footer == null || main == null) {
        return
    }
    footer.innerHTML = footerCode
    var n = window.innerHeight - main.clientHeight - footer.clientHeight - main.offsetTop
    // log('n=' + n +', 浏览器高' + innerHeight + ', main高' + main.clientHeight + ', footer高' + footer.clientHeight)
    if (n > 0) {
        footer.style.marginTop = (n + 2) + 'px'
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

    // <link rel="stylesheet" href="/css/base.css">
    // var basecss = document.createElement('link')
    // basecss.setAttribute('rel', 'stylesheet')
    // basecss.setAttribute('href', '/css/base.css')
    // document.head.appendChild(basecss)

    // 设置footer
    createFooter()
}

// 执行初始化任务
init()