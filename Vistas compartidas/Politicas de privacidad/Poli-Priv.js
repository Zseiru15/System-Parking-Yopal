// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add responsive navigation menu for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    
    if (window.innerWidth <= 768) {
        navLinks.style.display = 'none';
        document.querySelector('.nav-container').prepend(hamburger);
        
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
        });
    }
}); 