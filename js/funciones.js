document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('form-login');

    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault();

            const correoValido = validarCorreo();
            const passwordValida = validarPassword();

            if (correoValido && passwordValida) {
                window.location.href = "index.html"; 
            }
        });
    }
});

function validarCorreo() {
    const inputCorreo = document.getElementById('correo');
    const errorCorreo = document.getElementById('error-correo');
    const valorCorreo = inputCorreo.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valorCorreo === "") {
        inputCorreo.classList.add('campo-error');
        errorCorreo.textContent = "El correo no puede estar vacío.";
        errorCorreo.style.display = "block";
        return false;
    } 
    
    if (!regexEmail.test(valorCorreo)) {
        inputCorreo.classList.add('campo-error');
        errorCorreo.textContent = "El formato no se conoce (falta '@' o dominio como .com / .cl).";
        errorCorreo.style.display = "block";
        return false;
    }

    inputCorreo.classList.remove('campo-error');
    errorCorreo.style.display = "none";
    return true;
}

function validarPassword() {
    const inputPassword = document.getElementById('password');
    const errorPassword = document.getElementById('error-password');
    const valorPassword = inputPassword.value;
    const passwordCorrecta = "12345678"; // Contraseña de prueba

    if (valorPassword === "") {
        inputPassword.classList.add('campo-error');
        errorPassword.textContent = "La contraseña no puede estar vacía.";
        errorPassword.style.display = "block";
        return false;
    } 
    
    if (valorPassword !== passwordCorrecta) {
        inputPassword.classList.add('campo-error');
        errorPassword.textContent = "La contraseña es incorrecta.";
        errorPassword.style.display = "block";
        return false;
    }

    inputPassword.classList.remove('campo-error');
    errorPassword.style.display = "none";
    return true;
}