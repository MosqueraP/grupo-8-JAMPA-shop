export function mostrarProductoModal (idTarjeta, dataTarjeta){

  let inforProducto = document.getElementById("inforProducto")

// VALIDACIÓN ENTRE TARJETA PRODUCTO Y PRODUCTO BASE DE DATOS PARA MOSTRARLO EN EL MODAL EN CASO DE COINCIDIR
  if (idTarjeta.includes(dataTarjeta.producto_id)) {

    // INYECCCIÓN DE HTML PARA MODAL
    inforProducto.innerHTML = `
      <div class="contenidoProducto" id="contenidoProducto"> 
        <div class="btnCerrar">
          <i id='cerrarModal' class="bi bi-x-circle"></i>
        </div>
        <div class="nombreProducto">
                <h2>${dataTarjeta.nombre}</h2>
                <img class="imgProducto" src='${dataTarjeta.imagen}'>
                
        </div> 
                  
        
        <div class="escritorio">     
        <div class="descripcionProducto">
        <h2>Descripción</h2>
                  <h5>${dataTarjeta.descripcion}</h5>            
        </div>

        <div class="colorCantidad">                                        
              <label for="cantidad"> <strong> Cantidad:</strong></label>
              <select id="cantidad">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
              </select><br>                
        </div>

        <div class="tallas">                   
                <label for="talla"> <strong>Talla:</strong></label>          
                <input type="radio" id="L" name="tallas" value="L">
                <label for="L">L</label>
                <input type="radio" id="XL" name="tallas" value="XL">
                <label for="XL">XL</label>
                <input type="radio" id="XXL" name="tallas" value="XXL">
                <label for="XXL">XXL</label>
                <input type="radio" id="XXXL" name="tallas" value="XXL">
                <label for="XXXL">XXXL</label>
        </div>
        <div class="precio">    
          <h2>$ ${dataTarjeta.precio}</h2>
        </div>
        <div class="carrito">                    
                  <button><strong>Agregar al carrito</strong> 
                  <i class='bi bi-cart3'></i>
                  </button>                    
        </div> 
        </div>
        <div class="frase">
          <h4>No estás gordita, estás doblemente buena😘</h4>
        </div>      
      </div>`;

      const contenidoProducto = document.getElementById("contenidoProducto")
      const cerrarModal = document.getElementById("cerrarModal");

      // APERTURA MODAL
      inforProducto.style.display = "flex";

      // CIERRE MODAL
      cerrarModal.addEventListener("click", () => {
        contenidoProducto.classList.add(
          "modalcerrado"
        ); 
          inforProducto.style.display = "none";
          contenidoProducto.classList.remove("modalcerrado");
      });
  }

}