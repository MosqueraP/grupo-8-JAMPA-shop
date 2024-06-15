let tarjeta = document.getElementById("inforProducto");/* se llama los id del html */

let llamar = localStorage.getItem("productos"); /* llamamos el localStorage suministrado */
console.log(llamar);

let convertir = JSON.parse(llamar)/* convertimos el string importado a formato JSON */
console.log(convertir);

/* Recorremos de esta manera el objeto de producto, debido a su estructura y gerarquia, entramos al objeto luego
al arreglom luego iteramos sobre el arreglo para poder entrar al elemento que queremos llamar. */
for (categoria in convertir) {
  for (tipo in convertir[categoria]) {
    convertir[categoria][tipo].forEach(element => {

      /* SE SELECCIONA EL ID DEL PRODUCTO QUE SE QUIERE VER*/

      if (element.producto_id === 19) {
        element.colores.map(l => console.log(l))
        inforProducto.innerHTML += `
          
            <div class="contenidoProducto"> 
            <div class="btnCerrar"> 
             <i class="bi bi-x-circle" ></i>
             </div>
              <div class="nombreProducto">
                      <h2>${element.nombre}</h2>
                      <img class="imgProducto" src='${element.imagen}'>
                      
              </div> 
                        
              
              <div class="escritorio">     
              <div class="descripcionProducto">
              <h2>Descripción</h2>
                        <h5>${element.descripcion}</h5>            
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
                <h2>$ ${element.precio}</h2>
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
      }
    });
  }
}

