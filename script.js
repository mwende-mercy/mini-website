// Hamburger menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}
// Contact form validation (replace with your Assignment 6 code if different)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    const setErr = (id, msg) => { document.getElementById(id + 'Err').textContent = msg; if (msg) ok = false; };
    const name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
    setErr('name', name.length < 2 ? 'Please enter your name.' : '');
    setErr('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Enter a valid email address.');
    setErr('message', msg.length < 10 ? 'Message must be at least 10 characters.' : '');
    const out = document.getElementById('formMessage');
    out.textContent = ok ? 'Thank you, ' + name + '! Your message has been sent.' : '';
    if (ok) form.reset();
  });
  const counter = document.getElementById('charCount');
  form.message.addEventListener('input', () => counter.textContent = form.message.value.length + ' characters');
}
