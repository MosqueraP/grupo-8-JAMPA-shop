import { usuariosLocal } from "./validaciones-input.js";

const ingresarForm = document.getElementById("ingresarForm"),
  correoIng = document.getElementById("correoIng"),
  passwordIng = document.getElementById("passwordIng");

ingresarForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let registroCorreoMinus = correoIng.value.toLowerCase();
  if (usuariosLocal === null || registroCorreoMinus === "") {
    return Swal.fire({
      text: "Usuario y contraseña no registrados, por favor registrate",
      confirmButtonColor: "#F27F0C",
    });
  }

  usuariosLocal.map((usuario) => {
    if (registroCorreoMinus !== usuario.correo) {
      console.log(usuario.correo);
      return Swal.fire({
        text: "Correo no registrado",
        confirmButtonColor: "#F27F0C",
      });
    }

    if (passwordIng.value != usuario.password) {
      return Swal.fire({
        text: "Contraseña invalida",
        confirmButtonColor: "#F27F0C",
      });
    }

    if (
      registroCorreoMinus === usuario.correo &&
      passwordIng.value === usuario.password
    ) {
      return Swal.fire({
        text: "Ingresaste exitosamente",
        confirmButtonColor: "#F27F0C",
      }).then(() => {
        window.location.href = "/maqueta/paginas/publico/home.html";
      });
    }
  });
});
