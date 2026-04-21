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
