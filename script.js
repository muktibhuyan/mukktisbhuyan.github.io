// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu (Hamburger toggle)
const nav = document.querySelector('nav');
const menuBtn = document.createElement('button');
menuBtn.innerText = "☰ Menu";
menuBtn.style.background = "#f39c12";
menuBtn.style.color = "#fff";
menuBtn.style.padding = "8px 12px";
menuBtn.style.border = "none";
menuBtn.style.borderRadius = "5px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "none"; // hidden by default

document.querySelector('.navbar').prepend(menuBtn);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Show menu button on small screens
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    menuBtn.style.display = "block";
    nav.style.display = "none";
  } else {
    menuBtn.style.display = "none";
    nav.style.display = "flex";
  }
});

// Dark Mode Toggle
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙 Dark Mode";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "8px 12px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "5px";
darkBtn.style.cursor = "pointer";
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
// Back to Top Button
const topBtn = document.getElementById("topBtn");

// Show button when user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Scroll smoothly to top when clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
