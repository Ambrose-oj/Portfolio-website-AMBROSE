document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Effect for Hero
    const textElement = document.getElementById('typing-text');
    const phrases = ['Web Developer', 'Front-End Specialist', 'Full-Stack Developer',];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function loop() {
        const isEnd = i === phrases.length;
        textElement.innerHTML = currentPhrase.join('');

        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
        }

        if (j === phrases[i].length) {
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) i = 0;
        }

        const spedUp = Math.random() * (80 - 50) + 50;
        const normalSpeed = Math.random() * (150 - 100) + 100;
        const time = isDeleting ? spedUp : normalSpeed;
        setTimeout(loop, time);
    }
    loop();

    // 2. Reveal on Scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});