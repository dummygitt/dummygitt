// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


// ===============================
// Dark / Light Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "☀";

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeBtn.textContent = "☀";

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeBtn.textContent = "☾";

    }

});


// ===============================
// Back to Top
// ===============================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Current Year
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
