// main.js

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector(".theme-icon");

// Leer tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.setAttribute("aria-pressed", "true");
  icon.textContent = "🌞";
}

// Cambiar tema al hacer click
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  icon.textContent = isDark ? "🌞" : "🌙";
});
