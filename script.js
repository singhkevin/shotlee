// Smooth scroll and micro-interactions

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Parallax effect for hero background
    let lastScroll = 0;
    const hero = document.querySelector('.hero');
    const heroBackground = document.querySelector('.hero-background');

    if (hero && heroBackground) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrollTop * 0.5}px)`;
            }
        });
    }

    // Cursor effect for CTAs (optional premium touch)
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature cards hover enhancement
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Use case items interaction
    const useCaseItems = document.querySelectorAll('.use-case-item');
    useCaseItems.forEach(item => {
        item.addEventListener('click', function() {
            // Subtle pulse effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    const menuOverlay = document.querySelector('#menu-overlay');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        if (menuOverlay) {
            menuOverlay.addEventListener('click', function() {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Close menu when clicking a nav link (mobile)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    mainNav.classList.remove('active');
                    if (menuOverlay) {
                        menuOverlay.classList.remove('active');
                    }
                    document.body.style.overflow = '';
                }
            });
        });

        // Close menu on window resize if it becomes desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('active');
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    }

    // Comparison Slider Logic
    const comparisonContainers = document.querySelectorAll('.comparison-image-container');
    
    comparisonContainers.forEach(container => {
        const slider = container.querySelector('.slider-handle');
        const beforeWrapper = container.querySelector('.img-before-wrapper');
        const beforeImg = container.querySelector('.img-before');
        const sliderButton = container.querySelector('.slider-button');

        if (slider && beforeWrapper && beforeImg && sliderButton) {
            // Function to update slider position
            const updateSlider = () => {
                const value = slider.value;
                beforeWrapper.style.width = `${value}%`;
                sliderButton.style.left = `${value}%`;
            };

            // Function to sync image width with container width
            const syncImageWidth = () => {
                beforeImg.style.width = `${container.offsetWidth}px`;
            };

            // Event listeners
            slider.addEventListener('input', updateSlider);
            window.addEventListener('resize', syncImageWidth);
            
            // Initial setup
            updateSlider();
            syncImageWidth();
            
            // Re-sync after a short delay to ensure layout is settled
            setTimeout(syncImageWidth, 100);
        }
    });
});
