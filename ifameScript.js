// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化...');
    
    // 更新时间显示
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        document.getElementById('currentTime').textContent = `当前时间: ${timeString}`;
    }
    
    // 初始化时间显示
    updateTime();
    // 每秒更新一次时间
    setInterval(updateTime, 1000);
    
    // 计数器功能
    let count = 0;
    const countElement = document.getElementById('count');
    
    function updateCounter() {
        countElement.textContent = count;
        // 根据数值改变颜色
        if (count > 0) {
            countElement.style.color = '#4CAF50';
        } else if (count < 0) {
            countElement.style.color = '#F44336';
        } else {
            countElement.style.color = '#FFD700';
        }
    }
    
    // 计数器按钮事件
    document.getElementById('incrementBtn').addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    document.getElementById('decrementBtn').addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    document.getElementById('resetBtn').addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    // 改变颜色按钮
    document.getElementById('changeColorBtn').addEventListener('click', function() {
        const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#EF476F'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.style.backgroundColor = randomColor;
        dynamicContent.style.borderColor = darkenColor(randomColor, 20);
        dynamicContent.innerHTML = `<p>背景颜色已更改为: <strong>${randomColor}</strong></p>`;
    });
    
    // 辅助函数：加深颜色
    function darkenColor(color, percent) {
        let r = parseInt(color.substring(1, 3), 16);
        let g = parseInt(color.substring(3, 5), 16);
        let b = parseInt(color.substring(5, 7), 16);
        
        r = Math.floor(r * (100 - percent) / 100);
        g = Math.floor(g * (100 - percent) / 100);
        b = Math.floor(b * (100 - percent) / 100);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
    // 显示消息按钮
    document.getElementById('showMessageBtn').addEventListener('click', function() {
        const messages = [
            '你好！欢迎使用这个示例网页。',
            'JavaScript让网页变得更有趣！',
            '点击按钮可以触发各种功能。',
            '试试看其他的按钮功能吧！',
            '这是一个动态生成的消息。'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <h4>📢 系统消息</h4>
            <p>${randomMessage}</p>
            <small>消息ID: ${Math.random().toString(36).substr(2, 9)}</small>
        `;
    });
    
    // 切换内容按钮
    let contentIndex = 0;
    const contents = [
        '<p>这是第一个内容视图。</p><p>展示如何使用JavaScript动态更新HTML内容。</p>',
        '<p>这是第二个内容视图。</p><ul><li>项目1</li><li>项目2</li><li>项目3</li></ul>',
        '<p>这是第三个内容视图。</p><div style="text-align: center;"><span style="font-size: 2em;">🎉</span><p>庆祝动态内容切换！</p></div>',
        '<p>这是第四个内容视图。</p><table border="1" style="width: 100%;"><tr><th>项目</th><th>值</th></tr><tr><td>A</td><td>100</td></tr><tr><td>B</td><td>200</td></tr></table>'
    ];
    
    document.getElementById('toggleContentBtn').addEventListener('click', function() {
        contentIndex = (contentIndex + 1) % contents.length;
        document.getElementById('dynamicContent').innerHTML = contents[contentIndex];
    });
    
    // 表单处理
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        const formMessage = document.getElementById('formMessage');
        
        // 简单验证
        if (!name || !email || !message) {
            formMessage.textContent = '请填写所有必填字段！';
            formMessage.className = 'message error';
            return;
        }
        
        if (!validateEmail(email)) {
            formMessage.textContent = '请输入有效的邮箱地址！';
            formMessage.className = 'message error';
            return;
        }
        
        // 模拟表单提交成功
        formMessage.textContent = `感谢 ${name}！您的消息已提交，我们会尽快通过 ${email} 联系您。`;
        formMessage.className = 'message success';
        
        // 清空表单
        this.reset();
        
        // 3秒后清空消息
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'message';
        }, 3000);
    });
    
    // 邮箱验证函数
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // 导航平滑滚动
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // 页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('页面初始化完成！');
});