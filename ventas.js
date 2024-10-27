function iniciarSesion() {
    const usuario = prompt("Ingrese su nombre de usuario:");
    const contraseña = prompt("Ingrese su contraseña:");
    if (usuario === "admin" && contraseña === "1234") {
        console.log("Inicio de sesión exitoso.");
        return true;
    } else {
        console.log("Credenciales incorrectas.");
        return false;
    }
}