// Student Registration Form Script
// Modern greeting implementation
document.addEventListener('DOMContentLoaded', function () {
    const userName = prompt("Please enter your name:");
    const greeting = document.getElementById('greeting');
    if (userName) {
        greeting.textContent = `Good Morning, ${userName}! ✨`;
    } else {
        greeting.textContent = "Welcome to Student Registration! 🎓";
    }
});

// Enhanced validation and submission function
function validateAndSubmit() {
    if (validateForm()) {
        const submitBtn = document.querySelector('.submit-btn');
        const successMessage = document.getElementById('successMessage');

        // Show loading state
        submitBtn.textContent = 'Submitting...';
        submitBtn.classList.add('loading');

        // Simulate form submission
        setTimeout(() => {
            successMessage.textContent = 'Your form has been submitted successfully! 🎉';
            successMessage.classList.add('show');

            submitBtn.textContent = 'Submit Application';
            submitBtn.classList.remove('loading');

            // Reset form after success
            setTimeout(() => {
                document.getElementById('student-form').reset();
                successMessage.classList.remove('show');
                clearValidationStyles();
            }, 3000);
        }, 1500);
    }
}

// Enhanced form validation with visual feedback
function validateForm() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById("course");
    const residentialType = document.querySelectorAll('input[name="residential-type"]:checked');

    let isValid = true;
    clearValidationStyles();

    // First name validation
    if (firstName.value.trim() === "") {
        showError(firstName, "First name is required.");
        isValid = false;
    } else {
        showSuccess(firstName);
    }

    // Last name validation
    if (lastName.value.trim() === "") {
        showError(lastName, "Last name is required.");
        isValid = false;
    } else {
        showSuccess(lastName);
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Please enter a valid email address.");
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Date of birth validation
    if (dob.value.trim() === "") {
        showError(dob, "Date of birth is required.");
        isValid = false;
    } else {
        const dobDate = new Date(dob.value);
        const currentDate = new Date();
        if (dobDate >= currentDate) {
            showError(dob, "Please enter a valid date of birth.");
            isValid = false;
        } else {
            showSuccess(dob);
        }
    }

    // Gender validation
    if (!gender) {
        showError(document.querySelector('input[name="gender"]'), "Gender is required.");
        isValid = false;
    }

    // Residential type validation
    if (residentialType.length === 0) {
        showError(document.querySelector('input[name="residential-type"]'), "Please select at least one residential type.");
        isValid = false;
    }

    // Course validation
    if (course.value === "Select") {
        showError(course, "Please select a course.");
        isValid = false;
    } else {
        showSuccess(course);
    }

    return isValid;
}

function showError(element, message) {
    element.classList.add('input-invalid');
    element.classList.remove('input-valid');

    const formGroup = element.closest('.form-group');
    formGroup.classList.add('error');

    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

function showSuccess(element) {
    element.classList.add('input-valid');
    element.classList.remove('input-invalid');

    const formGroup = element.closest('.form-group');
    formGroup.classList.remove('error');

    // Remove error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function clearValidationStyles() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.classList.remove('input-valid', 'input-invalid');
    });

    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}

// Add interactive card selection for radio buttons and checkboxes
document.addEventListener('DOMContentLoaded', function () {
    const optionCards = document.querySelectorAll('.option-card');

    optionCards.forEach(card => {
        const input = card.querySelector('input[type="radio"], input[type="checkbox"]');

        card.addEventListener('click', function () {
            if (input.type === 'radio') {
                // Remove selected class from all radio cards in the same group
                const radioName = input.name;
                document.querySelectorAll(`input[name="${radioName}"]`).forEach(radio => {
                    radio.closest('.option-card').classList.remove('selected');
                });
            }

            if (input.checked) {
                card.classList.remove('selected');
                input.checked = false;
            } else {
                card.classList.add('selected');
                input.checked = true;
            }
        });

        // Initialize selected state
        if (input.checked) {
            card.classList.add('selected');
        }
    });
});