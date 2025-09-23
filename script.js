// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form submission (demo only)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// Animate skill bars
const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let percent = entry.target.getAttribute("data-percent");
      entry.target.style.width = percent + "%";
      skillObserver.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => {
  skillObserver.observe(fill);
});
