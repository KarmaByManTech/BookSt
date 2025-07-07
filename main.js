// Scroll-to-top button functionality
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Add highlight to nav links on hover and for current page (simulate for this demo)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('active-nav');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('active-nav');
    });
});

// Animate feature cards on scroll into view
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'featurePop 1s';
            entry.target.style.opacity = "1";
        }
    });
}, { threshold: 0.18 });
featureCards.forEach(card => {
    card.style.opacity = "0";
    observer.observe(card);
});