//Declaración de variables globales
let cuponDescuento = "";
let descripcionDescuentoProducto = "";
let importeTotal = 0;
let importeDescuentoTotal = 0;
let producto;



//-------- Funciones --------
function solicitarIngreso(cadena){
    return prompt(cadena);
}

function sumarImporte(variable, importe){
    return variable += importe;
}

function aplicarDescuento(descripcionDescuento, importe){
    if(descripcionDescuento == "OFF2022"){
        importeDescuentoTotal = sumarImporte(importeDescuentoTotal, importe);
        return "ARS " + importe;    
    }
    
    return "No aplica";
}

function calcularImporteFinal(importeTotal, importeDescuentoTotal){
    return importeTotal - importeDescuentoTotal;
}

function informarEnConsola(mensaje){
    console.log(mensaje);
}

function procesar(producto, importe){
    cuponDescuento = solicitarIngreso("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
    importeTotal = sumarImporte(importeTotal, importe);
    descripcionDescuentoProducto = aplicarDescuento(cuponDescuento, (importe * 0.1));
    informarEnConsola("Producto: " + producto + "\nPrecio: ARS " + importe + "\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
}
//---------------------------



//Comienzo
producto = solicitarIngreso("COMPRA DE PRODUCTOS (Ingrese 999 para finalizar)\nPiano, Saxofon, Flauta, Guitarra, Bateria\n\nPRODUCTO");

//Bucle while
while(producto != "999"){
    //Condicional switch
    switch(producto){
        case "Piano":
        case "piano":
        case "PIANO":
            procesar("PIANO", 190000);
            break;
        
        case "Saxofon":
        case "saxofon":
        case "SAXOFON":
            procesar("SAXOFON", 600000);
            break;
            
        case "Flauta":
        case "flauta":
        case "FLAUTA":
            procesar("FLAUTA", 100000);
            break;

        case "Guitarra":
        case "guitarra":
        case "GUITARRA":
            procesar("GUITARRA", 200000);
            break;

        case "Bateria":
        case "bateria":
        case "BATERIA":
            procesar("BATERIA", 700000);
            break;

        default:
            alert("El producto ingresado es inválido. Por favor, intente nuevamente.");
            break;
    }

    producto = solicitarIngreso("COMPRA DE PRODUCTOS (Ingrese 999 para finalizar)\nPiano, Saxofon, Flauta, Guitarra, Bateria\n\nPRODUCTO");
}

informarEnConsola("IMPORTE TOTAL SIN DESCUENTOS: ARS " + importeTotal + "\nIMPORTE DESCUENTOS: ARS " + importeDescuentoTotal + "\nIMPORTE FINAL: ARS " + calcularImporteFinal(importeTotal, importeDescuentoTotal));
