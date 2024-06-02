const productos ={
    "men": [
        {
          "product_id": 1,
          "img": "https://i.postimg.cc/442rvF10/Ref-2-Buso-Capota-Beige.png",
          "name": "Camiseta Deportiva",
          "description": "Camiseta de alta transpirabilidad para entrenamiento.",
          "sizes": {
            "XL": {
              "colors": {
                "black": 10,
                "blue": 8,
                "red": 5
              }
            },
            "XXL": {
              "colors": {
                "black": 7,
                "blue": 6,
                "red": 4
              }
            },
            "XXXL": {
              "colors": {
                "black": 5,
                "blue": 4,
                "red": 3
              }
            }
          },
          "tallas":["XL","XXL","XXXL"]
        },
        {
          "product_id": 2,
          "img":"https://i.postimg.cc/zf1mbbkX/Ref-1-Casual-Negro.png",
          "name": "Pantalones Cortos Deportivos",
          "description": "Pantalones cortos ligeros y cómodos para actividades físicas.",
          "sizes": {
            "XL": {
              "colors": {
                "grey": 15,
                "black": 12,
                "navy": 10
              }
            },
            "XXL": {
              "colors": {
                "grey": 10,
                "black": 8,
                "navy": 6
              }
            },
            "XXXL": {
              "colors": {
                "grey": 8,
                "black": 6,
                "navy": 4
              }
            }
          },
          "tallas":["XL","XXL","XXXL"]
        },
        {
          "product_id": 3,
          "img":"https://i.postimg.cc/0NGTpktG/Ref-1-Casual-Gris-Claro.png",
          "name": "Pantalones Cortos Deportivos",
          "description": "Pantalones cortos ligeros y cómodos para actividades físicas.",
          "sizes": {
            "XL": {
              "colors": {
                "grey": 15,
                "black": 12,
                "navy": 10
              }
            },
            "XXL": {
              "colors": {
                "grey": 10,
                "black": 8,
                "navy": 6
              }
            },
            "XXXL": {
              "colors": {
                "grey": 8,
                "black": 6,
                "navy": 4
              }
            }
          },
          "tallas":["XL","XXL","XXXL"]
        },
        {
          "product_id": 4,
          "img":"https://i.postimg.cc/6QhP8H3Y/Ref-3-Conj-Pantaloneta-Azul.png",
          "name": "Pantalones Cortos Deportivos",
          "description": "Pantalones cortos ligeros y cómodos para actividades físicas.",
          "sizes": {
            "XL": {
              "colors": {
                "grey": 15,
                "black": 12,
                "navy": 10
              }
            },
            "XXL": {
              "colors": {
                "grey": 10,
                "black": 8,
                "navy": 6
              }
            },
            "XXXL": {
              "colors": {
                "grey": 8,
                "black": 6,
                "navy": 4
              }
            }
          },
          "tallas":["XL","XXL","XXXL"]
        }
      ],
      "women": [
        {
          "product_id": 5,
          "img": "https://i.postimg.cc/wBhp0cBm/Ref-2-Estilos-Libre-Gris.png",
          "name": "Leggings Deportivos",
          "description": "Leggings de compresión para soporte y comodidad durante el ejercicio.",
          "sizes": {
            "XL": {
              "colors": {
                "black": 20,
                "purple": 15,
                "pink": 10
              }
            },
            "XXL": {
              "colors": {
                "black": 15,
                "purple": 10,
                "pink": 8
              }
            },
            "XXXL": {
              "colors": {
                "black": 10,
                "purple": 8,
                "pink": 5
              }
            }
          }
        },
        {
          "product_id": 6,
          "img": "https://i.postimg.cc/8C8GRnTG/Ref-2-Estilos-Libre-Negro.png",
          "name": "Sujetador Deportivo",
          "description": "Sujetador deportivo de alta sujeción y confort.",
          "sizes": {
            "XL": {
              "colors": {
                "white": 25,
                "black": 20,
                "blue": 15
              }
            },
            "XXL": {
              "colors": {
                "white": 18,
                "black": 15,
                "blue": 10
              }
            },
            "XXXL": {
              "colors": {
                "white": 12,
                "black": 10,
                "blue": 8
              }
            }
          }
        }
      ],
      "children": [
        {
          "product_id": 7,
          "img":"maqueta/imagenes/logos/Fotos_Jampa/Niñ@s/Sudaderas/Ref-1 Logo Grande/Diseño sin título.png",
          "name": "Camiseta Deportiva Infantil",
          "description": "Camiseta ligera para niños, perfecta para deportes y actividades al aire libre.",
          "sizes": {
            "XL": {
              "colors": {
                "yellow": 10,
                "green": 8,
                "orange": 6
              }
            },
            "XXL": {
              "colors": {
                "yellow": 8,
                "green": 6,
                "orange": 4
              }
            },
            "XXXL": {
              "colors": {
                "yellow": 6,
                "green": 4,
                "orange": 2
              }
            }
          }
        },
        {
          "product_id": 8,
          "img": "maqueta/imagenes/logos/Fotos_Jampa/Niñ@s/Sudaderas/Ref-1 Logo Grande/Ref-1 - Logo-Grande_Negro.png",
          "name": "Pantalones Cortos Deportivos Infantiles",
          "description": "Pantalones cortos cómodos y duraderos para niños.",
          "sizes": {
            "XL": {
              "colors": {
                "red": 12,
                "blue": 10,
                "black": 8
              }
            },
            "XXL": {
              "colors": {
                "red": 10,
                "blue": 8,
                "black": 6
              }
            },
            "XXXL": {
              "colors": {
                "red": 8,
                "blue": 6,
                "black": 4
              }
            }
          }
        }
      ]
}

const men = productos.men
const women = productos.women
const children = productos.children

const nuevoProducto = {
    product_id:9,
    img: "https://yt3.googleusercontent.com/n3EEAZsFafFYRnAMWRUHxaHqypslvbyvp9Qt7RaY_W18PfDUR7qFwfM5T1zoOf4snyiYys3UrJs=s900-c-k-c0x00ffffff-no-rj",
    name: "foto",
    description: "pokemon",
    sizes:{
        XL: {
            colors: {
              black: 10,
              blue: 8,
              red: 5
            }
          },
          XXL: {
            colors: {
              black: 7,
              blue: 6,
              red: 4
            }
          },
          XXXL: {
            colors: {
              black: 5,
              blue: 4,
              red: 3
            }
          }   
    },
    tallas:["XL","XXL","XXXL"]
}
const productCard = document.getElementById("productCard")



men.push(nuevoProducto)
women.push(nuevoProducto)
children.push(nuevoProducto)

men.forEach(product => {
    console.log(product);
    productCard.innerHTML+= `
    <div class="principal">
    <h1>${product.name}</h1>
    <div class="contenedorImagen">
    <img class="imgmio" src="${product.img}">
    </div>
    </div>
    `   
}); 
women.forEach(product => {
    console.log(product);
}); 
children.forEach(product => {
    console.log(product);
}); 

/* form.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log(nombre.value);
    const persona = {
        name:nombre.value,
        imagen: img.value
    }
    men.push(persona)
})
const form = document.getElementById("form")
const nombre = document.getElementById("nombre")
const img = document.getElementById("img")
*/