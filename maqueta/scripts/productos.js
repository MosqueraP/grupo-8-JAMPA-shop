/* se llama los id del html */
const tarjeta = document.getElementById('tarjeta');
let atras = document.getElementById("atras");
let siguiente = document.getElementById("siguiente");
const indicadorPagina = document.getElementById('indicadorPagina');
let elemtPorPagina = 7; // Número de productos por página
let llamar = localStorage.getItem("productos"); /* llamamos el localStorage suministrado */ 
let convertir = JSON.parse(llamar)/* convertimos el string importado a formato JSON */



// Función para paginacion
function mostrarContenido(numPagina) {
    tarjeta.innerHTML = ''; // Limpiar contenido anterior
    /* paginacion */
    let siguientePagina = (numPagina - 1) * elemtPorPagina;
    let paginaAnterior = siguientePagina + elemtPorPagina;
    let producMostrados = [];

    // Recorrer cada categoría y tipo
    for (categoria in convertir) {
        for (tipo in convertir[categoria]) {
            producMostrados = producMostrados.concat(convertir[categoria][tipo]);
        }
    }
    /* integracion de paginacion junto con la integracion y de los productos */
    for (let i = siguientePagina; i < paginaAnterior && i < producMostrados.length; i++) {
        const element = producMostrados[i];
        tarjeta.innerHTML += `
            <div class="contenTarjeta">
            <img class="imgTar" src='${element.imagen}'>
            <div class="texTarj">
            <h4 class="nomTar" >${element.nombre}</h4>
            <h4 class="precio">$ ${element.precio}</h4>
            </div>
            <div class="opciones">
                <button id="abre">Ver Detalle</button>
            </div>
            </div
        `;
    }
    /* pagina atras */
    atras.addEventListener('click', function() {
        if (numPagina > 1) {
            mostrarContenido(numPagina - 1);
        }
    });
    /* pagina siguiente */
    siguiente.addEventListener('click', function() {
        if (numPagina < totalPaginas) {
            mostrarContenido(numPagina + 1);
        }
    });
    // Actualizar paginador
    indicadorPagina.textContent = `${numPagina}/${totalPaginas}`;
}
// Calcular el numero de páginas
let totalproducMostrados = 0;
for (const categoria in convertir) {
    for (const tipo in convertir[categoria]) {
        totalproducMostrados += convertir[categoria][tipo].length;
}
}
const totalPaginas = Math.ceil(totalproducMostrados / elemtPorPagina);

// llamar la funcion y colocar 1 para cargar la primer tanda de productos
mostrarContenido(1);

console.log(abre);