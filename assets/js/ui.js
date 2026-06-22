$(document).ready(function() {
    // 1. Sticky Header
    const header = $('#mainHeader');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            header.css('box-shadow', 'var(--shadow-md)');
        } else {
            header.css('box-shadow', 'var(--shadow-sm)');
        }
    });

    // 2. Mobile Menu Toggle
    $('.mobile-menu-toggle').click(function() {
        $('.nav-bar').slideToggle();
        $(this).find('i').toggleClass('ph-list ph-x');
    });

    // Mobile Dropdown Toggle
    $('.dropdown > a').click(function(e) {
        if ($(window).width() <= 768) {
            e.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).next('.dropdown-menu').slideToggle();
        }
    });

    // 3. Best Sellers Horizontal Scroll
    const scroller = $('#bestSellersScroller');
    $('#bs-next').click(function() {
        scroller.animate({scrollLeft: '+=320'}, 300);
    });
    $('#bs-prev').click(function() {
        scroller.animate({scrollLeft: '-=320'}, 300);
    });

    // 4. Testimonial Slider
    let currentSlide = 0;
    const slides = $('.testimonial-slide');
    const dots = $('.dot');
    
    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        $(slides[index]).addClass('active');
        $(dots[index]).addClass('active');
        currentSlide = index;
    }

    dots.click(function() {
        showSlide($(this).data('slide'));
    });

    // Auto slider
    if(slides.length > 0) {
        setInterval(function() {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5000);
    }

    // 5. FAQ Accordion
    $('.accordion-header').click(function() {
        // Close others
        $('.accordion-header').not(this).removeClass('active');
        $('.accordion-content').not($(this).next()).slideUp();
        
        // Toggle current
        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();
    });

    // 6. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver(revealCallback, revealOptions);
    revealElements.forEach(el => observer.observe(el));

    // ==========================================================================
    // CUSTOM CURSOR (GSAP)
    // ==========================================================================
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    
    if (!isTouchDevice && typeof gsap !== 'undefined') {
        // 1. Inject Cursor HTML
        const cursorHTML = `
            <div class="custom-cursor-container">
                <div class="cursor-circle main-cursor"></div>
                <div class="cursor-circle cursor-trail"><i class="ph-fill ph-armchair"></i></div>
                <div class="cursor-circle cursor-trail"><i class="ph-fill ph-diamond"></i></div>
                <div class="cursor-circle cursor-trail"><i class="ph-fill ph-star"></i></div>
                <div class="cursor-circle cursor-trail"><i class="ph-fill ph-crown"></i></div>
                <div class="cursor-circle cursor-trail"><i class="ph-fill ph-shield-check"></i></div>
            </div>
        `;
        $('body').append(cursorHTML).addClass('custom-cursor-active');

        // 2. Setup Variables
        const cursor = document.querySelector('.main-cursor');
        const trails = document.querySelectorAll('.cursor-trail');
        
        let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const trailPositions = [];
        
        trails.forEach(() => trailPositions.push({ x: window.innerWidth / 2, y: window.innerHeight / 2 }));

        // 3. Track Mouse
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // 4. GSAP Ticker for smooth follow
        gsap.ticker.add(() => {
            // Main cursor follows instantly
            gsap.set(cursor, { x: mouse.x, y: mouse.y });

            // Trails follow with physics
            let currentX = mouse.x;
            let currentY = mouse.y;

            trails.forEach((trail, index) => {
                const trailPos = trailPositions[index];
                
                // Spring lerp
                trailPos.x += (currentX - trailPos.x) * 0.3;
                trailPos.y += (currentY - trailPos.y) * 0.3;
                
                gsap.set(trail, { x: trailPos.x, y: trailPos.y });
                
                // Next trail follows the current one
                currentX = trailPos.x;
                currentY = trailPos.y;
            });
        });

        // 5. Interactive Hover States & Magnetic Buttons
        // Target buttons, links, and anything interactive
        const interactables = document.querySelectorAll('a, button, input, .interactive, .fab');
        
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { 
                    scale: 3, 
                    backgroundColor: 'rgba(255, 205, 0, 0.2)', // var(--primary-color-hover) faded
                    border: '1px solid var(--primary-color-hover)',
                    duration: 0.3 
                });
                gsap.to(trails, { 
                    scale: 0, 
                    opacity: 0, 
                    duration: 0.3, 
                    stagger: 0.05 
                });
            });
            
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { 
                    scale: 1, 
                    backgroundColor: 'var(--primary-color)',
                    border: 'none',
                    duration: 0.3 
                });
                gsap.to(trails, { 
                    scale: 1, 
                    opacity: 0.9, 
                    duration: 0.3, 
                    stagger: 0.05 
                });
                
                // Reset magnetic effect
                gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
            });
            
            // Magnetic effect for buttons
            el.addEventListener('mousemove', (e) => {
                // Only apply magnetic effect if it's a prominent button (like .btn or .fab)
                if (el.classList.contains('btn') || el.classList.contains('fab')) {
                    const rect = el.getBoundingClientRect();
                    // Calculate distance from center of button
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                    
                    gsap.to(el, { x: x, y: y, duration: 0.3, ease: 'power2.out' });
                }
            });
        });
    }
});
