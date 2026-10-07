document.addEventListener('DOMContentLoaded', () => {

  /* 1. DARK / LIGHT MODE TOGGLE */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  });

  /* 2. MOBILE MENU */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  /* 3. FAQ ACCORDION */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(other => { if (other !== item) other.classList.remove('active'); });
      item.classList.toggle('active');
    });
  });

  /* 4. PRICING TOGGLE (MONTHLY / YEARLY) */
  const pricingToggle = document.getElementById('pricingToggle');
  const amounts = document.querySelectorAll('.amount');

  pricingToggle.addEventListener('change', () => {
    const isYearly = pricingToggle.checked;
    amounts.forEach(amt => {
      const price = isYearly ? amt.getAttribute('data-yearly') : amt.getAttribute('data-monthly');
      amt.textContent = `$${price}`;
    });
  });

  /* 5. MODAL INTERACTION */
  const modalOverlay = document.getElementById('modalOverlay');
  const openBtns = [document.getElementById('openModalBtn'), document.getElementById('heroModalBtn'), document.getElementById('ctaModalBtn')];
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalForm = document.getElementById('modalForm');

  openBtns.forEach(btn => { if(btn) btn.addEventListener('click', () => modalOverlay.style.display = 'flex'); });
  closeModalBtn.addEventListener('click', () => modalOverlay.style.display = 'none');

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Anda telah terdaftar dalam antrean akses awal Flowly.');
    modalOverlay.style.display = 'none';
    modalForm.reset();
  });

  /* 6. TESTIMONIAL SLIDER */
  const sliderWrapper = document.getElementById('sliderWrapper');
  const slides = document.querySelectorAll('.slide-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? 'block' : 'none';
    });
  }

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  });

  updateSlider();

  /* 7. SCROLL ANIMATION */
  const reveals = document.querySelectorAll('.reveal');
  function checkReveal() {
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('active');
    });
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();

});