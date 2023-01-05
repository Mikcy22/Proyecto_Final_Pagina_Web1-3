let form = document.getElementById("signupForm");

    form.onsubmit = function(event) {
        event.preventDefault(); // Prevenimos el envío del formulario.
        let firstName = form.elements.firstName.value;
        let lastName = form.elements.lastName.value;
        let email = form.elements.email.value;
        let password = form.elements.password.value;
        let passwordConfirm = form.elements.passwordConfirm.value;
                    
        if (firstName === "" || lastName === "" || email === "" || password === "" || passwordConfirm === "") {
            alert("Por favor, rellena todos los campos.");
        } else if (password !== passwordConfirm) {
            alert("La contraseña y la confirmación de contraseña no coinciden.");
        } else {
            // Aquí iría el código para procesar el formulario y hacer el registro.
            console.log("Toca hacer el enlace al servidor")
        }
}