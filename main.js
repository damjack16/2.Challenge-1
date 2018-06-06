var password = document.getElementById("register_password"),
    confirm_password = document.getElementById("register_confirm_password");

function validatePassword() {
    if (register_password.value !== register_confirm_password.value) {
        register_confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        register_confirm_password.setCustomValidity('');
    }
}

register_password.onchange = validatePassword;
register_confirm_password.onkeyup = validatePassword;
