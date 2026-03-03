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

    console.log('ARGHAN TECH Portal Initialized.');
});
