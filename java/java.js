// ============================================
// CLEAN WEBSITE JAVASCRIPT
// ============================================

// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ================= HEADER SHADOW =================

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        header.style.boxShadow = "0 8px 24px rgba(28, 38, 32, 0.06)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ================= CURRENT YEAR =================

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".service-row, .intro-card, .about-content, .clearance-content, .contact-form"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.12 }
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(18px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
});