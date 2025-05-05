document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelectorAll('.nav-btn');
    const navGlitch = document.querySelector('.nav-glitch');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn.querySelector('.btn-wave'), {
                duration: 0.6,
                scaleX: 1,
                ease: "power2.out"
            });
            
            gsap.to(btn, {
                duration: 0.3,
                y: -5,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn.querySelector('.btn-wave'), {
                duration: 0.4,
                scaleX: 0,
                ease: "power2.in"
            });
            
            gsap.to(btn, {
                duration: 0.3,
                y: 0,
                ease: "power2.out"
            });
        });
        
        btn.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
            
            gsap.to(navGlitch, {
                duration: 0.1,
                opacity: 1,
                repeat: 3,
                yoyo: true,
                onComplete: () => {
                    gsap.set(navGlitch, { opacity: 0 });
                }
            });
        });
    });
    
    gsap.from(".nav-links li", {
        duration: 1.5,
        y: 30,
        opacity: 0,
        stagger: {
            each: 0.1,
            from: "random"
        },
        ease: "elastic.out(1, 0.5)",
        delay: 0.5
    });
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const nav = document.querySelector('.cyber-nav');
        
        if (scrollPosition > 50) {
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
            nav.style.backdropFilter = 'blur(20px)';
        } else {
            nav.style.boxShadow = 'none';
            nav.style.backdropFilter = 'blur(10px)';
        }
    });
    
    setInterval(() => {
        if(Math.random() > 0.95) {
            gsap.to(navGlitch, {
                duration: 0.05,
                opacity: 0.7,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    gsap.set(navGlitch, { opacity: 0 });
                }
            });
        }
    }, 5000);
});