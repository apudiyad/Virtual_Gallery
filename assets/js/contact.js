// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the input fields and error message elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.querySelector('textarea[name="message"]');
    const sendButton = document.querySelector('.php-email-form button[type=submit]');
  
    const nameErrorContainer = document.querySelector('.name-error');
    const emailErrorContainer = document.querySelector('.email-error');
    const subjectErrorContainer = document.querySelector('.subject-error');
    const messageErrorContainer = document.querySelector('.message-error');
    const errorMessageContainer = document.querySelector('.error-message');
    const confirmationMessage = document.querySelector('.confirmation-message'); // Confirmation message element
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to validate name (letters and spaces only)
    function isValidName(name) {
      const nameRegex = /^[A-Za-z\s]+$/; // Allow only letters and spaces
      return nameRegex.test(name);
    }
  
    // Function to check for special characters in the name
    function containsSpecialCharacters(name) {
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>0-9]/;
      return specialCharRegex.test(name);
    }
  
    // Function to validate the form before submission
    function validateForm() {
      let errors = [];
  
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
  
      if (nameValue === '') {
        errors.push('Name is required');
      } else if (!isValidName(nameValue)) {
        errors.push('Name should only contain letters and spaces');
      } 
      else if (containsSpecialCharacters(nameValue)) {
        errors.push('Name should not contain special characters or numbers');
      }
  
      if (emailValue === '') {
        errors.push('Email is required');
      } else if (!isValidEmail(emailValue)) {
        errors.push('Invalid email format');
      }
  
      if (subjectInput.value.trim() === '') {
        errors.push('Subject is required');
      }
  
      if (messageInput.value.trim() === '') {
        errors.push('Message is required');
      }
  
      // Display all error messages
      if (errors.length > 0) {
        const errorText = errors.join(',');
        errorMessageContainer.textContent = errorText;
        errorMessageContainer.style.display = 'block';
        return false; // Return false to prevent form submission
      } else {
        errorMessageContainer.textContent = ''; // Clear the error message
        errorMessageContainer.style.display = 'none';
      }
  
      return true; // Return true if the form is valid
    }
  
    // Add submit event listener to the form
    sendButton.addEventListener('click', function (e) {
      if (!validateForm()) {
        e.preventDefault(); // Prevent form submission if there are errors
      } else {
        // If all fields and conditions are met, display the "Message Sent" confirmation
        confirmationMessage.textContent = 'Message sent';

        //Clear the form fields
      nameInput.value = '';
      emailInput.value = '';
      subjectInput.value = '';
      messageInput.value = '';
      }
      
    });
  });
  
  
  