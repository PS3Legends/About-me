document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const socialIcons = document.querySelectorAll('.social-icon');
    const nav = document.querySelector('.cyber-nav');
    const subtitle = document.querySelector('.subtitle');
    
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
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.boxShadow = '0 0 25px var(--primary)';
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
            subtitle.style.animation = 'cyber-pulse 4s infinite ease-in-out, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
        }
    }, 3000);

    subtitle.addEventListener('mouseenter', () => {
        subtitle.style.animation = 'cyber-pulse 1s infinite ease-in-out, text-glitch 2s infinite linear, hologram-flicker 1s infinite ease';
    });

    subtitle.addEventListener('mouseleave', () => {
        subtitle.style.animation = 'cyber-pulse 4s infinite ease-in-out, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
    });
});