// funcion para calcular el costo
function calcularCostoFinal(precio, impuesto, descuento) {
    let precioConImpuesto = precio + (precio * (impuesto / 100));
    let precioFinal = precioConImpuesto - (precioConImpuesto * (descuento / 100));
    return precioFinal.toFixed(2);
}
// Función para ingresar productos
function ingresarProductos() {
    let productos = [];
    let continuar = true;

    while (continuar) {
        let nombreProducto = prompt("Ingresa el nombre del producto:");
        if (!nombreProducto) {
            alert("Por favor, ingresa un nombre válido.");
            continue;
        }

        let precio = parseFloat(prompt("Ingresa el precio del producto:"));
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresa un precio válido.");
            continue;
        }

        let impuesto = parseFloat(prompt("Ingresa el porcentaje de impuestos:"));
        if (isNaN(impuesto) || impuesto < 0) {
            alert("Por favor, ingresa un porcentaje de impuestos válido.");
            continue;
        }

        let descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
        if (isNaN(descuento) || descuento < 0) {
            alert("Por favor, ingresa un porcentaje de descuento válido.");
            continue;
        }

        productos.push({ nombre: nombreProducto, precio, impuesto, descuento });

        continuar = confirm("¿Deseas ingresar otro producto?");
    }

    return productos;
}
// Función principal 
function simuladorCostoFinal() {
    let productos = ingresarProductos();

    if (productos.length === 0) {
        alert("No se ingresaron productos.");
        return;
    }

    let costoTotal = 0;
    let resumen = "Resumen de productos ingresados:\n";

    for (let producto of productos) {
        let costoFinal = calcularCostoFinal(producto.precio, producto.impuesto, producto.descuento);
        costoTotal += parseFloat(costoFinal);
        resumen += `\nProducto: ${producto.nombre}\nPrecio Inicial: $${producto.precio}\nImpuesto: ${producto.impuesto}%\nDescuento: ${producto.descuento}%\nPrecio Final: $${costoFinal}\n`;
    }

    resumen += `\nCosto Total de todos los productos: $${costoTotal.toFixed(2)}`;
    alert(resumen);
    console.log(resumen);
}
simuladorCostoFinal();
