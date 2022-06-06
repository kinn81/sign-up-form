let newPassword = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');

newPassword.oninput = checkPasswords;
confirmPassword.oninput = checkPasswords;

checkPasswords();

function checkPasswords(e) {
    if(newPassword.value != confirmPassword.value) {
        console.log("They don't match");
        newPassword.classList.add('passwordNoMatch');
    } else {
        console.log("They match!");
    }
}

