//Get elements
const signupContainer = document.getElementById('signupContainer');
const successContainer = document.getElementById('successContainer');
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const dismissBtn = document.getElementById('dismissBtn');
const userEmailSpan = document.getElementById('userEmail');

// Email validation function
function isValidEmail (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//show error
function showError() {
    emailInput.classList.add('error')
    errorMessage.classList.add('show');
}

//hide error
function hideError() {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('show');
}

//form submission
form.addEventListener('submit', function(e){
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        showError();
    }
    else {
        hideError();
        userEmailSpan.textContent = email;
        signupContainer.style.display = 'none';
        succesContainer.style.display = 'flex';
    }
}); 

//Dismiss button 
dismissBtn.addEventListener('click', function() {
    successContainer.style.display = 'none';
    signupContainer.style.display = 'flex';
    emailInput.value = '';
    hideError();
});

//Remove error when typing
emailInput.addEventListener('input', function() {
    if (emailInput.classList.contains('error')) {
        hideError();
    }
});