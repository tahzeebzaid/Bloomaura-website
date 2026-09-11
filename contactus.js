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

//button click par contact form page open karne ke liye
const sendBtn = document.getElementById('sendMessageBtn');

sendBtn.addEventListener('click', () => {
  window.location.href = 'contactform.html';  // File ka path check karo
});
// Smooth scroll to contact form when clicking the button
document.querySelector('.primary-btn').addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector('#contact-form');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// Optional: Subtle fade animation on scroll (for a premium touch)
const hero = document.querySelector('.contact-hero');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  hero.style.opacity = 1 - scrollY / 800; // smooth fade as scrolls down
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const successMessage = document.getElementById("successMessage");

  // Simple Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // If validation passes
  successMessage.style.display = "block";

  // Reset form
  this.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});

// Optional subtle hover animation via JS (extra premium touch)
const infoBoxes = document.querySelectorAll('.contact-info-box');

infoBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-5px)';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
  });
});
// Optional subtle hover effect handled in CSS
// But if you want dynamic effects via JS (like glow on hover)
const mapBox = document.querySelector('.map-container');

mapBox.addEventListener('mouseenter', () => {
  mapBox.style.boxShadow = '0 12px 35px rgba(230,183,178,0.5)';
  mapBox.style.transform = 'translateY(-5px)';
});

mapBox.addEventListener('mouseleave', () => {
  mapBox.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
  mapBox.style.transform = 'translateY(0)';
});
// Optional subtle hover pulse animation via JS
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.15)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});
// Accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
    // Toggle current item
    item.classList.toggle('active');
  });
});

// "See All FAQs" button scroll and expand
const seeAllBtn = document.getElementById('seeAllFaqs');
seeAllBtn.addEventListener('click', () => {
  faqItems.forEach(item => item.classList.add('active'));
  // Smooth scroll to first FAQ
  document.getElementById('faq1').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// Optional: Auto scroll slider for desktop
const slider = document.querySelector('.testimonial-slider');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // scroll-fast
  slider.scrollLeft = scrollLeft - walk;
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




