document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            
            // Trigger Hero Animation after preloader
            document.querySelector('.hero').classList.add('active');
            setTimeout(() => {
                const subtitle = document.querySelector('.hero-subtitle');
                if (subtitle) {
                    subtitle.style.opacity = '1';
                    subtitle.style.transform = 'translateY(0)';
                }
            }, 300);
            setTimeout(() => {
                const title = document.querySelector('.hero-title');
                if (title) {
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                }
            }, 600);
            setTimeout(() => {
                const desc = document.querySelector('.hero-desc');
                if (desc) {
                    desc.style.opacity = '1';
                    desc.style.transform = 'translateY(0)';
                }
            }, 900);
        }, 1500);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations (Intersection Observer)
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
