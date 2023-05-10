let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.welcome-line', { origin: 'top', delay: 1000 });
ScrollReveal().reveal('.home-content p', { origin: 'top', delay: 2000 });
ScrollReveal().reveal('.about-img, .linkedin-box, .codepen-box', { origin: 'right' });
ScrollReveal().reveal('.resume-img, .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.about-content, .email-box, .github-box', { origin: 'left' });