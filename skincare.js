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



let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let dotsContainer = document.querySelector(".dots");

// Create dots dynamically
slides.forEach((_, index) => {
  let dot = document.createElement("span");
  if (index === 0) dot.classList.add("active-dot");
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dots span");

// Function to show slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active-dot");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active-dot");
    }
  });
}

// Next & Prev
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Auto Slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);
document.querySelectorAll(".btn.add").forEach(button => {
  button.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});
// Offer text list
const offers = [
  " Special Discount on Skincare Products!",
  " Keep Your Skin Hydrated – Shop Now!",
  " Sunscreens Up to 30% OFF Today!",
  " Natural & Organic Skincare Available!",
  " Buy 2 Get 1 Free on Selected Serums!",
  " Glow with Our Bestselling Moisturizers!",
  "Limited Time Deal – Don’t Miss Out!"
];

let index = 0;
const offerText = document.getElementById("offer-text");

// Change text every 3 seconds
setInterval(() => {
  index = (index + 1) % offers.length;
  offerText.textContent = offers[index];
}, 3000);
const track = document.getElementById("testimonial-track");
const testimonials = document.querySelectorAll(".skincare-testimonials .testimonial");
let index2 = 0;

// responsive visible slides
function getVisibleSlides() {
    if (window.innerWidth <= 600) return 1; // mobile
    if (window.innerWidth <= 992) return 2; // tablet
    return 3; // desktop
}

function moveSlide(step) {
    const visibleSlides = getVisibleSlides();
    const totalSlides = testimonials.length;
    index += step;

    // loop back when reaching end/start
    if (index < 0) index = totalSlides - visibleSlides;
    if (index > totalSlides - visibleSlides) index = 0;

    // calculate width dynamically
    const slideWidth = testimonials[0].offsetWidth + 30; // card width + margin
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// auto slide every 4s
setInterval(() => {
    moveSlide(1);
}, 4000);

// recalc position when screen resize
window.addEventListener("resize", () => {
    moveSlide(0);
});




// Animate cards when they come into view
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tip-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(card => observer.observe(card));
});
// FAQ accordion toggle
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const faqItem = btn.parentElement;

      // Close other open answers
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
        }
      });

      // Toggle current one
      faqItem.classList.toggle("active");
    });
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

