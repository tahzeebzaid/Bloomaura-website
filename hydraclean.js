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

// Thumbnail image change 
const mainImg = document.querySelector(".main-img"); const thumbs = document.querySelectorAll(".thumbs img"); thumbs.forEach(thumb => { thumb.addEventListener("click", () => { mainImg.src = thumb.src; }); });
// Auto-rotating About Section Images
const aboutImages = [
  "hydra3.png",
  "hydra2.png",
  "hydra5.png",
  "hydra .png"
];

let aboutIndex = 0;
const aboutImg = document.getElementById("aboutImage");

setInterval(() => {
  aboutIndex = (aboutIndex + 1) % aboutImages.length;

  // Smooth fade effect
  aboutImg.style.opacity = 0;
  setTimeout(() => {
    aboutImg.src = aboutImages[aboutIndex];
    aboutImg.style.opacity = 1;
  }, 400);

}, 3000);

// Testimonials carousel + dots + auto-rotate
(function () {
  const track = document.getElementById('testimonial-track');
  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  const prevBtn = document.querySelector('.test-prev');
  const nextBtn = document.querySelector('.test-next');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!track || cards.length === 0) return;

  // Create dots
  cards.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.dataset.index = i;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsContainer.appendChild(btn);
  });
  const dots = Array.from(dotsContainer.querySelectorAll('button'));

  // current index
  let index = 0;
  function updateUI() {
    const card = cards[index];
    const cardLeft = card.offsetLeft;
    track.scrollTo({ left: cardLeft - 12, behavior: 'smooth' });
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function goTo(i) {
    index = (i + cards.length) % cards.length;
    updateUI();
  }

  // prev/next
  if (prevBtn) prevBtn.addEventListener('click', () => { goTo(index - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { goTo(index + 1); resetAuto(); });

  // auto rotate every 4.5s
  let timer = setInterval(() => { goTo(index + 1); }, 4500);
  function resetAuto() {
    clearInterval(timer);
    timer = setInterval(() => { goTo(index + 1); }, 4500);
  }

  // keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { goTo(index - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { goTo(index + 1); resetAuto(); }
  });

  // detect click on a card to highlight it
  cards.forEach((c, i) => {
    c.addEventListener('click', () => {
      goTo(i);
      resetAuto();
    });
  });

  // first render
  updateUI();

  // fallback: if images fail to load, show neutral avatar
  track.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => { img.src = 'avatar-placeholder.png'; });
  });
})();
// Related Products (Optional JS Enhancements)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});


// Back to Top Smooth Scroll
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

