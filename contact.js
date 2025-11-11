// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
    input.style.borderColor = '#ef4444';
}

// Clear error message
function clearError(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
    input.style.borderColor = '';
}

// Validate form inputs
function validateForm() {
    let isValid = true;
    
    // First Name
    const firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
        showError(firstName, 'First name is required');
        isValid = false;
    } else {
        clearError(firstName);
    }
    
    // Last Name
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
        showError(lastName, 'Last name is required');
        isValid = false;
    } else {
        clearError(lastName);
    }
    
    // Email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    // Subject
    const subject = document.getElementById('subject');
    if (subject.value === '') {
        showError(subject, 'Please select a subject');
        isValid = false;
    } else {
        clearError(subject);
    }
    
    // Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError(message, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        clearError(message);
    }
    
    return isValid;
}

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                formSuccess.classList.add('show');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.disabled = false;
                submitButton.innerHTML = originalText;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 1500);
        }
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.hasAttribute('required') && input.value.trim() !== '') {
                if (input.type === 'email') {
                    if (!isValidEmail(input.value.trim())) {
                        showError(input, 'Please enter a valid email address');
                    } else {
                        clearError(input);
                    }
                } else {
                    clearError(input);
                }
            }
        });
    });
}
