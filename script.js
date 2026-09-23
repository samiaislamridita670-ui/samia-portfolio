const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");
btn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
