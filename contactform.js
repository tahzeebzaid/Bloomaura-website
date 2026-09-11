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

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const subject = contactForm.subject.value.trim();
  const message = contactForm.message.value.trim();

  if(name === "" || email === "" || subject === "" || message === ""){
    formMessage.textContent = "Please fill all required fields.";
    formMessage.style.color = "red";
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)){
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Success
  formMessage.textContent = "Thank you! We’ll get back to you soon.";
  formMessage.style.color = "green";

  // Clear form
  contactForm.reset();
});
