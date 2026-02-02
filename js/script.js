// Smooth scroll for nav links
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth' });
  });
});

// Modal logic
const modal = document.getElementById("formModal");
const closeBtn = document.getElementById("closeFormBtn");

// Open buttons (Hero + Contact)
const openButtons = document.querySelectorAll(
  "#openFormBtn, #openFormBtnContact"
);

openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  document.body.style.overflow = "";
});

// Close modal on overlay click
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ESC key close
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
});
