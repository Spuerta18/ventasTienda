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
function capturarProductos() {
    const productos = [];
    while (true) {
        const precio = parseFloat(prompt("Ingrese el precio del producto (0 para finalizar):"));
        if (precio === 0) {
            break;
        }
        productos.push(precio);
    }
    return productos;
}
