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


// Hero Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dots");

let current = 0;
let autoSlide;

if (slides && slides.length) {
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
      if (dotsContainer.children[i]) dotsContainer.children[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }
  function goToSlide(i) {
    showSlide(i);
    resetAuto();
  }

  nextBtn && nextBtn.addEventListener("click", () => { nextSlide(); resetAuto(); });
  prevBtn && prevBtn.addEventListener("click", () => { prevSlide(); resetAuto(); });

  function startAuto() { autoSlide = setInterval(nextSlide, 3000); }
  function stopAuto() { clearInterval(autoSlide); }
  function resetAuto() { stopAuto(); startAuto(); }

  startAuto();

  // when window/tab hidden pause slider to save CPU
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto(); else startAuto();
  });
}

/* ===== Products slider (simple translateX carousel) ===== */
const productsSlider = document.getElementById("productsSlider");
const prodPrev = document.getElementById("prodPrev");
const prodNext = document.getElementById("prodNext");

let prodIndex = 0;
function visibleWidth() {
  if(!productsSlider) return 230;
  const card = productsSlider.querySelector(".product");
  const gap = parseFloat(getComputedStyle(productsSlider).gap || 16);
  return card ? card.getBoundingClientRect().width + gap : 230;
}

function updateProdPosition() {
  if(!productsSlider) return;
  const cardWidth = visibleWidth();
  productsSlider.style.transform = `translateX(-${prodIndex * cardWidth}px)`;
}

if(prodNext && productsSlider){
  prodNext.addEventListener("click", () => {
    const visibleCount = Math.floor((document.querySelector('.products-slider-wrap').offsetWidth) / visibleWidth());
    const maxIndex = Math.max(0, productsSlider.children.length - visibleCount);
    prodIndex = Math.min(prodIndex + 1, maxIndex);
    updateProdPosition();
  });
}
if(prodPrev){
  prodPrev.addEventListener("click", () => {
    prodIndex = Math.max(0, prodIndex - 1);
    updateProdPosition();
  });
}

/* make carousel responsive on resize */
window.addEventListener('resize', () => {
  if(!productsSlider) return;
  const visibleCount = Math.floor((document.querySelector('.products-slider-wrap').offsetWidth) / visibleWidth());
  const maxIndex = Math.max(0, productsSlider.children.length - visibleCount);
  if(prodIndex > maxIndex) prodIndex = maxIndex;
  updateProdPosition();
});

/* keyboard support for product slider arrows */
document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') prodPrev && prodPrev.click();
  if(e.key === 'ArrowRight') prodNext && prodNext.click();
});

// Redirect on Category Click
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    let link = card.getAttribute("data-link");
    if (link) window.location.href = link;
  });
});
//trending category
document.addEventListener("DOMContentLoaded", () => {
  const trendingContainer = document.querySelector(".trending-container");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  const scrollStep = 300;

  nextBtn.addEventListener("click", () => {
    trendingContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    trendingContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });
});
//discount banner
document.addEventListener("DOMContentLoaded", () => {
  const offerText = document.getElementById("offer-text");
  const offers = [
    "Flat 20% off on Makeup",
    "Buy 1 Get 1 Free on Skincare",
    "Exclusive 30% Discount on makeup",
    "Free Shipping on Orders Above $50"
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % offers.length;
    offerText.textContent = offers[index];
    offerText.style.animation = "none"; // reset animation
    void offerText.offsetWidth; // trigger reflow
    offerText.style.animation = "fadeIn 1s ease-in-out";
  }, 3000);
});
//reviews section
document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.querySelector(".reviews-container");
  const nextBtn = document.querySelector(".next-review");
  const prevBtn = document.querySelector(".prev-review");

  const scrollStep = 320; // card width + gap

  nextBtn.addEventListener("click", () => {
    reviewsContainer.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    reviewsContainer.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });
});

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

