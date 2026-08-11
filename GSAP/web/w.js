document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor Movement
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;

        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects on interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .work-item, .service-card, .stat-item");
    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });

    // Scroll Progress Bar Animation
    gsap.to(".progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });

    // Hero Split Text Animation
    const heroTitle = document.querySelector(".hero-title");
    const lines = heroTitle.querySelectorAll(".line");

    lines.forEach((line) => {
        const text = line.textContent;
        line.innerHTML = "";
        text.split("").forEach((char) => {
            const span = document.createElement("span");
            span.className = "car";
            span.textContent = char === " " ? "\u00A0" : char;
            line.appendChild(span);
        });
    });

    const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

    heroTl.to(".hero-subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2
    })
    .to(".hero-title .car", {
        y: 0,
        duration: 1.2,
        stagger: 0.03,
        ease: "back.out(1.7)"
    }, "-=0.6")
    .to(".hero-description", {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.8")
    .to(".hero-cta", {
        opacity: 1,
        y: 0,
        duration: 1
    }, "-=0.8");

    // Hero Parallax on Scroll
    gsap.to(".hero-content", {
        y: 150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // About Section Animations
    gsap.from(".about-label, .about-title, .about-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Stats Counter Animation
    const statNumbers = document.querySelectorAll(".stat-number");
    statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-value"));
        gsap.to(stat, {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: "power1.out",
            scrollTrigger: {
                trigger: stat,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // About Visual Animation
    gsap.from(".about-visual", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-visual",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Services Horizontal Scroll
    const serviceTrack = document.querySelector(".services-track");
    // FIXED: Removed the "+ 100" that was causing the massive black gap
    const getScrollAmount = () => serviceTrack.scrollWidth - window.innerWidth;

    const tween = gsap.to(serviceTrack, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
            trigger: ".services",
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });

    // Service Cards Entrance Animation
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left 80%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Work Header Animation
    gsap.from(".work-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".work",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Work Items Animation
    const workItems = document.querySelectorAll(".work-item");
    workItems.forEach((item) => {
        gsap.from(item, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Image Parallax inside Work Item
        const img = item.querySelector(".work-image");
        gsap.to(img, {
            y: "15%",
            ease: "none",
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Testimonials Carousel Logic
    const testimonialItems = document.querySelectorAll(".testimonial-item");
    const testimonialDots = document.querySelectorAll(".testimonial-dot");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialItems.forEach(item => item.classList.remove("active"));
        testimonialDots.forEach(dot => dot.classList.remove("active"));

        testimonialItems[index].classList.add("active");
        testimonialDots[index].classList.add("active");
        currentTestimonial = index;
    }

    testimonialDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showTestimonial(index);
        });
    });

    setInterval(() => {
        let next = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(next);
    }, 5000);

    // Contact Animations
    gsap.from(".contact-info h2, .contact-info p, .contact-details", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.from(".contact-form .form-group, .contact-form .submit-btn", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Form Submission Interactive Feedback
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector(".submit-btn span");
        const originalText = btn.textContent;

        btn.textContent = "Sending...";
        
        setTimeout(() => {
            btn.textContent = "Message Sent!";
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
            }, 3000);
        }, 1500);
    });

    // Window Resize Handler for ScrollTrigger Refresh
    window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
    });
});