const registroForm = document.getElementById("registroForm");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const passwordconf = document.getElementById("passwordconf");

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // VALIDACIÓN NOMBRE
  if (nombres.value === "" || nombres.value.length < 3) {
    return Swal.fire({
      text: "El nombre debe contener 3 o más caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN APELLIDO
  if (apellidos.value === "" || apellidos.value.length < 3) {
    return Swal.fire({
      text: "El apellido debe contener 3 o más caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CORREO
  if (!correo.value.includes("@")) {
    return Swal.fire({
      text: "Ingrese un correo valido",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CONTRASEÑA NO COINCIDEN
  if (password.value !== passwordconf.value) {
    return Swal.fire({
      text: "Las contraseñas no coinciden",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN CONTRASEÑA CARACTERES
  if (password.value.length <= 5 || password.value.length >= 20) {
    return Swal.fire({
      text: "Ingrese una contraseña de 5 a 20 caracteres",
      confirmButtonColor: "#F27F0C",
    });
  }

  // VALIDACIÓN UN CAMPO VACIO

  if (
    nombres.value === "" ||
    apellidos.value === "" ||
    correo.value === "" ||
    password.value === "" ||
    passwordconf.value === ""
  ) {
    return Swal.fire({
      text: "Debes ingresar todos los valores",
      confirmButtonColor: "#F27F0C",
    });
  }
registroForm.reset()
  
});
