// seleccionamos los los id de el HTML
const ingresarForm = document.getElementById('ingresarForm'),
    correoIng = document.getElementById('correoIng'),
    passwordIng = document.getElementById('passwordIng');

// validar el correo en consola
// console.log(correoIng)

// escuchador funcion anonima
ingresarForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // evita que el formulario se refresque
})