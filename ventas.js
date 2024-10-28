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
function aplicarDescuentoCantidad(productos) {
    let total = productos.reduce((acc, precio) => acc + precio, 0);
    if (productos.length > 5) {
        total *= 0.90;
    }
    return total;
}
function calcularIVA(total) {
    return total * 0.19; // 19% de IVA
}
function aplicarDescuentoFinal(total) {
    if (total > 500000) {
        total *= 0.95;
    }
    return total;
}
function calcularTotalFinal(total, iva) {
    return total + iva;
}
function mostrarTotal(totalFinal) {
    console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
}
function main() {
    if (!iniciarSesion()) {
        return;
    }

    const productos = capturarProductos();
    let total = aplicarDescuentoCantidad(productos);
    const iva = calcularIVA(total);
    let totalFinal = calcularTotalFinal(total, iva);
    totalFinal = aplicarDescuentoFinal(totalFinal);

    mostrarTotal(totalFinal);
}
main();