// 简单的JavaScript示例
function showMessage() {
    const message = "Hello from JavaScript!";
    console.log(message);
    alert(message);
    return message;
}

// 计算两个数字的和
function addNumbers(a, b) {
    return a + b;
}

// 创建一个简单的数组操作
function processArray(arr) {
    if (!Array.isArray(arr)) {
        return "输入不是数组";
    }
    
    const result = {
        sum: arr.reduce((total, num) => total + num, 0),
        average: arr.length > 0 ? arr.reduce((total, num) => total + num, 0) / arr.length : 0,
        max: arr.length > 0 ? Math.max(...arr) : null,
        min: arr.length > 0 ? Math.min(...arr) : null
    };
    
    return result;
}

// DOM操作示例
function updateContent() {
    const element = document.getElementById('content');
    if (element) {
        element.textContent = "内容已更新！";
        element.style.color = "blue";
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log("页面加载完成");
    showMessage();
});