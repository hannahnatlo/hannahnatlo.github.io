// ========================================
// Hannah Natlo — Personal Website
// Version 1
// ========================================


// Automatically update the copyright year.

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Add a subtle border/shadow to the navigation
// after the visitor begins scrolling.

const navigation = document.querySelector(".site-nav");

function updateNavigation() {
    if (!navigation) return;

    if (window.scrollY > 20) {
        navigation.classList.add("scrolled");
    } else {
        navigation.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateNavigation);

updateNavigation();


// Smooth scrolling for internal navigation links.
// Users who prefer reduced motion will receive
// standard browser scrolling instead.

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start"
        });

    });

});
