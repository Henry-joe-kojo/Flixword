// script.js

// Function to handle Sign In button click
document.querySelector('.sign-in').addEventListener('click', function() {
    alert('You clicked Sign In!');
});

// Function to handle Try Now button click
document.querySelector('.cta').addEventListener('click', function() {
    alert('You clicked Try Now! Let’s start your free trial.');
});

// Optional: Add smooth scrolling for navigation links if you had any
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Optional: Add a simple scroll effect to fade in the navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Optional: Adding a hover effect to movie cards
const movieCards = document.querySelectorAll('.movie-card');
movieCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.5s ease-in-out';
    });
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'scale(1)';
    });
});
