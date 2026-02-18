/* =====================================================
   ISBI 2026 – POCUS AI Workshop JS
   ===================================================== */

/* ---------- Fade-in animations ---------- */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });
  
  document.querySelectorAll(".animate").forEach(el => observer.observe(el));
  
  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });
  
  /* ---------- Dark mode toggle ---------- */
  const themeToggle = document.getElementById("darkToggle");
  const root = document.documentElement;
  
  if (localStorage.getItem("theme")) {
    root.setAttribute("data-theme", localStorage.getItem("theme"));
  }
  
  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });
  
  /* ---------- Submission countdown ---------- */
  const countdownEl = document.getElementById("countdown-timer");
  const deadline = new Date("2026-03-09T22:59:59Z").getTime();
  
  function updateCountdown() {
    if (!countdownEl) return;
  
    const now = new Date().getTime();
    const diff = deadline - now;
  
    if (diff <= 0) {
      countdownEl.textContent = "Submission closed";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
  
    countdownEl.textContent =
      `${days} days ${hours} hours ${minutes} minutes remaining`;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 60000);

  /* ---------- Back to top visibility ---------- */
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (!backToTop) return;

  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

  
