document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    if (document.getElementById('particles')) {
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
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const glitch = document.querySelector('.nav-glitch');
            glitch.style.opacity = '0.7';
            setTimeout(() => {
                glitch.style.opacity = '0';
            }, 300);
        });
    });
    
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const professions = ["Web Developer", "UI/UX Designer", "Programmer", "App Developer"];
        let i = 0;
        let j = 0;
        let currentProfession = '';
        let isDeleting = false;
        
        function typeWriter() {
            currentProfession = professions[i];
            
            if (isDeleting) {
                typingElement.textContent = currentProfession.substring(0, j-1);
                j--;
                
                if (j === 0) {
                    isDeleting = false;
                    i = (i + 1) % professions.length;
                }
            } else {
                typingElement.textContent = currentProfession.substring(0, j+1);
                j++;
                
                if (j === currentProfession.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 1000);
                    return;
                }
            }
            
            setTimeout(typeWriter, isDeleting ? 50 : 150);
        }
        
        typeWriter();
    }
    
 د
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});