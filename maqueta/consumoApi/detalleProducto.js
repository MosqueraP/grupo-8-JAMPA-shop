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
            if (element.producto_id === 11) {
                inforProducto.innerHTML += `
                <div class="inforProducto" id="inforProducto">     

                    <div class="nombreProducto">
                      <h2>${element.nombre}</h2>
                    </div>
                
                <div class="contenidoProducto">                
                    <img class="imgProducto" src='${element.imagen}'>
                    

                    <div class="descripcionProducto">
                        <h5>${element.descripcion}</h5>            
                    </div>

                    <div class="colorCantidad">
                    ${element.colores.map(color => `<button>${color}</button>`).join('')}
                     
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
                      <input type="radio" id="tallaL" name="tallas" value="L">
                      <label for="L">L</label>
                      <input type="radio" id="tallaXL" name="tallas" value="XL">
                      <label for="XL">XL</label>
                      <input type="radio" id="tallaXXL" name="tallas" value="XXL">
                      <label for="XXL">XXL</label>
                      <input type="radio" id="tallaXXXL" name="tallas" value="XXL">
                      <label for="XXXL">XXXL</label>
                    </div>

                    <h2 class="precio">$ ${element.precio}</h2>
                    </div>
                </div>
                
                <div class="carrito">                    
                        <button><strong>Agregar al carrito</strong> 
                        <img class="imgCarrito" src="https://cdn-icons-png.flaticon.com/128/5465/5465858.png" alt="imgCarrito">                        
                        </button>                    
                    </div> 
<h4 class="frase">No estás gordita, estás doblemente buena😘</h4>
                </div>
                
                `;

            }
        });
    }
}

