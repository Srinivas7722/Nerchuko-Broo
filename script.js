document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add your AJAX request to send form data to your server
    document.getElementById('success-message').style.display = 'block';
  });
  
