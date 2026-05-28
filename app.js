// ── PRICING TOGGLE ──
let isYearly = false;

function togglePricing() {
  isYearly = !isYearly;
  const toggle = document.getElementById('price-toggle');
  const lblMonthly = document.getElementById('lbl-monthly');
  const lblYearly = document.getElementById('lbl-yearly');

  toggle.classList.toggle('on', isYearly);
  lblMonthly.style.color = isYearly ? 'var(--text-dim)' : 'var(--text)';
  lblYearly.style.color = isYearly ? 'var(--text)' : 'var(--text-dim)';

  document.querySelectorAll('.amount').forEach(el => {
    const val = isYearly ? el.dataset.yearly : el.dataset.monthly;
    el.textContent = val;
  });
}

// ── WAITLIST ──
function joinWaitlist() {
  const input = document.getElementById('email-input');
  const email = input.value.trim();
  const form = document.getElementById('waitlist-form');
  const success = document.getElementById('waitlist-success');

  if (!email || !email.includes('@')) {
    input.style.borderColor = '#c96e6e';
    input.placeholder = 'Please enter a valid email';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'your@email.com';
    }, 2000);
    return;
  }

  form.style.opacity = '0';
  form.style.transform = 'translateY(-10px)';
  form.style.transition = 'all 0.3s';
  setTimeout(() => {
    form.style.display = 'none';
    success.classList.add('show');
    success.style.animation = 'fadeUp 0.5s ease both';
  }, 300);
}

// ── STYLE PILLS INTERACTION ──
document.querySelectorAll('.spill').forEach(pill => {
  pill.addEventListener('click', function () {
    document.querySelectorAll('.spill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
  });
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── SMOOTH NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.borderBottomColor = window.scrollY > 50
    ? 'rgba(255,255,255,0.08)'
    : 'rgba(255,255,255,0.04)';
});
