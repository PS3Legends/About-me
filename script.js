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

    // Typing Effect
    const typingElement = document.querySelector('.typing');
    const words = ["Developer", "Designer", "Freelancer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingElement.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 1000);

    // Cursor Blinking Effect
    const cursor = document.querySelector('.cursor');
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);

    // Initialize Particles.js
    if (document.getElementById('particles')) {
        particlesJS('particles', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#6c5ce7" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#6c5ce7", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
});