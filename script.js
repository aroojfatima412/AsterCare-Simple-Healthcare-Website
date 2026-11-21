document.addEventListener('DOMContentLoaded', () => {
  

    const navLinks = document.querySelectorAll('nav a, .hero-content a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });


  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  
// Tele-Cardiology Video Visit Button

const teleVideoButton = document.getElementById("tele-video-btn");

if (teleVideoButton) {
    teleVideoButton.addEventListener("click", function () {
        alert(
            "Welcome to AsterCare!\n\n" +
            "This is a demo video visit interface.\n" +
            "No real video call is connected yet."
        );
    });
}


  const videoButton = document.getElementById("video-btn");

videoButton.addEventListener("click", function () {

    alert(
        "Welcome to the Tele-Cardiology Dashboard!\n\n" +
        "This is a demo interface.\n" +
        "A real video consultation is not connected."
    );

});


  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();


      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      

      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;


      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        

        let successMsg = document.getElementById('formSuccessMsg');
        if (!successMsg) {
          successMsg = document.createElement('div');
          successMsg.id = 'formSuccessMsg';
          successMsg.style.marginTop = '1rem';
          successMsg.style.padding = '0.75rem';
          successMsg.style.backgroundColor = '#dcfce7';
          successMsg.style.color = '#166534';
          successMsg.style.borderRadius = '8px';
          successMsg.style.fontWeight = '600';
          successMsg.style.fontSize = '0.9rem';
          contactForm.appendChild(successMsg);
        }
        
        successMsg.textContent = `Thank you, ${name}! Your request for "${service}" has been received successfully.`;


        contactForm.reset();


        setTimeout(() => {
          successMsg.remove();
        }, 5000);

      }, 1000);
    });
  }
});