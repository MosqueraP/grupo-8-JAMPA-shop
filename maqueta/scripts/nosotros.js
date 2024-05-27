document.addEventListener("DOMContentLoaded", function() {
    const botonVision = document.getElementById('botonVision1');
    const botonMision = document.getElementById('botonMision1');
    const botonProyecto = document.getElementById('botonProyecto1');
    const botonPropuestaValor =document.getElementById('botonPropuestaValor1');
   

    const imgVision = document.getElementById('imgVision1');
    const imgMision = document.getElementById('imgMision1');
    const imgProyecto = document.getElementById('imgProyecto1');
    const imgPropuestaValor = document.getElementById('imgPropuestaValor1');

    botonVision.addEventListener('click', function() {
        ocultarInfor();
        imgVision.classList.add('mostrar');
    });

    botonMision.addEventListener('click', function() {
        ocultarInfor();
        imgMision.classList.add('mostrar');
    });

    botonProyecto.addEventListener('click', function() {
        ocultarInfor();
        imgProyecto.classList.add('mostrar');
    });

    botonPropuestaValor.addEventListener('click', function() {
        ocultarInfor();
        imgPropuestaValor.classList.add('mostrar');
    });
    // ocultar todos los contenidos
    function ocultarInfor() {
        imgVision.classList.remove('mostrar');
        imgMision.classList.remove('mostrar');
        imgProyecto.classList.remove('mostrar');
        imgPropuestaValor.classList.remove('mostrar');
    }
});