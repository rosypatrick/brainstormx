/**
 * BrAInstormX Main JavaScript
 * Handles form submissions and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Email signup form handling
  const signupForm = document.getElementById('signup-form');
  const formMessage = document.getElementById('form-message');
  
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const email = emailInput.value.trim();
      
      if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
      }
      
      // Show loading state
      const submitButton = signupForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Processing...';
      submitButton.disabled = true;
      
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        const data = await response.json();
        
        if (data.success) {
          showMessage(data.message, 'success');
          emailInput.value = '';
        } else {
          showMessage(data.message || 'Something went wrong. Please try again.', 'error');
        }
      } catch (error) {
        console.error('Error:', error);
        showMessage('Failed to connect to the server. Please try again later.', 'error');
      } finally {
        // Reset button state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Helper functions
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Add styles based on message type
    if (type === 'success') {
      formMessage.style.color = '#4CAF50';
    } else if (type === 'error') {
      formMessage.style.color = '#FF3333';
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.className = 'form-message';
    }, 5000);
  }
});
