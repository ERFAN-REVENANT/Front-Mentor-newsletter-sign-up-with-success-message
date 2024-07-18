document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.subscribe').addEventListener('click', function(event) {
        event.preventDefault();
        emailValidation();
    });
});
function emailValidation() {
    const emailInput = document.querySelector('.email');
    const errorMsg = document.querySelector('.errormsg');
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const displayEmail = document.querySelector('#display-email');
    const card = document.querySelector('.card');
    const success = document.querySelector('.success');
    
    if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('error');
        errorMsg.classList.add('show');
    } else {
        emailInput.classList.remove('error');
        errorMsg.classList.remove('show');
        displayEmail.textContent = emailValue;
        card.classList.add('hidden');
        success.classList.add('show');
    }
}
