

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
document.addEventListener('DOMContentLoaded', function() {
    // Add current-page class based on current URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current-page');
        }
    });
    
    // ... rest of your existing script code
});
// ...existing code...

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