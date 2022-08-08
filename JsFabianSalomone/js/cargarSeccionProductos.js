class Producto{
    constructor(imagen, marca, modelo, descripcion, cuotas, envio, precio, stock){
        this.Imagen = imagen,
        this.Marca = marca.toUpperCase(),
        this.Modelo = modelo.toUpperCase(),
        this.Descripcion = descripcion,
        this.Cuotas = cuotas,
        this.Envio = envio,
        this.Precio = precio,
        this.Stock = stock
    }
}



const productos = [];

const producto1 = new Producto("kurzweil_sp2x", "Kurzweil", "Sp2x", "Piano eléctrico Kurzweil Sp2x, 88 teclas con peso piano martillo", 6, 1500, 200000, 10);

productos.push(producto1);

let seccionProductos = document.getElementById("seccionProductos");

productos.forEach((producto) => {
    let card = document.createElement("div");
    let imageContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");

    //Seteo de clase de la tarjeta
    card.className = "col-12 col-md-6 col-lg-3 card cardProducto";

    //Seteo de clase para el contenedor de la imagen
    imageContainer.className = "cardProducto__imageContainer";

    //Seteo de atributos y clase de la imagen
    cardImage.setAttribute("src", `../assets/${producto.Imagen}.jpg`);
    cardImage.setAttribute("alt", "Imagen de producto");
    cardImage.className = "card-img-top cardProducto__imagen";

    //Seteo de innerHTML para el cuerpo
    let valorCuota = Math.round(producto.Precio/producto.Cuotas);
    cardBody.innerHTML = `
        <h5 class="card-title cardProducto__marca">${producto.Marca}</h5>
        <h6 class="card-subtitle mb-2 text-muted cardProducto__modelo">Modelo ${producto.Modelo}</h6>
        <p class="card-text cardProducto__descripcion">${producto.Descripcion}</p>
        <h3 class="cardProducto__precio"><strong class="cardProducto__strongPrecio">ARS ${producto.Precio}</strong><h3/>
        <p class="card-text cardProducto__info"><small class="text-muted">${producto.Cuotas} cuotas sin interés de <strong class="cardProducto__strong">ARS ${valorCuota}</strong></small></p>
        <p class="card-text cardProducto__info"><small class="text-muted">Costo de envío: <strong class="cardProducto__strong">ARS ${producto.Envio}</strong></small></p>
        <p class="card-text cardProducto__info"><small class="text-muted">Cantidad en stock: <strong class="cardProducto__strong">${producto.Stock}</strong></small></p>
    `;
    cardBody.className = "card-body cardProducto__body";

    //Seteo de botón


    //Agregaciones
    imageContainer.appendChild(cardImage);
    card.appendChild(imageContainer);
    card.appendChild(cardBody);
    card.innerHTML += `<div class="cardProducto__botonContainer"><button class="btn btn-primary cardProducto__boton" id="${producto.Modelo}">Agregar</button></div>`;
    seccionProductos.appendChild(card);
});
