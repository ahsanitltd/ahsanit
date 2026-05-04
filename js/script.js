// --- 1. Theme Switcher Function ---
function handleThemeToggle(buttonId) {
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            $('body').addClass('dark-mode');
            $(`${buttonId} i`).removeClass('fa-moon').addClass('fa-sun');
        } else {
            $('body').removeClass('dark-mode');
            $(`${buttonId} i`).removeClass('fa-sun').addClass('fa-moon');
        }
    };

    applyTheme(Cookies.get('theme'));

    $(buttonId).on('click', function () {
        $('body').toggleClass('dark-mode');
        const isDark = $('body').hasClass('dark-mode');
        Cookies.set('theme', isDark ? 'dark' : 'light', { expires: 365 });
        applyTheme(isDark ? 'dark' : 'light');
    });
}

// --- 2. Mega Menu Function ---
function setupMegaMenu(menuSelector) {
    $(`${menuSelector} > a`).on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest(menuSelector).length) {
            $(menuSelector).removeClass('active');
        }
    });
}

// --- 3. Hero Slider Function --- 
function initMainSlider(container) {
    const effects = ['slide', 'fade', 'coverflow', 'cards', 'cube', 'flip'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];

    // নির্দিষ্ট কন্টেইনারের ভেতর স্লাইড সংখ্যা চেক করা (Global নয়)
    const slides = document.querySelectorAll(`${container} .swiper-slide`);
    const slidesCount = slides.length;

    return new Swiper(container, {
        // লুপ মোড তখনই এনাবল হবে যখন স্লাইড সংখ্যা slidesPerView এর চেয়ে বেশি হবে
        loop: slidesCount >= 3,
        slidesPerView: 'auto',
        speed: 3000,

        // স্লাইড কম থাকলে লুপ টিকিয়ে রাখার জন্য নিচের ৩টি প্যারামিটার গুরুত্বপূর্ণ
        loopedSlides: slidesCount,
        loopPreventsSliding: false,
        centeredSlides: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        effect: randomEffect,
        pagination: { el: '.swiper-pagination', clickable: true },
        on: {
            slideChangeTransitionStart: function () {
                const anims = ['animate__fadeInUp', 'animate__fadeInLeft', 'animate__zoomIn'];
                const rand = anims[Math.floor(Math.random() * anims.length)];
                // Active স্লাইডকেই শুধু অ্যানিমেট করা উচিত
                $(this.el).find('.slide-content h1')
                    .removeClass(anims.join(' '))
                    .addClass('animate__animated ' + rand);
            }
        }
    });
}

function setupPortfolioFilter(gridSelector, buttonClass, noDataId) {
    const $grid = $(gridSelector).isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // ফিল্টার ইভেন্ট
    $(buttonClass).on('click', function () {
        const filterValue = $(this).attr('data-filter');

        // বাটন স্টেট আপডেট
        $(buttonClass).removeClass('btn-primary active').addClass('btn-outline-primary');
        $(this).addClass('btn-primary active').removeClass('btn-outline-primary');

        // ফিল্টারিং শুরু
        $grid.isotope({ filter: filterValue });
    });

    // ফিল্টারিং শেষ হলে চেক করুন কোনো আইটেম আছে কি না
    $grid.on('arrangeComplete', function (event, filteredItems) {
        if (filteredItems.length === 0) {
            $(noDataId).fadeIn().removeClass('d-none');
            // গ্রিডের হাইট ম্যানুয়ালি ঠিক রাখা যাতে নিচের সেকশন লাফ না দেয়
            $(gridSelector).css('height', '400px');
        } else {
            $(noDataId).addClass('d-none');
        }
    });
}

// --- 5. Testimonial Slider Function ---
function initTestimonialSlider(selector) {
    new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 800,
        autoplay: { delay: 5000 },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true },
        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });
}

// --- 6. Persistence Contact Form Function ---
function handleContactForm(formId, storageKey) {
    $(formId).on('submit', function (e) {
        e.preventDefault();
        const newMessage = {
            id: Date.now(),
            name: $('#userName').val(),
            email: $('#userEmail').val(),
            message: $('#userMsg').val(),
            time: new Date().toLocaleString()
        };

        let messages = JSON.parse(localStorage.getItem(storageKey)) || [];
        messages.push(newMessage);
        localStorage.setItem(storageKey, JSON.stringify(messages));

        $('#msgStatus').removeClass('d-none').fadeIn().delay(3000).fadeOut();
        this.reset();
    });
}

// --- 7. CTA Alert Function ---
function setupCTAAlert(triggerSelector) {
    $(triggerSelector).on('click', function () {
        const isDark = $('body').hasClass('dark-mode');
        Swal.fire({
            title: 'আগ্রহ প্রকাশের জন্য ধন্যবাদ!!',
            text: 'ডেমো দেখতে দয়া করে আমাকে মেসেজ দিন',
            icon: 'success',
            confirmButtonText: '<i class="fa fa-paper-plane"></i> মেসেজ দিন',
            confirmButtonColor: '#2563eb',
            showCancelButton: true,
            background: isDark ? '#1e293b' : '#fff',
            color: isDark ? '#fff' : '#000'
        }).then((result) => {
            if (result.isConfirmed) window.location.href = "https://wa.me/8801580314701";
        });
    });
}

// --- Admin Utility ---
function debugInbox(key) {
    const data = JSON.parse(localStorage.getItem(key));
    data && data.length > 0 ? console.table(data) : console.error("No messages found!");
}

/**
 * --- Main Execution (Calling all functions) ---
 */
$(document).ready(function () {
    handleThemeToggle('#themeToggle');
    setupMegaMenu('.mega-menu');
    initMainSlider('.hero-slider');
    setupPortfolioFilter('.grid', '.filter-btn', '#no-data-card');
    initTestimonialSlider('.testimonial-slider');
    handleContactForm('#localContactForm', 'ahsanit_inbox');
    setupCTAAlert('.start-project');
});