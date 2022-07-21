//Declaración de variables
let producto = prompt("COMPRA DE PRODUCTOS (Ingrese 999 para finalizar)\nPiano, Saxofon, Flauta, Guitarra, Bateria\n\nPRODUCTO");
let cuponDescuento = "";
let descripcionDescuentoProducto = "";
let importeTotal = 0;
let importeDescuentoTotal = 0;

//Bucle while
while(producto != "999"){
    //Condicional switch
    switch(producto){
        case "Piano":
        case "piano":
        case "PIANO":
            importeTotal += 190000;
            cuponDescuento = prompt("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
            //Condicional if-else
            if(cuponDescuento == "OFF2022"){
                importeDescuentoTotal += 1900;
                descripcionDescuentoProducto = "ARS 1900";    
            }
            else{
                descripcionDescuentoProducto = "No aplica";  
            }
            console.log("Producto: PIANO\nPrecio: ARS 190000\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
            break;
        
        case "Saxofon":
        case "saxofon":
        case "SAXOFON":
            importeTotal += 600000;
            cuponDescuento = prompt("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
            //Condicional if-else
            if(cuponDescuento == "OFF2022"){
                importeDescuentoTotal += 6000;
                descripcionDescuentoProducto = "ARS 6000";    
            }
            else{
                descripcionDescuentoProducto = "No aplica";  
            }
            console.log("Producto: SAXOFON\nPrecio: ARS 600000\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
            break;
            
        case "Flauta":
        case "flauta":
        case "FLAUTA":
            importeTotal += 100000;
            cuponDescuento = prompt("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
            //Condicional if-else
            if(cuponDescuento == "OFF2022"){
                importeDescuentoTotal += 1000;
                descripcionDescuentoProducto = "ARS 1000";    
            }
            else{
                descripcionDescuentoProducto = "No aplica";  
            }
            console.log("Producto: FLAUTA\nPrecio: ARS 100000\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
            break;

        case "Guitarra":
        case "guitarra":
        case "GUITARRA":
            importeTotal += 200000;
            cuponDescuento = prompt("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
            //Condicional if-else
            if(cuponDescuento == "OFF2022"){
                importeDescuentoTotal += 2000;
                descripcionDescuentoProducto = "ARS 2000";    
            }
            else{
                descripcionDescuentoProducto = "No aplica";  
            }
            console.log("Producto: GUITARRA\nPrecio: ARS 200000\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
            break;

        case "Bateria":
        case "bateria":
        case "BATERIA":
            importeTotal += 700000;
            cuponDescuento = prompt("Ingrese OFF2022 para obtener 10% de descuento\n\nCUPÓN");
            //Condicional if-else
            if(cuponDescuento == "OFF2022"){
                importeDescuentoTotal += 7000;
                descripcionDescuentoProducto = "ARS 7000";    
            }
            else{
                descripcionDescuentoProducto = "No aplica";  
            }
            console.log("Producto: BATERIA\nPrecio: ARS 700000\nDescuento: " + descripcionDescuentoProducto + "\nImporte total sin descuentos: ARS " + importeTotal);
            break;

        default:
            alert("El producto ingresado es inválido. Por favor, intente nuevamente.");
            break;
    }

    producto = prompt("COMPRA DE PRODUCTOS (Ingrese 999 para finalizar)\nPiano, Saxofon, Flauta, Guitarra, Bateria\n\nPRODUCTO");
}

console.log("IMPORTE TOTAL SIN DESCUENTOS: ARS " + importeTotal + "\nIMPORTE DESCUENTOS: ARS " + importeDescuentoTotal + "\nIMPORTE FINAL: ARS " + (importeTotal - importeDescuentoTotal));
