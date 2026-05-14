/* =========================================
   WAIT UNTIL HTML PAGE LOADS COMPLETELY
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       STICKY HEADER SHADOW EFFECT ON SCROLL
    ========================================= */

    window.addEventListener("scroll", () => {

        // Select Header Element
        const header = document.querySelector(".header");

        // Add Bigger Shadow When User Scrolls Down
        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.15)";

        } else {

            // Default Header Shadow
            header.style.boxShadow =
                "0 2px 10px rgba(0,0,0,0.08)";
        }
    });


    /* =========================================
       BUTTON CLICK ANIMATION EFFECT
    ========================================= */

    // Select All Buttons
    document.querySelectorAll("button").forEach(btn => {

        // Add Click Event to Each Button
        btn.addEventListener("click", () => {

            // Shrink Button Slightly on Click
            btn.style.transform = "scale(0.95)";

            // Return Button to Normal Size
            setTimeout(() => {

                btn.style.transform = "scale(1)";

            }, 150);
        });
    });

});


/* =========================================
   MOBILE NAVBAR TOGGLE FUNCTION
========================================= */

function toggleMenu() {

    // Select Navigation Links
    const navLinks = document.querySelector(".nav-links");

    // Toggle Active Class
    navLinks.classList.toggle("active");
}