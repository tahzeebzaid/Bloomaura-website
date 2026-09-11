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


const video = document.querySelector(".hero-bg-video");
const heroContent = document.querySelector(".hero-content");

video.addEventListener("loadeddata", () => {
  heroContent.style.opacity = "1";
});
// Makeup video: toggle play/pause on click
(function () {
  const video = document.querySelector('.row-makeup2025 .hero-video');
  if (!video) return;

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
})();

// Skincare video: toggle play/pause on click
(function () {
  const video = document.querySelector('.row-skincare .skincare-video');
  if (!video) return;

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
})();
// Sunday Skincare video: toggle play/pause on click
(function () {
  const video = document.querySelector('.row-sunday .sunday-video');
  if (!video) return;

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
})();
// Slider functionality
(function () {
  const slider = document.querySelector('.tips-tricks .tips-slider');
  const prevBtn = document.querySelector('.tips-tricks .prev');
  const nextBtn = document.querySelector('.tips-tricks .next');

  if (!slider) return;

  const scrollAmount = 270; // adjust to card width + gap

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
})();

const slider = document.querySelector('.editors-slider');

const scrollStep = 320; // pixels per scroll
const scrollSpeed = 3000; // time per scroll

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
