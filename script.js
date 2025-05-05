document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const socialIcons = document.querySelectorAll('.social-icon');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#fd79a8';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#f5f6fa';
        });
    });
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});