// CREACIÓN DE FUNCIÓN LOGICA PARA EL SLIDE DE LOS DESARROLLADORES
// TRAYENDO INFORMACIÓN DEL HTML (Class), PERO ESTA ES UNA COLECCIÓN DE LISTAS

const cardDevs = document.getElementsByClassName("cardDevs")

// TRAYENDO INFORMACIÓN DEL HTML (Id), ESTE ES UN ELEMENTO
const containerCardDevs = document.getElementById("containerCardDevs")

// CREACIÓN DE UN ARRAY, ESTOY CONVIRTIENDO UNA COLECCIÓN DE LISTAS (cardDevs) EN UN ARRAY POR MEDIO DEL METODO FROM
const arrayCardDevs = Array.from (cardDevs)

//  REPETIR EL FOREACH 2 VECES (<2)
for(let i = 0; i<2; i++){


// ITERAR EL ARRAY CON EL FOREACH
arrayCardDevs.forEach(element => {
    // TOMAR CADA ELEMENTO DEL ARRAY Y SE ENVIA AL CONTAINER CARD DEVS EN FORMATO HTML (EL + ME CONCATENA CADA ELEMENTO DEL ARRAY)
    containerCardDevs.innerHTML+= `<div class ='cardDevs'> ${element.innerHTML} </div>`
});
};

// CREACIÓN DE FUNCIÓN LOGICA PARA EL SLIDE DE VALORES
// TRAER UNA LISTA DEL HTML POR MEDIO DE LA CLASS 
const cardValores = document.getElementsByClassName("cardValores")

// TRAE UN ELEMENTO POR ID DEL HTML
const containerCardValores= document.getElementById("containerCardValores")

// TRANSFORMAR UNA LISTA EN ARRAY
const arrayCardValores = Array.from (cardValores)

//  ITERACIÓN DEL FOREACH 2 VECES
for(let i = 0; i<2; i++){

// ITERACIÓN SOBRE UN ARRAY
    arrayCardValores.forEach(element =>{
        // ENVIAR AL HTML UN ELEMENTO DEL ARRAY
    containerCardValores.innerHTML+= `<div class ='cardValores'> ${element.innerHTML} </div>`
})
}
