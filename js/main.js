/* 
    ARGHAN TECH - Official Website Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hero = document.getElementById('hero');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 12, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial state for reveal elements
    document.querySelectorAll('.card, .section-head, .contact-wrapper').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent actual form submission to server

            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            const statusDiv = document.getElementById('formStatus');

            // Loading state
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;
            statusDiv.className = 'form-status';
            statusDiv.style.display = 'none';

            // Simulate network request
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;

                // Show success
                statusDiv.innerText = 'Message sent successfully! We will get back to you shortly.';
                statusDiv.className = 'form-status success';

                // Reset form
                this.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    // Project Data for Modals
    const projectData = {
        'saas-pos': {
            title: 'SaaS POS System',
            desc: 'A comprehensive Point of Sale solution featuring advanced inventory management, real-time analytics, and automated licensing controls.',
            images: [
                'assets/POS-Dashboard.png',
                'assets/Quick POS.png'
            ],
            link: 'pos.html'
        },
        'control-center': {
            title: 'Control Center',
            desc: 'The global infrastructure layer for managing thousands of stores, license activations, and system-wide security protocols.',
            images: [
                'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '../SuperAdminSystem'
        },
        'supply-chain': {
            title: 'Supply Chain Hub',
            desc: 'Optimized logistics and supplier management system designed to bridge the gap between procurement and inventory replenishment.',
            images: [
                'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '../Suppliers'
        },
        'school-management': {
            title: 'School Management System',
            desc: 'A unified digital campus platform streamlining administration, grading, attendance tracking, and parent-teacher communications.',
            images: [
                'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '#'
        },
        'online-menu': {
            title: 'Online Menu App',
            desc: 'Interactive, dynamic dining application allowing seamless QR code ordering and real-time menu updates for restaurants.',
            images: [
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '#'
        },
        'multi-web': {
            title: 'Multi-Web Demo',
            desc: 'A highly adaptable, scalable frontend framework designed for rapidly launching interconnected corporate websites and portals.',
            images: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '#'
        }
    };

    // Customer Data for Modals
    const customerData = {
        'cust-1': {
            title: 'TechNova Solutions',
            desc: 'TechNova Solutions partnered with Arghan Tech to scale their cloud infrastructure globally. Our control center integration helped them manage servers across 14 countries seamlessly.',
            image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        },
        'cust-2': {
            title: 'Global Finance Inc.',
            desc: 'Global Finance Inc. relies on Arghan Tech\'s secure enterprise licensing systems to maintain robust compliance and security across their global trading platforms.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        },
        'cust-3': {
            title: 'Nexus Retail Group',
            desc: 'Nexus revolutionized their inventory management by implementing our SaaS POS system across their 500+ store network, drastically reducing waste and increasing operational efficiency.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        },
        'cust-4': {
            title: 'AeroSpace Dynamics',
            desc: 'Arghan Tech provides real-time supply chain analytics to AeroSpace Dynamics, ensuring their critical manufacturing components arrive securely and precisely on schedule.',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        },
        'cust-5': {
            title: 'OmniHealth Systems',
            desc: 'OmniHealth utilizes our multi-web demo framework to rapidly deploy secure, interconnected patient portals across their hospital networks.',
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        },
        'cust-6': {
            title: 'Vertex Logistics',
            desc: 'Vertex relies on our Control Center software to track, monitor, and manage the licensing of their global fleet tracking devices in real-time.',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
            link: '#'
        }
    };

    // Global Modal Functions
    window.openProjectModal = function (projectId) {
        const data = projectData[projectId];
        if (!data) return;

        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalLiveLink').href = data.link;

        const gallery = document.getElementById('modalGallery');
        gallery.innerHTML = ''; // clear existing
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title + ' Screenshot';
            gallery.appendChild(img);
        });

        const modal = document.getElementById('projectModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    };

    window.closeProjectModal = function () {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling
    };

    // Close modal on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeCustomerModal();
        }
    });

    // Global Customer Modal Functions
    window.openCustomerModal = function (custId) {
        const data = customerData[custId];
        if (!data) return;

        document.getElementById('custModalImg').src = data.image;
        document.getElementById('custModalTitle').innerText = data.title;
        document.getElementById('custModalDesc').innerText = data.desc;
        document.getElementById('custModalLink').href = data.link;

        const modal = document.getElementById('customerModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeCustomerModal = function () {
        const modal = document.getElementById('customerModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // --- Star Collision & Brand Reveal Logic ---
    function initStarCollision() {
        const collisionContainer = document.getElementById('collision-container');
        const brandContainer = document.getElementById('brand-reveal-container');
        if (!collisionContainer || !brandContainer) return;

        const BRAND_NAME = "ARGHAND SOFTWARE HOUSE";


        function triggerCollision() {
            const rect = collisionContainer.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            // 1. Pick an Impact Point relative to the tech-core (The Circle)
            const techCore = document.querySelector('.tech-core');
            const techCoreRect = techCore.getBoundingClientRect();
            const collisionRect = collisionContainer.getBoundingClientRect();

            // Calculate tech-core center relative to collisionContainer
            const centerX = (techCoreRect.left + techCoreRect.width / 2) - collisionRect.left;
            const centerY = (techCoreRect.top + techCoreRect.height / 2) - collisionRect.top;

            // Add a small randomized offset so it's "around" the circle but not always dead center
            const tx = centerX + (Math.random() - 0.5) * 100;
            const ty = centerY + (Math.random() - 0.5) * 100;

            // 2. Spawn exactly 2 Collider Stars
            const collisionStars = [];
            for (let i = 0; i < 2; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = 1200; // Far start
                const sx = (w / 2) + Math.cos(angle) * dist;
                const sy = (h / 2) + Math.sin(angle) * dist;

                const star = document.createElement('div');
                star.className = 'star-particle';
                const rot = Math.atan2(ty - sy, tx - sx) * (180 / Math.PI);
                star.style.left = `${sx}px`;
                star.style.top = `${sy}px`;
                star.style.transform = `rotate(${rot}deg)`;
                collisionContainer.appendChild(star);

                const travelTime = 1800; // Constant time = constant speed (linear)
                star.animate([
                    { left: `${sx}px`, top: `${sy}px`, opacity: 0 },
                    { opacity: 1, offset: 0.1 },
                    { left: `${tx}px`, top: `${ty}px`, opacity: 1 }
                ], {
                    duration: travelTime,
                    easing: 'linear', // User requested: speed doesn't slow down
                    fill: 'forwards'
                });

                collisionStars.push({ star, time: travelTime });
            }

            // 3. Handle Impact & Text Assembly
            const impactTime = collisionStars[0].time;

            setTimeout(() => {
                collisionStars.forEach(s => s.star.remove());

                // Explosion Visuals
                const flash = document.createElement('div');
                flash.className = 'impact-flash';
                flash.style.left = `${tx}px`;
                flash.style.top = `${ty}px`;
                flash.style.transform = 'translate(-50%, -50%)';
                flash.style.animation = 'flashIn 1s ease-out forwards';
                collisionContainer.appendChild(flash);
                setTimeout(() => flash.remove(), 1200);

                for (let i = 0; i < 35; i++) {
                    const spark = document.createElement('div');
                    spark.className = 'spark';
                    spark.style.left = `${tx}px`;
                    spark.style.top = `${ty}px`;
                    collisionContainer.appendChild(spark);
                    const sa = Math.random() * Math.PI * 2;
                    const sd = 80 + Math.random() * 250;
                    spark.animate([
                        { transform: 'translate(-50%, -50%) scale(1.5)', opacity: 1 },
                        { transform: `translate(${-50 + Math.cos(sa) * sd}px, ${-50 + Math.sin(sa) * sd}px) scale(0)`, opacity: 0 }
                    ], { duration: 1000 + Math.random() * 800, easing: 'ease-out' }).onfinish = () => spark.remove();
                }

                // Fragmented Text Formation
                brandContainer.innerHTML = '';
                const brandDiv = document.createElement('div');
                brandDiv.className = 'dynamic-brand-text';
                brandDiv.style.left = `${tx}px`;
                brandDiv.style.top = `${ty}px`;

                const words = BRAND_NAME.split(' ');
                words.forEach(word => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'brand-word';
                    [...word].forEach((letter, idx) => {
                        const letterSpan = document.createElement('span');
                        letterSpan.className = 'letter-particle assemble';
                        letterSpan.innerText = letter;
                        letterSpan.style.animationDelay = `${idx * 0.03}s`;
                        wordSpan.appendChild(letterSpan);
                    });
                    brandDiv.appendChild(wordSpan);
                });

                brandDiv.classList.add('reveal');
                brandContainer.appendChild(brandDiv);

                // 6. Global Corner Flash (Visual cue when scrolled away)
                const globalFlashContainer = document.getElementById('global-flash-container');
                if (globalFlashContainer) {
                    globalFlashContainer.innerHTML = '';
                    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
                    corners.forEach(corner => {
                        const flash = document.createElement('div');
                        flash.className = `corner-flash ${corner}`;
                        globalFlashContainer.appendChild(flash);
                        setTimeout(() => flash.remove(), 1000);
                    });
                }

            }, impactTime);
        }

        setInterval(triggerCollision, 10000);
        setTimeout(triggerCollision, 1000);
    }

    initStarCollision();

    console.log('ARGHAN TECH Portal Initialized.');
});
