const btnAbrirCarrito = document.getElementById("btnAbrirCarrito")
const btnCerrarCarrito = document.getElementById("btnCerrarCarrito")
const mainCarrito = document.getElementById("mainCarrito")


btnAbrirCarrito.addEventListener("click", () => {
  mainCarrito.style.right ="0";
})

btnCerrarCarrito.addEventListener("click", () =>{
mainCarrito.style.right="-100%"
})
