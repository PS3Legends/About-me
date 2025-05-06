document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    const subtitle = document.querySelector('.subtitle');
    
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
    
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

    subtitle.addEventListener('mouseenter', () => {
        subtitle.style.animation = 'hologram-breath 1s ease-in-out infinite, random-blur 2s linear infinite, text-glitch 2s infinite linear, hologram-flicker 1s infinite ease';
    });

    subtitle.addEventListener('mouseleave', () => {
        subtitle.style.animation = 'hologram-breath 5s ease-in-out infinite, random-blur 8s linear infinite, text-glitch 8s infinite linear, hologram-flicker 5s infinite ease';
    });
});