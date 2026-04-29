/**
 * AhsanIT Global UI Component Loader
 * Single point of control for Header and Footer
 */

/*
    <li class="nav-item mega-menu">
    <a class="nav-link fw-bold">Script Marketplace <i class="fa fa-chevron-down small ms-1"></i></a>
    <div class="mega-dropdown-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-3">
                    <h6 class="fw-bold text-primary mb-3">SaaS Solutions</h6>
                    <ul class="list-unstyled sub-menu-list">
                        <li><a href="#"><i class="fa fa-caret-right me-2"></i>Multi-tenant POS</a></li>
                        <li><a href="#"><i class="fa fa-caret-right me-2"></i>Inventory Management</a></li>
                        <li><a href="#"><i class="fa fa-caret-right me-2"></i>HRM & Payroll Engine</a></li>
                    </ul>
                </div>
                <div class="col-md-3 border-end">
                    <h6 class="fw-bold text-primary mb-3">E-Commerce</h6>
                    <ul class="list-unstyled sub-menu-list">
                        <li><a href="#"><i class="fa fa-caret-right me-2"></i>Multi-vendor Marketplace</a></li>
                        <li><a href="#"><i class="fa fa-caret-right me-2"></i>Grocery Delivery App</a></li>
                    </ul>
                </div>
                <div class="col-md-6 p-5 rounded-4 text-center border bg-light">
                    <h2 class="fw-bold">Looking for Custom Code?</h2>
                    <p class="text-muted">Building scalable, high-performance systems with Laravel & AWS.</p>
                    <button class="btn btn-primary rounded-pill px-5 fw-bold shadow">Explore All Scripts</button>
                </div>
            </div>
        </div>
    </div>
    </li>
    <li class="nav-item mega-menu">
    <a class="nav-link fw-bold">Our Expertise <i class="fa fa-chevron-down small ms-1"></i></a>
    <div class="mega-dropdown-box" style="width: 50vw; left: 25%; border-radius: 0 0 20px 20px;">
        <div class="p-4 row align-items-center">
            <div class="col-6 border-end">
                <h6 class="fw-bold text-primary mb-3">Technical Arsenal</h6>
                <ul class="list-unstyled sub-menu-list">
                    <li><a href="#">PHP / Laravel Expert</a></li>
                    <li><a href="#">System Architecture</a></li>
                    <li><a href="#">AWS Cloud Integration</a></li>
                </ul>
            </div>
            <div class="col-6 text-center">
                <h4 class="fw-bold text-primary">6+ Years</h4>
                <p class="small text-muted mb-0">Of Professional Experience</p>
            </div>
        </div>
    </div>
    </li>
    <button class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">Hire Developer</button>
*/

const siteComponents = {
    // আপনার অরিজিনাল নেভিগেশন বার
    header: `
    <nav class="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/">
                <img src="../images/logo.png" alt="Ahsan IT" class="" width="100px" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ahsanNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="ahsanNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item"><a class="nav-link fw-bold" href="#marketplace">Php Scripts</a></li>
                    <li class="nav-item"><a class="nav-link fw-bold" href="#footer">Contact us</a></li>
                </ul>
                <div class="d-flex gap-2">
                    <button id="themeToggle" class="btn btn-light rounded-circle border shadow-sm"><i class="fa fa-moon"></i></button>
                </div>
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
    </footer>`
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML('afterbegin', siteComponents.header);
    document.body.insertAdjacentHTML('beforeend', siteComponents.footer);
});