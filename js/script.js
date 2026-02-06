// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏高亮
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.color = '#667eea';
            link.style.fontWeight = 'bold';
        }
    });
});

// 响应式菜单
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// 添加滚动动画
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-item, .gameplay-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// 页面加载完成后执行
window.addEventListener('load', function() {
    // 显示加载动画
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // 初始化动画
    animateOnScroll();
    
    // 添加服务器状态检查（模拟）
    checkServerStatus();
});

// 模拟服务器状态检查
function checkServerStatus() {
    const serverStatus = document.createElement('div');
    serverStatus.className = 'server-status';
    serverStatus.style.position = 'fixed';
    serverStatus.style.top = '20px';
    serverStatus.style.right = '20px';
    serverStatus.style.padding = '10px 15px';
    serverStatus.style.borderRadius = '5px';
    serverStatus.style.fontWeight = 'bold';
    serverStatus.style.zIndex = '1001';
    
    // 模拟服务器在线状态
    serverStatus.style.backgroundColor = '#4CAF50';
    serverStatus.style.color = 'white';
    serverStatus.textContent = '服务器状态: 在线';
    
    document.body.appendChild(serverStatus);
    
    // 3秒后自动隐藏
    setTimeout(() => {
        serverStatus.style.opacity = '0';
        serverStatus.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            serverStatus.remove();
        }, 500);
    }, 3000);
}



// 显示通知
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.position = 'fixed';
    notification.style.top = '50%';
    notification.style.left = '50%';
    notification.style.transform = 'translate(-50%, -50%)';
    notification.style.padding = '20px 30px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.borderRadius = '10px';
    notification.style.fontSize = '1.1rem';
    notification.style.zIndex = '1002';
    notification.style.textAlign = 'center';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 2秒后自动隐藏
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 2000);
}

// 添加鼠标悬停效果
document.querySelectorAll('.feature-item, .gameplay-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// 背景音乐控制
function initBackgroundMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music) {
        // 创建音乐控制按钮
        const musicControl = document.createElement('button');
        musicControl.id = 'musicControl';
        musicControl.style.position = 'fixed';
        musicControl.style.bottom = '20px';
        musicControl.style.right = '20px';
        musicControl.style.width = '50px';
        musicControl.style.height = '50px';
        musicControl.style.borderRadius = '50%';
        musicControl.style.backgroundColor = '#667eea';
        musicControl.style.color = 'white';
        musicControl.style.border = 'none';
        musicControl.style.fontSize = '1.5rem';
        musicControl.style.cursor = 'pointer';
        musicControl.style.zIndex = '1001';
        musicControl.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        musicControl.innerHTML = '🎵';
        musicControl.title = '控制音乐';
        
        // 切换音乐播放/暂停
        musicControl.addEventListener('click', function() {
            if (music.paused) {
                music.play().catch(err => {
                    console.log('音乐播放失败:', err);
                });
                musicControl.innerHTML = '🔊';
            } else {
                music.pause();
                musicControl.innerHTML = '🔇';
            }
        });
        
        document.body.appendChild(musicControl);
        
        // 尝试在用户交互时播放音乐
        document.addEventListener('click', function() {
            if (music.paused) {
                music.play().catch(err => {
                    console.log('音乐播放失败:', err);
                });
            }
        }, { once: true });
    }
}

// 添加页面加载动画
const loaderHTML = `
    <div class="loader" style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    ">
        <div style="
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    </div>
`;

document.body.insertAdjacentHTML('afterbegin', loaderHTML);

// 初始化背景音乐
window.addEventListener('load', initBackgroundMusic);
