document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const socialIcons = document.querySelectorAll('.social-icon');
    const nav = document.querySelector('.cyber-nav');
    const subtitle = document.querySelector('.subtitle');
    
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
    
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            nav.style.transform = 'translateY(0)';
            nav.style.boxShadow = 'var(--glow)';
        } else if (currentScroll > lastScroll) {
            nav.style.transform = 'translateY(-100%)';
            nav.style.boxShadow = 'none';
        } else {
            nav.style.transform = 'translateY(0)';
            nav.style.boxShadow = 'var(--glow)';
        }
        lastScroll = currentScroll;
        
        document.documentElement.style.setProperty(
            '--scroll-pos', 
            `${Math.min(currentScroll / 1000, 0.5)}`
        );
    });
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#00f7ff';
            this.style.textShadow = '0 0 15px rgba(0, 247, 255, 0.8)';
            
            const ripple = document.createElement('span');
            ripple.className = 'nav-ripple';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#f5f6fa';
            this.style.textShadow = 'none';
        });
        
        link.addEventListener('click', function(e) {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            const clickEffect = document.createElement('span');
            clickEffect.className = 'click-effect';
            clickEffect.style.left = `${x}px`;
            clickEffect.style.top = `${y}px`;
            this.appendChild(clickEffect);
            
            setTimeout(() => {
                clickEffect.remove();
            }, 1000);
        });
    });
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mousemove', (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            icon.style.setProperty('--x', `${x}px`);
            icon.style.setProperty('--y', `${y}px`);
        });
        
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.boxShadow = '0 0 25px var(--primary)';
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = '0 0 20px var(--primary)';
        });
    });

    setInterval(() => {
        if (Math.random() > 0.7) {
            subtitle.style.animation = 'none';
            void subtitle.offsetWidth;
            subtitle.style.animation = 'hologram-breath 5s ease-in-out infinite, random-blur 8s linear infinite, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
        }
    }, 3000);

    subtitle.addEventListener('mouseenter', () => {
        subtitle.style.animation = 'hologram-breath 1s ease-in-out infinite, random-blur 2s linear infinite, text-glitch 2s infinite linear, hologram-flicker 1s infinite ease';
    });

    subtitle.addEventListener('mouseleave', () => {
        subtitle.style.animation = 'hologram-breath 5s ease-in-out infinite, random-blur 8s linear infinite, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
    });
});