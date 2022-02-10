/*let modalBody = document.getElementById("modalBody");
let botonCarrito = document.getElementById("botonCarrito");
let precioTotal = document.getElementById("precioTotal");


//Visualización del localStorage en el Modal del carrito
function productsModal(productStorage) {
  modalBody.innerHTML = " ";

  productStorage.forEach((producto) => {
    modalBody.innerHTML += `
        <div class="card mb-3" id="productCarrito${producto.id}" style="max-width: auto;">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <div class="container">
           <div class="row-cols-3">
           <p class="card-text">Cant: ${producto.cant}</p>
           </div>
        </div>
        <p class="card-text" id="precio${producto.id}">$${producto.precio * producto.cant}</p>
        <button class="btn btn-danger" id="eliminar${producto.id}"><i class="fas fa-trash"></i></button>
        
        </div>
      </div>
    </div>
    </div>
        `;
  });

  


}


//Evento llamar el localStorage en el Modal del carrito
botonCarrito.addEventListener("click", () => {
  let productStorage = JSON.parse(localStorage.getItem("carrito"));
  productsModal(productStorage);
});
*/
