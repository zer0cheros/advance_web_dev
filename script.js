
    // Smooth scrolling for anchor links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetID = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetID);
  
          targetSection.scrollIntoView({ behavior: 'smooth' });
        });
      });