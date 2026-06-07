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
