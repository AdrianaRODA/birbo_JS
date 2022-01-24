//PRODUCTOS
class Product {
    constructor (id, nombre, precio){
        this.id = parseFloat(id);
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
    }
}

const products = [];

   fetch 

    const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const product of products) { 

    guardarLocal(product.id, JSON.stringify(product.nombre));
    
    let currentDiv = document.getElementById("box-container");
    let contenedor = document.createElement("div");
    contenedor.setAttribute("class","box")
    contenedor.innerHTML = 
    `<div class="image">
        <img src="img/imagenCero.png" alt="sinImagen">
    </div>
    <div class="info">
        <h3>${product.nombre}</h3>
        <h4>$ ${product.precio}</h4>
        <div class="subInfo">
            
            <button class="bn11" id="btn${product.id}">
            Agregar al carrito
            </button>
            
        </div>
    </div>`;
    currentDiv.appendChild(contenedor);
    
}


//FORMULARIO CONTACTO

$(() => {
    $('#formText').submit(function (e) {
     e.preventDefault();

     console.log($('#nombre').val());
     console.log("Mensaje enviado");
    });
});


