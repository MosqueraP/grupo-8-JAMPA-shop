mainCarrito.innerHTML = `
<div class="contenedorTitulo">
    <div class="btnCerrarCarrito" id="btnCerrarCarrito">X</div>
    <h2 class="tituloCarrito">CARRITO DE COMPRAS</h2>
</div>
<div class="contenedorProductos">
    <div class="contenedorCards">
        <div class="cardProducto">
            <img src="https://i.postimg.cc/0NGTpktG/Ref-1-Casual-Gris-Claro.png" alt="Conjunto verde olivo">
            <div class="detallesProducto">
                <h4>Nombre Producto 1</h4>
                <p>Color: Azul</p>
                <p>Talla: XXXL</p>
                <p>Precio: 25.000</p>
                <div class="cantidadProducto">
                    <button class="btnRestar">-</button>
                    <span>2</span>
                    <button class="btnAgregar">+</button>
                </div>
                <div class="resumenCompra">
                    <p>Total: $50.000</p>
                    <button class="btnEliminar">Eliminar</button>
                </div>
            </div>
        </div>
        <div class="cardProducto">
            <img src="https://i.postimg.cc/zf1mbbkX/Ref-1-Casual-Negro.png" alt="Conjunto verde olivo">
            <div class="detallesProducto">
                <h4>Nombre Producto 2</h4>
                <p>Color: Azul</p>
                <p>Talla: XXXL</p>
                <p>Precio: 25.000</p>
                <div class="cantidadProducto">
                    <button class="btnRestar">-</button>
                    <span>2</span>
                    <button class="btnAgregar">+</button>
                </div>
                <div class="resumenCompra">
                    <p>Total: $50.000</p>
                    <button class="btnEliminar">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    <div class="carritoResumen">
        <button class="btnVaciarCarrito">Vaciar Carrito</button>
        <h3>Total del Carrito: $100.000</h3>
        <button class="btnComprar">COMPRAR</button>
    </div>
</div>
`;

