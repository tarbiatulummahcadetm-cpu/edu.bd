// ==========================================
// 1. AOS ANIMATION INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // অ্যানিমেশনের সময়কাল
        once: true,     // স্ক্রল করলে একবারই অ্যানিমেট হবে
        offset: 50,     // কতটুকু স্ক্রল করলে অ্যানিমেশন শুরু হবে
    });
});

// ==========================================
// 2. HERO BACKGROUND SWIPER SLIDER (Premium Fade Effect)
// ==========================================
// Swiper JS এর CDN HTML-এ থাকায় এটি সরাসরি কাজ করবে
const heroSwiper = new Swiper(".heroBgSwiper", {
    effect: "fade",         // ছবি পরিবর্তনের সময় সুন্দর ফেড ইফেক্ট
    fadeEffect: {
        crossFade: true
    },
    loop: true,             // স্লাইডার চলতেই থাকবে
    autoplay: {
        delay: 5000,        // ৫ সেকেন্ড পর পর স্লাইড পরিবর্তন
        disableOnInteraction: false,
    },
    speed: 1500,            // ট্রানজিশন স্পিড (স্মুথ করার জন্য)
});

// ==========================================
// 3. MOBILE MENU TOGGLE
// ==========================================
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // মোবাইল মেনু খোলার সময় একটু অ্যানিমেশন
        mobileMenu.style.animation = "fadeInDown 0.3s ease-out";
    } else {
        mobileMenu.classList.add('hidden');
    }
}

// ==========================================
// 4. STICKY HEADER SHRINK EFFECT ON SCROLL
// ==========================================
window.addEventListener('scroll', function() {
    const headerContainer = document.getElementById('header-container');
    const header = document.getElementById('main-header');
    
    if (window.scrollY > 50) {
        // স্ক্রল করলে হেডার ছোট হবে
        headerContainer.classList.add('header-scrolled');
        header.classList.add('py-1');
    } else {
        // একদম উপরে থাকলে নরমাল থাকবে
        headerContainer.classList.remove('header-scrolled');
        header.classList.remove('py-1');
    }
});

// ==========================================
// 5. NUMBER COUNTER ANIMATION (Intersection Observer)
// ==========================================
// স্ক্রল করে কাউন্টার সেকশনে আসলে নাম্বার বাড়তে থাকবে
const counters = document.querySelectorAll('.counter');
const speed = 200; // স্পিড কমানো-বাড়ানোর জন্য (কম মানে ফাস্ট)

const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            
            const updateCount = () => {
                const currentCount = +counter.innerText;
                const increment = target / speed;

                if (currentCount < target) {
                    counter.innerText = Math.ceil(currentCount + increment);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target + "+"; // শেষে একটি + চিহ্ন যুক্ত হবে
                }
            };
            
            updateCount();
            observer.unobserve(counter); // একবার কাউন্ট হয়ে গেলে আর হবে না
        }
    });
};

const counterObserver = new IntersectionObserver(animateCounters, {
    threshold: 0.5 // সেকশনটি ৫০% স্ক্রিনে আসলেই শুরু হবে
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ==========================================
// 6. LIGHTBOX OPTIONS (Gallery)
// ==========================================
// fslightbox নিজে থেকেই কাজ করবে, কোন এক্সট্রা কোড প্রয়োজন নেই।



