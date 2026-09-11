
// Notification rotation
const notifications = [
  "Free shipping on orders over PKR 5,000!",
  "New Rose Gold Collection now available.",
  "Get 20% off Glow Serum today.",
  "Bundle offer: Cleanser + Toner set only PKR 2,299.",
  "Subscribe & save 10% on your first order."
];

let notifIndex = 0;
const notifText = document.getElementById("notif-text");

function changeNotif() {
  notifText.style.opacity = 0;
  setTimeout(() => {
    notifText.textContent = notifications[notifIndex];
    notifText.style.opacity = 1;
  }, 300);
  notifIndex = (notifIndex + 1) % notifications.length;
}

changeNotif();
setInterval(changeNotif, 3000);

// Active nav link highlight
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
let slides, dots, currentIndex = 0, sliderInterval;
const VIDEO_DURATION = 10000; // 10 sec per video

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");

  // Create navigation dots
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i, true));
    dotsContainer.appendChild(dot);
  });

  dots = document.querySelectorAll(".dot");
  startSlider();
});

function showSlide(index, manual = false) {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  currentIndex = index;
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");

  if (manual) {
    clearTimeout(sliderInterval);
    startSlider();
  }
}

function startSlider() {
  const duration = VIDEO_DURATION;
  sliderInterval = setTimeout(() => {
    let next = currentIndex + 1;
    if (next >= slides.length) next = 0;
    showSlide(next);
    startSlider();
  }, duration);
}
// Simple button click animation or alert (optional)
document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.innerText = "Added!";
    btn.style.backgroundColor = "#E6B7B2";
    setTimeout(() => (btn.innerText = "Add to Cart"), 1200);
  });
});
const offerText = document.getElementById("offerText");

const offers = [
  "20% Off on New Lip Shades!",
  "Free Shipping on Orders Above Rs.3000!",
  "Glow with Our Premium Highlighters ",
  "Buy 1 Get 1 on Select Blushes ",
  "New Arrivals: Velvet Finish Foundations!",
  "Exclusive Combo Packs Just for You ",
  "Limited Time — Grab Your Glam Deal Now!"
];

let index = 0;

function changeOffer() {
  offerText.style.opacity = 0;
  setTimeout(() => {
    offerText.textContent = offers[index];
    offerText.style.opacity = 1;
    index = (index + 1) % offers.length;
  }, 500);
}

setInterval(changeOffer, 2000);
const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
const cardWidth = document.querySelector(".tutorial-card").offsetWidth + 20; // card + gap
const totalCards = document.querySelectorAll(".tutorial-card").length;

// Move slider
function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

// Next Button
nextBtn.addEventListener("click", () => {
  if (currentSlide < totalCards - Math.floor(track.parentElement.offsetWidth / cardWidth)) {
    currentSlide++;
    updateSlider();
  }
});

// Previous Button
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

  document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".ba-slide");
  const nextBtn = document.querySelector(".ba-arrow.right");
  const prevBtn = document.querySelector(".ba-arrow.left");
  let current = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  showSlide(current);
  startAutoSlide();
});
const slider = document.querySelector('.testimonials-slider');

let scrollAmount = 0;
const scrollStep = 320; // how much to scroll per step
const scrollSpeed = 3000; // 3 seconds

function autoScroll() {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
  }
}

setInterval(autoScroll, scrollSpeed);



// Back to Top Smooth Scroll
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
AOS.init({
    duration: 1000, 
    once: false,  
  });

function openModal(name, shade, skin, price, size, description, avability) {
  document.getElementById("pName").innerText = name;
  document.getElementById("pShade").innerText = "Shade: " + shade;
  document.getElementById("pSkin").innerText = "Skin Type: " + skin;
  document.getElementById("pPrice").innerText = "Price: " + price;
  document.getElementById("pSize").innerText = "Size: " + size;
  document.getElementById("pDescription").innerText = "Description: " + description;
  document.getElementById("pAvability").innerText = "Avability: " + avability;

  document.getElementById("productModal").style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}


