// DARK MODE
const btn = document.getElementById("toggleTheme");
btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// FORM
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensaje enviado");
});

// FADE ANIMATION
const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

faders.forEach(el => appear.observe(el));

// NAV ACTIVO
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});
