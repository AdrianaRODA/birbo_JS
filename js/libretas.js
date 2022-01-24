//PRODUCTOS

/*if(!localStorage.getItem('carrito')){
    localStorage.setItem('carrito', JSON.stringify([]))
}*/
let divProductos = document.getElementById("contenedorFavoritos")

fetch('../products.json')
.then(response => response.json())
.then(data => {
    data.forEach((productArray, indice) => {
        divProductos.innerHTML += `
        <div class="box">
        <div class="image">
        <img src="img/${productArray.id}.jpg" alt="${productArray.nombre}">
    </div>
    <div class="info">
        <h3>${productArray.nombre}</h3>
        <h4>$ ${productArray.precio} mxn</h4>
        <div class="subInfo">
            
            <button id="btn${indice}" class="bn11" ><i  class="fas fa-cart-plus" style="margin: 0 1rem 0 0"></i>
            Agregar al carrito
            </button>
            
        </div>
    </div>
    </div>
        `
    })
})


/*
productos = JSON.parse(localStorage.getItem('carrito'))
data.forEach((productArray, indice) => {
    document.getElementById(`btn${indice}`).addEventListener('click', () => {
        if(productos.find(producto => producto.nombre == productArray.nombre)) {
            let index = productos.findIndex(producto => producto.nombre == productArray.nombre)
            productos[index].cant++
            localStorage.setItem('carrito',JSON.stringify(productos))
        } else {
            let nuevoProducto = new Producto(productArray.id, productArray.linea, productArray.nombre, productArray.precio, productArray.img)
            productos.push(nuevoProducto)
            localStorage.setItem('carrito',JSON.stringify(productos))
        }
    })
})*/

//FORMULARIO CONTACTO

$(() => {
    $('#formText').submit(function (e) {
     e.preventDefault();

     console.log($('#nombre').val());
     console.log("Mensaje enviado");
    });
});


