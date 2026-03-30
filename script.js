$(document).ready(function() {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Data from original context (Ahsan IT)
    const projects = [
        { id: 1, title: "Omnichannel Retail Engine", category: "E-Commerce", description: "Architected a high-availability retail ecosystem with real-time inventory synchronization across 50+ global locations. Reduced checkout latency by 70%.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop", metrics: "70% Latency Reduction | $2M+ ARR" },
        { id: 2, title: "Distributed SaaS Infrastructure", category: "SaaS", description: "Engineered a multi-tenant HR platform with rigid data isolation and automated payroll processing for 10,000+ concurrent enterprise users.", image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=800&auto=format&fit=crop", metrics: "99.99% Uptime | 10k+ Users" },
        { id: 3, title: "Pharma Inventory Mesh", category: "POS", description: "Designed a real-time pharmaceutical stock management system with automated batch tracking and predictive replenishment algorithms.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=800&auto=format&fit=crop", metrics: "Zero Leakage | 50k+ SKUs" },
        { id: 4, title: "High-Performance Logistics App", category: "E-Commerce", description: "Developed a React Native logistics platform with sub-second route optimization and real-time driver telemetry for 100k+ monthly active users.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop", metrics: "Sub-second Routing | 100k+ MAU" },
        { id: 5, title: "Enterprise Learning Ecosystem", category: "SaaS", description: "Scaled a global LMS portal to support 5,000+ interactive courses with low-latency video streaming and automated student progress analytics.", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop", metrics: "5k+ Courses | Global CDN" },
        { id: 6, title: "Cloud-Native Hospitality POS", category: "POS", description: "Built a cloud-native restaurant management system with kitchen display integration and automated table turnover optimization.", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", metrics: "25% Faster Service | Cloud-Native" }
    ];

    const services = [
        { icon: "zap", title: "High-Concurrency Backend", description: "Engineering distributed systems capable of handling millions of requests with sub-200ms latency. We specialize in horizontal scaling and bottleneck elimination." },
        { icon: "shield-check", title: "Fintech Solutions", description: "Building secure, PCI-compliant payment gateways and financial ecosystems. Expert integration with Stripe, PayPal, and custom ledger systems." },
        { icon: "server", title: "System Architecture", description: "Designing decoupled, high-availability systems using Microservices and Background Workers to handle extreme traffic spikes." },
        { icon: "layers", title: "NextGen SaaS & ERP", description: "Developing multi-tenant ecosystems with rigid data isolation and modular design, ready for global enterprise deployment." },
        { icon: "cloud", title: "Cloud Ops & CI/CD", description: "Automating deployment pipelines via Docker and GitHub Actions. Expert AWS/Vultr infrastructure management for zero downtime." },
        { icon: "refresh-ccw", title: "System Modernization", description: "Transforming legacy monoliths into modern, maintainable stacks. We ensure smooth refactoring without halting live operations." }
    ];

    const techArsenal = [
        { category: "Frontend", icon: "code-2", skills: ["Next.js", "React.js", "Vue.js", "Blade", "Tailwind CSS", "Bootstrap 5", "jQuery/AJAX"] },
        { category: "Backend", icon: "database", skills: ["Laravel (Advanced)", "Node.js", "Express.js", "RESTful APIs", "System Design", "Multi-tenant SaaS", "Microservices"] },
        { category: "Database", icon: "bar-chart-3", skills: ["MySQL / MariaDB", "PostgreSQL", "Redis Cache", "MongoDB", "Firebase", "Query Profiling"] },
        { category: "Cloud / DevOps", icon: "cloud", skills: ["AWS (EC2, S3)", "Docker", "NGINX / Apache", "GitHub Actions", "CI/CD", "SSL / App Security", "Vultr"] }
    ];

    const skills = [
        { name: "Backend Architecture", level: 95 },
        { name: "Frontend Engineering", level: 90 },
        { name: "Cloud Infrastructure", level: 85 },
        { name: "Database Optimization", level: 92 },
        { name: "System Scalability", level: 88 }
    ];

    const processes = [
        { step: "01", title: "Discovery", description: "Deep dive into business logic and technical requirements." },
        { step: "02", title: "Architecture", description: "Designing decoupled, scalable system blueprints." },
        { step: "03", title: "Engineering", description: "Agile development with clean, battle-tested code." },
        { step: "04", title: "Deployment", description: "Automated CI/CD pipelines for zero-downtime launches." }
    ];

    const testimonials = [
        { name: "Sarah Jenkins", role: "CTO, RetailFlow", text: "Ahsan IT transformed our legacy system into a high-performance engine. The latency reduction was immediate and impactful.", avatar: "https://i.pravatar.cc/150?u=sarah" },
        { name: "Michael Chen", role: "Founder, HealthTech", text: "The architectural depth and attention to detail provided by Ahsan is unparalleled. Our platform now handles 5x the traffic with ease.", avatar: "https://i.pravatar.cc/150?u=michael" },
        { name: "David Rodriguez", role: "Product Head, LogiLink", text: "Professional, efficient, and technically brilliant. They are our go-to partner for all complex full-stack requirements.", avatar: "https://i.pravatar.cc/150?u=david" }
    ];

    // Render Services
    services.forEach(service => {
        $('#services-grid').append(`
            <div class="col-md-6 col-lg-4">
                <div class="card-hover glass p-5 rounded-5 h-100 scale-up">
                    <div class="icon-container mb-4 text-gold">
                        <i data-lucide="${service.icon}" class="w-10 h-10"></i>
                    </div>
                    <h3 class="fw-black mb-3">${service.title}</h3>
                    <p class="text-slate-400 mb-0">${service.description}</p>
                </div>
            </div>
        `);
    });

 

    // Render Process
    processes.forEach(proc => {
        $('#process-grid').append(`
            <div class="col-md-6 col-lg-3">
                <div class="process-card glass p-4 rounded-5 h-100 scale-up">
                    <span class="display-4 fw-black text-gold opacity-20 mb-3 d-block">${proc.step}</span>
                    <h4 class="fw-black mb-3">${proc.title}</h4>
                    <p class="text-slate-400 mb-0 small">${proc.description}</p>
                </div>
            </div>
        `);
    });

    // Render Portfolio
    projects.forEach(project => {
        $('#portfolio-grid').append(`
            <div class="col-md-6 col-lg-4">
                <div class="portfolio-card glass rounded-5 group scale-up">
                    <img src="${project.image}" class="portfolio-img" alt="${project.title}">
                    <div class="portfolio-overlay">
                        <span class="badge bg-gold text-midnight rounded-pill px-3 py-2 mb-3 align-self-start fw-bold">${project.category}</span>
                        <h3 class="fw-black text-white mb-2">${project.title}</h3>
                        <p class="text-white opacity-75 small mb-3">${project.description}</p>
                        <div class="d-flex align-items-center gap-2 text-gold small fw-bold">
                            <i data-lucide="bar-chart-3" class="w-4 h-4"></i> ${project.metrics}
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    // Render Tech Arsenal
    techArsenal.forEach(tech => {
        $('#tech-grid').append(`
            <div class="col-md-6 col-lg-3">
                <div class="tech-card glass scale-up">
                    <div class="d-flex align-items-center gap-3 mb-4">
                        <div class="text-gold"><i data-lucide="${tech.icon}" class="w-6 h-6"></i></div>
                        <h4 class="fw-black mb-0">${tech.category}</h4>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        ${tech.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `);
    });

    // Render Testimonials
    testimonials.forEach(testi => {
        $('#testimonials-grid').append(`
            <div class="col-md-4">
                <div class="testimonial-card glass p-5 rounded-5 h-100 scale-up">
                    <div class="d-flex align-items-center gap-3 mb-4">
                        <img src="${testi.avatar}" class="rounded-circle border border-gold" width="50" height="50" alt="${testi.name}">
                        <div>
                            <h5 class="fw-bold mb-0">${testi.name}</h5>
                            <p class="text-gold small mb-0">${testi.role}</p>
                        </div>
                    </div>
                    <p class="text-slate-400 mb-0 italic">"${testi.text}"</p>
                </div>
            </div>
        `);
    });

    // Re-initialize Lucide Icons for dynamic content
    lucide.createIcons();

    // Custom Cursor Logic
    const cursor = $('#cursor');
    const follower = $('#cursor-follower');

    $(document).on('mousemove', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        gsap.to(cursor, {
            x: x,
            y: y,
            duration: 0,
            ease: "none"
        });

        gsap.to(follower, {
            x: x - 20,
            y: y - 20,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    // Cursor Interactions
    $('a, button, .card-hover, .portfolio-card').on('mouseenter', function() {
        follower.addClass('active');
    }).on('mouseleave', function() {
        follower.removeClass('active');
    });

    // Cursor Dragging Animation
    $(document).on('mousedown', function() {
        follower.addClass('dragging');
    }).on('mouseup', function() {
        follower.removeClass('dragging');
    });

    // Navbar Scroll Effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('#main-nav').addClass('scrolled shadow-lg');
        } else {
            $('#main-nav').removeClass('scrolled shadow-lg');
        }

        // Update Scroll Progress
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        $('#scroll-progress').css('width', scrolled + '%');
    });

    // Theme Toggle
    $('#theme-toggle').click(function() {
        $('html').toggleClass('light dark');
        $('.sun-icon, .moon-icon').toggleClass('d-none');
        
        if ($('html').hasClass('light')) {
            $('body').removeClass('bg-midnight text-slate-200').addClass('bg-paper text-slate-900');
        } else {
            $('body').removeClass('bg-paper text-slate-900').addClass('bg-midnight text-slate-200');
        }
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Scale-up Animations using jQuery & GSAP for smooth scroll trigger
    $('.scale-up').each(function() {
        gsap.to(this, {
            scrollTrigger: {
                trigger: this,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Progress Bar Animation
    $('.progress-bar').each(function() {
        const bar = $(this);
        const level = bar.data('level');
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: "top 95%",
                toggleActions: "play none none none"
            },
            width: level + '%',
            duration: 1.5,
            ease: "power2.out"
        });
    });

    // Form Submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        const btn = $(this).find('button[type="submit"]');
        const originalText = btn.html();
        
        btn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-2"></span> SENDING...');
        
        setTimeout(() => {
            btn.html('<i data-lucide="check" class="me-2"></i> SENT SUCCESSFULLY!');
            lucide.createIcons();
            setTimeout(() => {
                $('#contactModal').modal('hide');
                btn.prop('disabled', false).html(originalText);
                lucide.createIcons();
                $('#contactForm')[0].reset();
            }, 2000);
        }, 1500);
    });
});
