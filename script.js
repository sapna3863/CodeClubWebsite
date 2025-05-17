

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
 .faq-item {
    background-color: var(--white);
    border-radius: 8px;
    margin-bottom: 1rem;
    box-shadow: var(--soft-shadow);
    overflow: hidden;
}

.faq-item h3 {
    padding: 1.5rem;
    margin: 0;
    cursor: pointer;
    position: relative;
    font-size: 1.2rem;
    color: var(--primary-color);
}

.faq-item h3::after {
    content: '+';
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
}

.faq-item.active h3::after {
    content: '-';
}

.faq-answer {
    padding: 0 1.5rem 1.5rem;
    color: #666;
    line-height: 1.6;
}

.faq-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formData);
            
            // Clear form
            contactForm.reset();
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});