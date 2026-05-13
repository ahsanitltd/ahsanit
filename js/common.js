
const siteComponents = {
    head: `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- 1. Preconnect & DNS-Prefetch (Domain Level) -->
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://unpkg.com">

        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
        <link rel="dns-prefetch" href="https://fonts.googleapis.com">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
 

        <!-- 2. Preload Files -->
        <link rel="preload" href="../css/bootstrap.css" as="style">
        <link rel="preload" href="../css/poppins.css" as="style">
        <link rel="preload" href="../css/swiper-bundle.css" as="style">


        <!-- 3. Meta Tags (আপনার বর্তমান কোড অনুযায়ী) -->
        <meta name="description" content="Professional IT and eCommerce solutions tailored for your business.">
        <meta property="og:title" content="Ahsan IT | Enterprise Solutions & Offers">
        <meta property="og:description" content="Brief description of your services.">
        <meta property="og:url" content="https://ahsanit.net">
        <meta property="og:type" content="website">
        <meta property="og:image" content="https://ahsanit.net/images/og-banner.webp">
        <meta property="og:image:secure_url" content="https://ahsanit.net/images/og-banner.webp">
        <meta property="og:image:type" content="image/webp">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">

        <!-- Twitter Card Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Ahsan IT | Enterprise Solutions & Offers">
        <meta name="twitter:description" content="Professional IT and eCommerce solutions tailored for your business.">
        <!-- এখানেও সম্পূর্ণ ইউআরএল ব্যবহার করুন -->
        <meta name="twitter:image" content="https://ahsanit.net/images/og-banner.webp">
        <meta name="twitter:url" content="https://ahsanit.net">


        <!-- 4. Icon -->
        <link rel="icon" type="image/webp" href="../images/favicon.webp">
  
        
        <!-- 5. global styling -->
        <link rel="stylesheet" href="../css/bootstrap.css">
        <link rel="stylesheet" href="../css/poppins.css">
        <link rel="stylesheet" href="../css/swiper-bundle.css">
        
        <!-- 6. main custom styling -->
        <link rel="stylesheet" href="../css/style.css">
    `,

    // আপনার অরিজিনাল নেভিগেশন বার
    header: `
    <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold bg-white" href="/">
                <img src="../images/favicon.webp" alt="Ahsan IT" class="" width="100px" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ahsanNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="ahsanNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link fw-bold" href="#marketplace">Php Scripts</a></li>
                    <li class="nav-item"><a class="nav-link fw-bold" href="#footer">Contact us</a></li>
                </ul>
            </div>
        </div>
    </nav>`,

    // আপনার অরিজিনাল ফুটার কোড
    footer: `
    <footer class="footer-section pt-5 pb-4 border-top mt-5" style="background: var(--card-bg);" id="footer">
        <div class="container">
            <div class="row g-5 mb-5">
                <div class="col-lg-4">
                    <div class="founder-card text-start">
                        <h5 class="fw-bold text-primary mb-1">Ahsan Ahmed</h5>
                        <p class="text-muted small mb-3">Founder & Full Stack Software Engineer, <span class="text-primary fw-semibold">AhsanIT</span></p>
                        <div class="expertise-list d-flex flex-column gap-2 mb-4">
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa fa-layer-group text-primary opacity-75 small"></i>
                                <span class="small fw-medium text-muted">Enterprise Laravel Architecture</span>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa fa-shield-alt text-primary opacity-75 small"></i>
                                <span class="small fw-medium text-muted">Fintech & Secure API Engineering</span>
                            </div>
                            <div class="d-flex align-items-center gap-2">
                                <i class="fa fa-cloud text-primary opacity-75 small"></i>
                                <span class="small fw-medium text-muted">Cloud Operations & DevOps</span>
                            </div>
                        </div>
                        <div class="d-flex gap-2">
                            <a href="https://www.facebook.com/ahsanit.net" class="btn btn-sm btn-light rounded-circle shadow-sm"><i class="fab fa-facebook-f text-primary"></i></a>
                            <a href="https://wa.me/8801580314701" class="btn btn-sm btn-light rounded-circle shadow-sm"><i class="fab fa-whatsapp text-success"></i></a>
                            <div class="d-flex gap-2">
                                <button id="themeToggle" class="btn btn-light rounded-circle border shadow-sm"><i
                                        class="fa fa-moon"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-start">
                    <h6 class="fw-bold mb-4">Contact 📞</h6>
                    <div class="d-flex flex-column gap-3 text-start">
                        <div class="d-flex align-items-start gap-3">
                            <i class="fa fa-globe text-primary mt-1"></i>
                            <div>
                                <span class="d-block fw-bold small">Availability</span>
                                <span class="text-muted small">Online-based 🌐 (Remote Globally)</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start gap-3">
                            <i class="fab fa-whatsapp text-primary mt-1"></i>
                            <div>
                                <span class="d-block fw-bold small">WhatsApp</span>
                                <span class="text-muted small">
                                <a href="https://wa.me/8801580314701" class="text-muted text-decoration-none">
                                +880-1580314701
                                </a>
                                </span>
                            </div>
                            <i class="fa fa-phone-alt text-primary mt-1"></i>
                            <div>
                                <span class="d-block fw-bold small">Phone</span>
                                <span class="text-muted small">
                                +880-1948484161
                                </span>
                            </div>
                        </div>
                        <div class="d-flex align-items-start gap-3">
                            <i class="fa fa-envelope-open text-primary mt-1"></i>
                            <div>
                                <span class="d-block fw-bold small">Official Email</span>
                                <a href="mailto:contact@ahsanit.net" class="text-muted text-decoration-none small">contact@ahsanit.net</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-start">
                    <div class="contact-box p-4 rounded-4 border bg-light shadow-sm">
                        <h6 class="fw-bold mb-3"><i class="fa fa-paper-plane text-primary me-2"></i>মেসেজ পাঠান</h6>
                        <form id="localContactForm">
                            <input type="text" id="userName" class="form-control form-control-sm rounded-pill px-3 mb-2 border-0 shadow-sm" placeholder="নাম" required>
                            <input type="email" id="userEmail" class="form-control form-control-sm rounded-pill px-3 mb-2 border-0 shadow-sm" placeholder="ইমেইল" required>
                            <textarea id="userMsg" class="form-control form-control-sm rounded-4 px-3 mb-3 border-0 shadow-sm" rows="3" placeholder="কিভাবে সাহায্য করতে পারি?" required></textarea>
                            <button type="submit" class="btn btn-primary btn-sm w-100 rounded-pill fw-bold shadow">Save Message</button>
                        </form>
                        <div id="msgStatus" class="mt-2 small text-success fw-bold text-center d-none">সেভ করা হয়েছে!</div>
                    </div>
                </div>
            </div>
            <div class="text-center pt-4 border-top">
                <p class="text-muted small mb-0">© ২০২৬ <strong>AhsanIT</strong>. আপনার ব্যবসার জন্য কমপ্লিট সলিউশন।</p>
            </div>
        </div>
    </footer>`,

    actionButtons: [
        {
            text: '',
            link: 'https://wa.me/8801580314701',
            class: 'btn-success flex-fill',
            icon: 'fab fa-whatsapp',
            type: 'link'
        },
        {
            text: '',
            link: 'https://m.me/ahsanit.net',
            class: 'btn-primary flex-fill',
            icon: 'fab fa-facebook-messenger',
            type: 'link'
        },
        {
            text: 'Live Demo',
            link: '',
            class: 'btn-dark w-100 mt-2',
            icon: 'fa fa-eye',
            type: 'swal' // এটি সুইট অ্যালার্ট ট্রিগার করবে
        }
    ],

    // বাটন রেন্ডার করার ফাংশন
    renderActions: function () {
        const liveUrl = document.querySelector('.live-trigger')?.getAttribute('href') || '#';

        let html = '<div class="d-flex gap-2">';

        this.actionButtons.forEach((btn, index) => {
            // প্রথম দুইটা বাটন পাশাপাশি রাখার জন্য (WhatsApp & Messenger)
            if (index === 2) html += '</div>';

            const finalLink = (index === 2) ? liveUrl : btn.link;

            html += `
                <a href="${finalLink}" 
                   class="btn ${btn.class} fw-bold py-2 action-trigger" 
                   data-type="${btn.type}" 
                   data-index="${index}">
                    <i class="${btn.icon} me-2"></i> 
                    ${btn.text}
                </a>`;
        });

        html += '</div>';
        html += `<!-- Optional Installation Cost -->
        <div class="installation-addon mt-5 p-2 rounded bg-light border-start border-primary border-3">
            <div class="d-flex justify-content-between align-items-center">
                <span class="small fw-bold text-dark">Installation Service:</span>
                <span class="badge bg-primary">৳3,000</span>
            </div>
        </div>`;

        return html;
    },

    demoCreds: `
    <h4 class="section-title h5 fw-bold mb-3">
        <i class="fa-solid fa-key me-2 text-success"></i>System Access (Demo)
    </h4>
    <div class="row g-3">
        <div class="col-md-6">
            <div class="login-access-box border-start border-4 border-success p-3 rounded-end shadow-sm"
                style="background:#f0fdf4;">
                <h6 class="fw-bold text-success mb-2">
                    <i class="fa fa-user-shield me-2"></i>Admin Dashboard
                </h6>
                <p class="small mb-1 text-muted">URL: <code class="bg-white px-2">/admin/login</code></p>
                <p class="small mb-0 text-muted">User: <code class="bg-white px-2">admin@demo.com</code> | <code class="bg-white px-2">123456</code></p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="login-access-box border-start border-4 border-primary p-3 rounded-end shadow-sm"
                style="background:#eff6ff;">
                <h6 class="fw-bold text-primary mb-2">
                    <i class="fa fa-shopping-cart me-2"></i>Customer Access
                </h6>
                <p class="small mb-1 text-muted">URL: <code class="bg-white px-2">/users/login</code></p>
                <p class="small mb-0 text-muted">User: <code class="bg-white px-2">01999999999</code> | <code class="bg-white px-2">123456</code></p>
            </div>
        </div>
    </div> `,

    // কন্টেন্ট লোড করার জন্য একটি ফাংশন (অপশনাল কিন্তু প্রফেশনাল)
    initDemoSection: function () {
        const target = document.querySelector('.demo-creds');
        if (target) {
            target.innerHTML = this.demoCreds;
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.head.insertAdjacentHTML('afterbegin', siteComponents.head);
    document.body.insertAdjacentHTML('afterbegin', siteComponents.header);
    document.body.insertAdjacentHTML('beforeend', siteComponents.footer);

    // ডেমো ক্রেড ইনজেকশন
    siteComponents.initDemoSection();

    // নির্দিষ্ট কন্টেইনারে বাটনগুলো পুশ করা
    const container = document.querySelector('.action-stack');
    if (container) {
        container.innerHTML = siteComponents.renderActions();
    }

    $(window).on('load', function () {
        // ১. গ্রিড ইনিশিয়ালাইজ করুন
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            percentPosition: true // এটি গ্রিডকে আরও স্টেবল করবে
        });

        // ২. ম্যাজিক লাইন: লোড হওয়ার পর লেআউট আবার রিফ্রেশ করা
        setTimeout(function () {
            $grid.isotope('layout');
        }, 200); // ২০০ মিলি-সেকেন্ড পর এটি অটো-ফিক্স করবে

        // ফিল্টার বাটন ক্লিক হ্যান্ডলার
        $('.filter-btn').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });

            $('.filter-btn').removeClass('active btn-primary').addClass('btn-outline-primary');
            $(this).addClass('active btn-primary').removeClass('btn-outline-primary');
        });
    });

    // ক্লিক হ্যান্ডলার
    document.addEventListener('click', function (e) {
        const target = e.target.closest('.action-trigger');
        if (!target) return;

        if (target.getAttribute('data-type') === 'swal') {
            e.preventDefault();
            const btnIndex = target.getAttribute('data-index');
            const btnData = siteComponents.actionButtons[btnIndex];

            Swal.fire({
                title: 'Demo Access Notice',
                text: "To view the demo, please contact us on WhatsApp or Messenger for credentials.",
                icon: 'info',
                showCancelButton: true,
                confirmButtonText: 'View Live Anyway',
                cancelButtonText: 'I will contact',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(btnData.link, "_blank");
                } else {
                    window.location.href = "https://wa.me/8801580314701";
                }
            });
        }
    });

});