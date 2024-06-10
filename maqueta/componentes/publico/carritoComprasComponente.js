mainCarrito.innerHTML = `<div class="btnCerrarCarrito" id="btnCerrarCarrito">X</div> 
<h2 class="tituloCarrito">CARRITO DE COMPRAS</h2>
<div class="contenedorProductos">
    <div class="cardProducto">
        <img src="https://splingsport.com.co/wp-content/uploads/2022/07/WhatsApp-Image-2020-10-28-at-5.28.33-PM-4.jpeg" alt="Conjunto verde olivo">
        <div class="detallesProducto">
            <h4>Nombre Producto</h4>
            <p>Color: Azul</p>
            <p>Talla: XXXL </p>
            <p>Precio: 25.000 </p>
            <div class="cantidadProducto">
                <button class="btnRestar">-</button>
                <span>2</span>
                <button class="btnAgregar">+</button>
            </div>
            <p>Total: $50.000 </p>
            <button class="btnEliminar">Eliminar</button>
        </div>
    </div>
    <div class="cardProducto">
        <img src="https://solucionesinformaticascali.com/cdn/shop/products/3dba0a4d-5674-4210-aa72-2d8a5434c498.jpg?v=1654288482" alt="Conjunto verde olivo">
        <div class="detallesProducto">
            <h4>Nombre Producto</h4>
            <p>Color: Azul</p>
            <p>Talla: XXXL </p>
            <p>Precio: 25.000 </p>
            <div class="cantidadProducto">
                <button class="btnRestar">-</button>
                <span>2</span>
                <button class="btnAgregar">+</button>
            </div>
            <p>Total: $50.000 </p>
            <button class="btnEliminar">Eliminar</button>
        </div>
    </div>
    <div class="carritoResumen">
        <button class="btnVaciarCarrito">Vaciar Carrito</button>
        <h3>Total del Carrito: $100.000 </h3>
        <button class="btnComprar">Comprar</button>
    </div>
</div>
`;
