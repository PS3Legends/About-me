document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("nav ul li a");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            menuLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});