// Butona tıklandığında menüye scroll
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
// Ana sayfa button scroll (index.html)
function goToMenu() {
  window.location.href = "menu.html";
}
document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;
  const dotsContainer = document.querySelector(".slider-dots");

  // Dots oluştur
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if(i === 0) dot.classList.add("active");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);

    // Dot tıklama
    dot.addEventListener("click", () => showSlide(i));
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % total);
  }

  function prevSlide() {
    showSlide((current - 1 + total) % total);
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000);

  showSlide(current);

  // Menü butonu
  const menuBtn = document.querySelector(".hero-cta button");
  if(menuBtn) {
    menuBtn.addEventListener("click", () => {
      window.location.href = "menu.html";
    });
  }
});