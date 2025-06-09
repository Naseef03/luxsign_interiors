// Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Mobile menu toggle functionality would go here
// You would need to add the mobile menu HTML and this JS to make it work

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navContainer.classList.toggle('mobile-menu-open');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navContainer.classList.remove('mobile-menu-open');
        });
    });
});

// Add this to your existing scripts.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Change 50 to the number of pixels scrolled before the background changes
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});