/* const fetch2 = fetch("/maqueta/lista.json").then((response)=>response.json()).then((data)=>console.log(data.products.women[0].sizes.XXL.colors.black)); */
const productCard = document.getElementById("productCard");

async function consuApi(){
    const response = await fetch("/maqueta/consumoApi/lista.json")
    const data = await response.json()
    const catMen = data.products.men
    const catwomen = data.products.women

    for(let i = 0; i < catMen.length; i++){
        console.log(catMen[i]); 
        productCard.innerHTML+=`
        <div class="principal">
        <h2>${catMen[i].name}</h2>
        <div class="contenedorImagen">
        <img class="imgmio" src="${catMen[i].img}">
        </div>
        <h2>${catMen[i].tallas[1]}</h2>
        </div>
        `
    }
    catwomen.forEach(productWomen => {
        console.log(productWomen); 
        productCard.innerHTML+=`
        <div class="principal">
        <h2>${productWomen.name}</h2>
        <div class="contenedorImagen">
        <img class="imgmio" src="${productWomen.img}">
        </div>
        </div>
        `
    });
}
consuApi();
console.log(fetch2);


