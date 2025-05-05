document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    gsap.from(".nav-btn", {
        duration: 1,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        delay: 1,
        ease: "back.out(1.7)"
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        navButtons.forEach(button => {
            if (scrollPosition > 50) {
                gsap.to(button, {
                    padding: '8px 15px',
                    duration: 0.3
                });
            } else {
                gsap.to(button, {
                    padding: '10px 20px',
                    duration: 0.3
                });
            }
        });
    });
});