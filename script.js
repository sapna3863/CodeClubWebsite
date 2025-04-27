document.addEventListener('DOMContentLoaded', function () {
  // Parallax effect
  window.addEventListener('scroll', () => {
    const layers = document.querySelectorAll('.layer');
    const scrolled = window.pageYOffset;
    
    layers.forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const yPos = -(scrolled * speed);
      layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
  // Smooth scroll
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Active nav item
  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  // Modal gallery
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.close');
  const galleryImages = document.querySelectorAll('.gallery-image');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item h3');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      item.classList.toggle('open');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
