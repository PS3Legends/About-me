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
    const professions = ['Developer', 'Designer', 'Coder', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        const currentWord = professions[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        
        typingElement.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % professions.length;
            }
            setTimeout(typeWriter, 1000);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    particlesJS('particles', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#a29bfe" },
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
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const nav = document.querySelector('.cyber-nav');
        
        if (scrollPosition > 50) {
            nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
});