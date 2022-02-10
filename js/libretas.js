//PRODUCTOS

let stockProductos = []
let carritoCompras = []


const contenedorProductos = document.getElementById('contenedorFavoritos');
const contenedorCarrito = document.getElementById('modalBody');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecLinea = document.getElementById('selecLinea')


selecLinea.addEventListener('change',()=>{
  console.log(selecLinea.value)
  if(selecLinea.value == 'all'){
      mostrarProductos(stockProductos)
  }else{
      mostrarProductos(stockProductos.filter(el => el.linea == selecLinea.value))
      console.log(stockProductos.filter(el => el.linea == selecLinea.value))
  }
})


//Llamamos el JSON de la lista de productos a través de FETCH
fetch("../products.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach(elemento => {
      stockProductos.push(elemento)
  })

  mostrarProductos(stockProductos)
});

//Generamos la clase y constructor de nuestros productos
class Producto {
  constructor (id, linea, nombre, precio, img){
      this.id = id;
      this.linea = linea;
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
      this.cant = 1;
  }
}

//Plasmamos los productos en nuestra pagina
function mostrarProductos(array){
  $('#contenedorFavoritos').empty();
   for (const producto of array) {
       let div = document.createElement('div');
       div.classList.add('producto');
       div.innerHTML += `
        <div class="box">
        <div class="image">
          <img src="img/${producto.id}.jpg" alt="${producto.nombre}">
        </div>

        <div class="info">
          <h3>${producto.nombre}</h3>
          <h4>$ ${producto.precio} mxn</h4>
        <div class="subInfo">
           <button id="btn${producto.id}" class="bn11" ><i  class="fas fa-cart-plus" style="margin: 0 1rem 0 0"></i>
           Agregar al carrito
           </button> 
        </div>
        </div>
        </div>`
       contenedorProductos.appendChild(div);
       
       let boton = document.getElementById(`btn${producto.id}`)

       boton.addEventListener('click', ()=>{
           agregarAlCarrito(producto.id)
       })
   }

}

//AGREGAR PRODUCTO AL CARRITO
function agregarAlCarrito(id) {
  let repetido = carritoCompras.find(prodR => prodR.id == id);
  if(repetido){
      repetido.cant = repetido.cant + 1;
      document.getElementById(`cant${repetido.id}`).innerHTML = `<p id="cant${repetido.id}"><strong>cant:</strong> ${repetido.cant}</p>`
      actualizarCarrito()
  }else{
      let productoCarrito = stockProductos.find(prod => prod.id == id);

      carritoCompras.push(productoCarrito);

      

      productoCarrito.cant = 1;

     //TARJETA PRODUCTO AGREGADO
      actualizarCarrito()
      let div = document.createElement('div')
      div.classList.add("productoEnCarrito")
      div.innerHTML = 

      `
      <div class="img-carrito"> 
        <img src="${productoCarrito.img}" class="img-fluid rounded-start" alt="${productoCarrito.nombre}"> 
      </div>
      <p id="nombreProd">${productoCarrito.nombre}</p>
      <p><strong>Precio:</strong>$ ${productoCarrito.precio}</p>
      <p id="cant${productoCarrito.id}"><strong>cant:</strong> ${productoCarrito.cant}</p>
      <button class="btn btn-danger" id="eliminar${productoCarrito.id}"><i class="fas fa-trash"></i></button>`
      
      contenedorCarrito.appendChild(div)
      
      

      //ELIMINAR PRODUCTO DE CARRITO
      let botonEliminar = document.getElementById(`eliminar${productoCarrito.id}`)
      

      botonEliminar.addEventListener('click', ()=>{
          botonEliminar.parentElement.remove()
          carritoCompras = carritoCompras.filter(pEliminar => pEliminar.id != productoCarrito.id)
          localStorage.setItem('carrito',JSON.stringify(carritoCompras))
          actualizarCarrito()
      }) 

  }
   localStorage.setItem('carrito',JSON.stringify(carritoCompras))
}


//ACTUALIZACION DEL CARRITO -PRECIOS & CANTIDADES-
function  actualizarCarrito (){
  contadorCarrito.innerText = carritoCompras.reduce((acc, el)=> acc + el.cant, 0);
 precioTotal.innerText = carritoCompras.reduce((acc,el)=> acc + (el.precio * el.cant), 0)
}


//FORMULARIO CONTACTO

$(() => {
  $("#formText").submit(function (e) {
    e.preventDefault();

    console.log($("#nombre").val());
    console.log("Mensaje enviado");
  });
});
