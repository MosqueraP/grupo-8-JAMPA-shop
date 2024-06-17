import { usuariosLocal } from "./validaciones-input.js";

// seleccionamos los los id de el HTML
const ingresarForm = document.getElementById('ingresarForm'),
    correoIng = document.getElementById('correoIng'),
    passwordIng = document.getElementById('passwordIng');

console.log(correoIng)

// validar el correo en consola
// console.log(correoIng)

// escuchador funcion anonima
ingresarForm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita que el formulario se refresque

    // Busca si el correo ingresado existe en usuariosLocal
    //const usuarioEncontrado = usuariosLocal.find(usuario => usuario.correo === correoIng);


    console.log(usuariosLocal.find((usuario) => {

        if (correoIng.value != usuario.correo) {
            // alerta desde la libreria Swal.fire

            return Swal.fire({
                text: "Correo no registrado",
                confirmButtonColor: "#F27F0C",
            });
        } else if (passwordIng.value != usuario.password) {
            return Swal.fire({
                text: "Contraseña invalida",
                confirmButtonColor: "#F27F0C",
            })

        } else if (correoIng.value === usuario.correo && passwordIng.value === usuario.password) {
            return Swal.fire({
                text: "Ingresaste exitosamente",
                confirmButtonColor: "#F27F0C",
            })

        } else {
            return
        }


    }))


})
