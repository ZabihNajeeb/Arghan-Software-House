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
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
            ],
            link: '../SaaS_POS_System'
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
            // 1. Setup Coordinates
            const rect = collisionContainer.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Random target within the visualized core area
            const angleTarget = Math.random() * Math.PI * 2;
            const distTarget = Math.random() * 80;
            const tx = centerX + Math.cos(angleTarget) * distTarget;
            const ty = centerY + Math.sin(angleTarget) * distTarget;

            // Start points far outside (radius 600px)
            const angle1 = Math.random() * Math.PI * 2;
            const angle2 = angle1 + Math.PI + (Math.random() - 0.2) * 0.4;
            const radiusStart = 600;

            const s1x = centerX + Math.cos(angle1) * radiusStart;
            const s1y = centerY + Math.sin(angle1) * radiusStart;
            const s2x = centerX + Math.cos(angle2) * radiusStart;
            const s2y = centerY + Math.sin(angle2) * radiusStart;

            // Calculate rotation for trails
            const rot1 = Math.atan2(ty - s1y, tx - s1x) * (180 / Math.PI);
            const rot2 = Math.atan2(ty - s2y, tx - s2x) * (180 / Math.PI);

            // 2. Create Star Particles
            const star1 = document.createElement('div');
            const star2 = document.createElement('div');
            star1.className = 'star-particle';
            star2.className = 'star-particle';

            star1.style.left = `${s1x}px`;
            star1.style.top = `${s1y}px`;
            star1.style.transform = `rotate(${rot1}deg)`;
            star2.style.left = `${s2x}px`;
            star2.style.top = `${s2y}px`;
            star2.style.transform = `rotate(${rot2}deg)`;

            collisionContainer.appendChild(star1);
            collisionContainer.appendChild(star2);

            // 3. Animate to Collision
            const travelTime = 1500; // 1.5 seconds travel for longer distance

            const animOptions = {
                duration: travelTime,
                easing: 'cubic-bezier(0.2, 0, 0.2, 1)',
                fill: 'forwards'
            };

            star1.animate([
                { left: `${s1x}px`, top: `${s1y}px`, opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { left: `${tx}px`, top: `${ty}px`, opacity: 1 }
            ], animOptions);

            star2.animate([
                { left: `${s2x}px`, top: `${s2y}px`, opacity: 0 },
                { opacity: 1, offset: 0.1 },
                { left: `${tx}px`, top: `${ty}px`, opacity: 1 }
            ], animOptions);

            // 4. Collision Impact
            setTimeout(() => {
                star1.remove();
                star2.remove();

                // Create Flash
                const flash = document.createElement('div');
                flash.className = 'impact-flash';
                flash.style.left = `${tx}px`;
                flash.style.top = `${ty}px`;
                flash.style.transform = 'translate(-50%, -50%)';
                flash.style.animation = 'flashIn 1s ease-out forwards';
                collisionContainer.appendChild(flash);
                setTimeout(() => flash.remove(), 1200);

                // Create Sparks
                for (let i = 0; i < 20; i++) {
                    const spark = document.createElement('div');
                    spark.className = 'spark';
                    spark.style.left = `${tx}px`;
                    spark.style.top = `${ty}px`;
                    collisionContainer.appendChild(spark);

                    const sa = Math.random() * Math.PI * 2;
                    const sd = 50 + Math.random() * 150;

                    spark.animate([
                        { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                        { transform: `translate(${-50 + Math.cos(sa) * sd}px, ${-50 + Math.sin(sa) * sd}px) scale(0)`, opacity: 0 }
                    ], { duration: 1000 + Math.random() * 500, easing: 'ease-out' }).onfinish = () => spark.remove();
                }

                // 5. Reveal Text
                brandContainer.innerHTML = ''; // Strict clear
                const brandText = document.createElement('div');
                brandText.className = 'dynamic-brand-text reveal';
                brandText.style.left = `${tx}px`;
                brandText.style.top = `${ty}px`;
                brandText.innerText = BRAND_NAME;
                brandContainer.appendChild(brandText);

            }, travelTime);
        }

        // Run every 10 seconds accurately
        setInterval(triggerCollision, 10000);
        // Initial trigger after short delay
        setTimeout(triggerCollision, 1000);
    }

    initStarCollision();

    console.log('ARGHAN TECH Portal Initialized.');
});
