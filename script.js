document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    const subtitle = document.querySelector('.subtitle');
    
    socialIcons.forEach(icon => {
        const handleMouseMove = (e) => {
            const rect = icon.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            icon.style.setProperty('--x', `${x}px`);
            icon.style.setProperty('--y', `${y}px`);
        };
        
        const handleMouseEnter = function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.boxShadow = '0 0 25px var(--primary)';
        };
        
        const handleMouseLeave = function() {
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = '0 0 20px var(--primary)';
        };
        
        icon.addEventListener('mousemove', handleMouseMove);
        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);
        
        icon.addEventListener('touchstart', function(e) {
            e.preventDefault();
            handleMouseEnter.call(this);
            const touch = e.touches[0];
            const fakeMouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            handleMouseMove(fakeMouseEvent);
        });
        
        icon.addEventListener('touchend', function(e) {
            e.preventDefault();
            handleMouseLeave.call(this);
        });
    });

    if (subtitle) {
        const handleSubtitleEnter = () => {
            subtitle.style.animation = 'hologram-breath 1s ease-in-out infinite, random-blur 2s linear infinite, text-glitch 2s infinite linear, hologram-flicker 1s infinite ease';
        };

        const handleSubtitleLeave = () => {
            subtitle.style.animation = 'hologram-breath 5s ease-in-out infinite, random-blur 8s linear infinite, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
        };

        subtitle.addEventListener('mouseenter', handleSubtitleEnter);
        subtitle.addEventListener('mouseleave', handleSubtitleLeave);
        
        subtitle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            handleSubtitleEnter();
        });
        
        subtitle.addEventListener('touchend', function(e) {
            e.preventDefault();
            handleSubtitleLeave();
        });
    }

    let lastScrollTime = 0;
    window.addEventListener('scroll', function() {
        const now = Date.now();
        if (now - lastScrollTime > 100) {
            lastScrollTime = now;
        }
    }, { passive: true });
});