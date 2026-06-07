//Get elements
const signupContainer = document.getElementById('signupContainer');
const succesContainer = document.getElementById('successContainer');
const form = document.getElementById('signForm');
const emailInput = document.getElementById('email');
const errorEmailSpan = document.getElementById('errorMessage');
const dismissionBtn = document.getElementById('dismissBtn');

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
dismissionBtn.addEventListener('click', function() {
    succesContainer.style.display = 'none';
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