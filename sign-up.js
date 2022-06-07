let newPassword = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let passwordLabel = document.getElementById('passwordLabel');

newPassword.oninput = checkPasswords;
confirmPassword.oninput = checkPasswords;


checkPasswords();

function checkPasswords(e) {
    if(newPassword.value != confirmPassword.value) {
        newPassword.classList.add('passwordNoMatch');
        passwordLabel.classList.add('passwordLabel');
        confirmPassword.classList.add('passwordNoMatch');
    } else {
        newPassword.classList.remove('passwordNoMatch');
        confirmPassword.classList.remove('passwordNoMatch');
        passwordLabel.classList.remove('passwordLabel');
    }
}

