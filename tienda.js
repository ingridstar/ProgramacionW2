let canasta = [];
//Se declaran los los objetos de tipo Json 
let sudadera = {
    nombre: "Sudadera",
    precio: 450,
    cantidad: 0
};
let gorra = {
    nombre: "Gorra",
    precio: 150,
    cantidad: 0
};
let jeans = {
    nombre: "Jeans",
    precio: 800,
    cantidad: 0
};

let tenis = {
    nombre: "Tenis",
    precio: 950,
    cantidad: 0
};

// Funcion para las opciones que puedes escoger
function menuArticulos() {
    return parseInt(prompt(`Seleccione el producto para agregar al carrito:
                        1. Sudadera $${sudadera.precio}.
                        2. Gorra $${gorra.precio}.
                        3. Jeans $${jeans.precio}.
                        4. Tenis $${tenis.precio}.     
                        5. Ver Canasta.
                        6. Salir.`));
}
//Funcion para ver los productos ya agregados al carrito con su cantidad(num de productos seleccionados) y su precio calculado

function verCanasta() {
    if (canasta.length === 0) {
        console.log("La canasta está vacía.");
    } else {
        console.log("Canasta de compras:");
        for (let i = 0; i < canasta.length; i++) {
            if(canasta[i] == sudadera){
                console.log(`${i + 1}. ${sudadera.nombre}     -    (${sudadera.cantidad})    -   $${sudadera.precio * sudadera.cantidad}`);
            }else if(canasta[i] == jeans){
                console.log(`${i + 1}. ${jeans.nombre}   -    (${jeans.cantidad})    -   $${jeans.precio * jeans.cantidad}`);
            }else if(canasta[i] == tenis){
                console.log(`${i + 1}. ${tenis.nombre}    -    (${tenis.cantidad})    -   $${tenis.precio * tenis.cantidad}`);
            }else if(canasta[i] == gorra){
                console.log(`${i + 1}. ${gorra.nombre}   -    (${gorra.cantidad})    -   $${gorra.precio * gorra.cantidad}`);
            }
        
        }
        console.log(`Total: $${(gorra.precio * gorra.cantidad) + (tenis.precio * tenis.cantidad) + (jeans.precio * jeans.cantidad) + (sudadera.precio * sudadera.cantidad)}`);

    }
}

//Funcion para ver que producto ya esta agregado, usando una funcion flecha
function agregarProdu(producto) {
    let encontrado = canasta.find(objeto => objeto.nombre == producto.nombre);
    if (encontrado) {
        encontrado.cantidad += 1; 
    } else {
        producto.cantidad = 1; 
        canasta.push(producto);
    }
}
// Junta las anteriores funciones, se realiza un bucle while, adentro se agrega la funcion de mostrar menu,la funcion agregar producto o dar la opcion de ver el carrito o salir
function iniProgram() {
    let continuar = true;
    while (continuar) {
        let opcion = menuArticulos();
        switch (opcion) {
            case 1:
                console.log("Se agregó una sudadera al carrito");
                agregarProdu(sudadera);
                break;
            case 2:
                console.log("Se agregó unos jeans al carrito");
                agregarProdu(jeans);
                break;
            case 3:
                console.log("Se agregó un par de tenis al carrito");
                agregarProdu(tenis);
                break;
            case 4:
                console.log("Se agregó una gorra al carrito");
                agregarProdu(gorra);
                break;
            case 5:
                verCanasta();
                break;
            case 6:
                continuar = false;
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida.");
                break;
        }
    }
}

iniProgram();