document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        // Trigger Hero Content Animations
        setTimeout(() => {
            const title = document.querySelector('.hero-title');
            if (title) {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }
        }, 100);
        setTimeout(() => {
            const subtitle = document.querySelector('.hero-subtitle');
            if (subtitle) {
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }
        }, 300);
        setTimeout(() => {
            const desc = document.querySelector('.hero-desc');
            if (desc) {
                desc.style.opacity = '1';
                desc.style.transform = 'translateY(0)';
            }
        }, 500);
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

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // ─── Universal Accordion ────────────────────────────────────────────────

    // 1. Feature Rows — inject toggle button & wire up click
    document.querySelectorAll('.feature-row').forEach(row => {
        const titleCol = row.querySelector('.feature-col-title');
        const descCol  = row.querySelector('.feature-col-desc');
        if (!titleCol || !descCol) return;

        // Inject the +/- button at far right of the row
        const btn = document.createElement('span');
        btn.className = 'accordion-toggle';
        btn.textContent = '+';
        row.appendChild(btn);

        // Toggle on row click
        row.addEventListener('click', () => {
            const isOpen = row.classList.contains('accordion-open');
            row.classList.toggle('accordion-open', !isOpen);
            btn.textContent = isOpen ? '+' : '×';
        });
    });

    // 2. Community Accordion Cards — already have markup, just wire up
    document.querySelectorAll('.community-accordion').forEach(card => {
        const btn = card.querySelector('.accordion-toggle');
        if (!btn) return;

        card.addEventListener('click', () => {
            const isOpen = card.classList.contains('accordion-open');
            card.classList.toggle('accordion-open', !isOpen);
            btn.textContent = isOpen ? '+' : '×';
        });
    });

    // ─── Modal & Form Interaction ───────────────────────────────────────────
    const joinModal = document.getElementById('join-community-modal');
    const openFormBtn = document.getElementById('open-join-form-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const closeSuccessBtn = document.getElementById('close-success-btn');
    const joinForm = document.getElementById('join-community-form');
    const successMsg = document.getElementById('form-success-message');

    if (openFormBtn && joinModal) {
        openFormBtn.addEventListener('click', () => {
            joinModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock background scroll
        });
    }

    const hideModal = () => {
        if (joinModal) {
            joinModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore background scroll
            // Reset form states after close animation completes
            setTimeout(() => {
                if (joinForm && successMsg) {
                    joinForm.style.display = 'block';
                    successMsg.style.display = 'none';
                    joinForm.reset();
                }
            }, 500);
        }
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideModal);
    }
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', hideModal);
    }

    // Close when clicking outside the modal card
    if (joinModal) {
        joinModal.addEventListener('click', (e) => {
            if (e.target === joinModal) {
                hideModal();
            }
        });
    }

    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Extract form values
            const signupData = {
                id: Date.now(),
                name: document.getElementById('form-name').value.trim(),
                mobile: document.getElementById('form-mobile').value.trim(),
                email: document.getElementById('form-email').value.trim(),
                role: document.getElementById('form-role').value,
                city: document.getElementById('form-city').value.trim(),
                district: document.getElementById('form-district').value.trim(),
                state: document.getElementById('form-state').value.trim(),
                country: document.getElementById('form-country').value.trim(),
                date: new Date().toLocaleString()
            };

            // Save to localStorage for demo & admin panel
            const currentSignups = JSON.parse(localStorage.getItem('nativeground_signups') || '[]');
            currentSignups.push(signupData);
            localStorage.setItem('nativeground_signups', JSON.stringify(currentSignups));

            // Optional: submit to a webhook if configured (e.g., Google Apps Script)
            const webhookUrl = localStorage.getItem('nativeground_webhook_url');
            if (webhookUrl) {
                fetch(webhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signupData)
                }).catch(err => console.error('Webhook post failed:', err));
            }

            // Animate states
            joinForm.style.display = 'none';
            successMsg.style.display = 'block';
        });
    }
});

