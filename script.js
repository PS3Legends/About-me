document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    const typingElement = document.querySelector('.typing');
    const professions = ['Developer', 'Designer', 'Coder', 'Problem Solver', 'Tech Artist', 'Innovator'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        const currentWord = professions[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        typingElement.textContent = currentWord.substring(0, charIndex);
        
        let typeSpeed = 150;
        
        if (isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            isEnd = true;
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            isEnd = false;
            wordIndex = (wordIndex + 1) % professions.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    setTimeout(typeWriter, 1000);

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
    
    const imageWrapper = document.querySelector('.image-wrapper');
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        imageWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    imageWrapper.addEventListener('mouseleave', () => {
        imageWrapper.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
    
    gsap.from(".hero-image", {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.from(".hero-content", {
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.to(".social-icon", {
        duration: 2,
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2
    });
    
    particlesJS('particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#a29bfe" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { 
                enable: true, 
                distance: 150, 
                color: "#6c5ce7", 
                opacity: 0.4, 
                width: 1 
            },
            move: { 
                enable: true, 
                speed: 2, 
                direction: "none", 
                random: true, 
                straight: false, 
                out_mode: "out" 
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
    
  
    const floatingShapes = document.querySelector('.floating-shapes');
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        shape.style.width = `${Math.random() * 200 + 50}px`;
        shape.style.height = shape.style.width;
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.animationDuration = `${Math.random() * 20 + 10}s`;
        shape.style.animationDelay = `${Math.random() * 5}s`;
        floatingShapes.appendChild(shape);
    }
    

    const imageParticles = document.querySelector('.image-particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 4 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`;
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px rgba(253, 121, 168, 0.5)`;
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        imageParticles.appendChild(particle);
    }
    
    
    const cyberLines = document.querySelector('.cyber-lines');
    setInterval(() => {
        cyberLines.style.backgroundPosition = `0 ${Math.random() * 100}px`;
    }, 100);
});