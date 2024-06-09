/* se llama los id del html */
let tarjeta = document.getElementById("tarjeta");

let atras = document.getElementById("atras");
let informacionPagina = document.getElementById("informacionPagina");
let siguiente = document.getElementById("siguiente");
let pagina = 1

siguiente.addEventListener("click", ()=>{
    pagina +=1;
    console.log("si funciona");
})
atras.addEventListener("click", ()=>{
    pagina -=1;
    console.log("super funciona");
})

let llamar = localStorage.getItem("productos"); /* llamamos el localStorage suministrado */ 
console.log(llamar);

let convertir = JSON.parse(llamar)/* convertimos el string importado a formato JSON */
console.log(convertir);

/* Recorremos de esta manera el objeto de producto, debido a su estructura y gerarquia, entramos al objeto luego
al arreglom luego iteramos sobre el arreglo para poder entrar al elemento que queremos llamar. */
for (categoria in convertir){
    console.log(categoria);
    for( tipo in convertir[categoria]){
        console.log(tipo);
        convertir[categoria][tipo].forEach(element => {
            console.log(element);
            tarjeta.innerHTML+=`
            <div class="contenTarjeta">

            <img class="imgTar" src='${element.imagen}'>
            <div class="texTarj">
            <h4 class="nomTar" >${element.nombre}</h4>
            <h4 class="precio">$ ${element.precio}</h4>
            </div>
            <div class="opciones">
                <button>COMPRAR</button>
                <a href="#">Ver Detalle</a>
            </div>
            </div>
            `
        });
    }
}
