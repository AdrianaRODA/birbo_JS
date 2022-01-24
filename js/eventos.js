let modalBody = document.getElementById("modalBody");
let botonCarrito = document.getElementById("botonCarrito");

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
           <button class="btn btn-outline-secondary" id="rest${producto.id}"><i class="fas fa-minus-circle"></i></button>
           <p class="card-text">Cant: ${producto.cant}</p>
           <button class="btn btn-outline-secondary" id="sum${producto.id}"><i class="fas fa-plus-circle"></i></button>
           </div>
        </div>
        <p class="card-text">$${producto.precio * producto.cant}</p>
        <button class="btn btn-danger" id="Eliminar${producto.id}"><i class="fas fa-trash"></i></button>
        
      </div>
    </div>
  </div>
</div>
        `;
  });
}

botonCarrito.addEventListener("click", () => {
  let productStorage = JSON.parse(localStorage.getItem("carrito"));
  productsModal(productStorage);
});
