    // 2. Lógica para la validación del formulario de inicio de sesión
    const formularioLogin = document.querySelector('#form-login');
    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function(e) {
            e.preventDefault();

            const correo = document.querySelector('#email');
            const password = document.querySelector('#password');
            const mensajeConfirmacion = document.querySelector('#confirmacion-login');
            let formularioValido = true;

            // Validación del correo electrónico
            if (!patronCorreo.test(correo.value.trim())) {
                correo.classList.add('campo-error');
                formularioValido = false;
            } else {
                correo.classList.remove('campo-error');
            }

            // Validación de la contraseña (que no esté vacía)
            if (password.value.trim() === '') {
                password.classList.add('campo-error');
                formularioValido = false;
            } else {
                password.classList.remove('campo-error');
            }

            // Si los datos son correctos, muestra el mensaje de éxito
            if (formularioValido) {
                mensajeConfirmacion.style.color = '#0a194f';
                mensajeConfirmacion.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
                
                formularioLogin.reset();

                // Cierra el modal automáticamente después de 2 segundos (opcional)
                setTimeout(() => {
                    modalLogin.classList.remove('activo');
                    mensajeConfirmacion.textContent = '';
                }, 2000);
            } else {
                mensajeConfirmacion.textContent = '';
            }
        });
    }