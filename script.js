
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// Typing Effect in About Section
const typingText = document.getElementById('typing-text');
const text = "I believe in clean code, smooth UI, and the power of a well-placed semicolon. When I’m not coding, I’m probably over-caffeinating, browsing Stack Overflow, or convincing myself that one more tutorial will make me a genius.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}

typeWriter();

// Form Submission Handling
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = '#4caf50';
        form.reset();
      } else {
        throw new Error('Oops! Something went wrong.');
      }
    })
    .catch(error => {
      formMessage.textContent = error.message;
      formMessage.style.color = '#f44336';
    });
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
