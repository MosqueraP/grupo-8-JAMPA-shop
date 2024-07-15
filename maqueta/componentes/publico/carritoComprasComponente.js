const mainCarrito = document.getElementById("mainCarrito");

mainCarrito.innerHTML = `
<div class="contenedorTitulo">
    <div class="btnCerrarCarrito" id="btnCerrarCarrito">X</div>
    <h2 class="tituloCarrito">CARRITO DE COMPRAS</h2>
</div>
<div class="contenedorProductos">
    <div id="contenedorCards" class="contenedorCards">
        
    </div>
    <div class="carritoResumen">
        <button class="btnVaciarCarrito">Vaciar Carrito</button>
        <h3>Total del Carrito: $100.000</h3>
        <button class="btnComprar">COMPRAR</button>
    </div>
</div>
`;
const contenedorCards = document.getElementById("contenedorCards");
const btnAbrirCarrito = document.getElementById("btnAbrirCarrito");
const btnCerrarCarrito = document.getElementById("btnCerrarCarrito");

// APERTURA Y CIERRE CARRITO DE COMPRAS
btnAbrirCarrito.addEventListener("click", () => {
  mainCarrito.style.right = "0";
  mainCarrito.style.top = "0";
});

btnCerrarCarrito?.addEventListener("click", () => {
  mainCarrito.style.right = "-100%";
});

// FUNCIÓN PINTAR CARRITO
export function capturarDatosProducto(
  btnAgregar,
  dataProducto,
  tallaProducto,
  sumar,
  restar,
  cantidadProductos
) {
  let convertirCantidadProdutos = parseInt(cantidadProductos.innerHTML);

  const productoCarrito = {
    imagen: dataProducto.imagen,
    nombre: dataProducto.nombre,
    precio: dataProducto.precio,
    talla,
  };

  // ESCUCHADOR PARA AUMENTAR O QUITAR PRODUCTOS
  sumar.addEventListener("click", () => {
    convertirCantidadProdutos++;
    cantidadProductos.innerHTML = convertirCantidadProdutos;
    productoCarrito.convertirCantidadProdutos = convertirCantidadProdutos;
  });

  restar.addEventListener("click", () => {
    convertirCantidadProdutos--;
    cantidadProductos.innerHTML = convertirCantidadProdutos;
    productoCarrito.convertirCantidadProdutos = convertirCantidadProdutos;
  });

  btnAgregar.addEventListener("click", () => {
    productoCarrito.talla = tallaProducto.value;
    console.log(productoCarrito.talla);

    let multiplicarValorProducto =
      productoCarrito.precio * productoCarrito.convertirCantidadProdutos;

    contenedorCards.innerHTML += `
    <div class="cardProducto">
        <img src=${productoCarrito.imagen} alt="Conjunto verde olivo">
        <div class="detallesProducto">
            <h4>${productoCarrito.nombre}</h4>
            <p>Talla: ${productoCarrito.talla}</p>
            <p>Precio: ${productoCarrito.precio}</p>
            <div class="cantidadProducto">
                <button class="btnRestar">-</button>
                <span>${productoCarrito.convertirCantidadProdutos}</span>
                <button id="btnSumarCarrito" class="btnAgregar">+</button>
            </div>
            <div class="resumenCompra">
                <p>Total: ${multiplicarValorProducto}</p>
                <button id="btnEliminar" class="btnEliminar">Eliminar</button>
            </div>
        </div>
    </div>`;
  });

  // const btnEliminar = document.getElementById("btnEliminar");
  // const btnSumarCarrito = document.getElementById("btnSumarCarrito");
  // let sumarCarrito = 0;



//   btnSumarCarrito?.addEventListener("click", ()=>{
//     sumarCarrito++
//     productoCarrito.convertirCantidadProdutos = sumarCarrito
// console.log(sumarCarrito);
// })


//   btnEliminar.addEventListener("click", () => {
//     contenedorCards.innerHTML = ``;

//     console.log("click");
//   });
}
