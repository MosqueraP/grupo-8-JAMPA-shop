/* document.getElementById('encabezadohead'); */
const encabezadohead = document.getElementById('encabezadohead');

encabezadohead.innerHTML = `
<div class='contenido'>

<div class='logo'>
<a href='/maqueta/index.html'><img src='/maqueta/imagenes/logos/logonaranja.png' alt=''></a>
</div>

<nav class='nav' id='ham'>
<ul class='barraNavegacion'>
    <li class='itemBarra1'><a href='/maqueta/index.html'>INICIO</a></li>
    <li class='itemBarra2'><a href='/maqueta/nav.html'>PRODUCTOS</a></li>
    <li class='itemBarra3'><a href='/maqueta/paginas/nosotros.html'>NOSOTROS</a></li>
    <li class='itemBarra4'><a href='/maqueta/paginas/contactanos.html'>CONTACTANOS</a></li>
    <li class='itemCerrarSesion' id='cerrar'><a href='#iniciar'>CERRAR SESION</a></li>
    <li class='itemIniSesion' id='iniciar'><a href='#cerra'>INICIAR SESION</a></li>
</ul>
    <a class='icoMenu' href='#ham'><i class='bi bi-list'></i></a>
    <a class='icoCerrar' href='#'><i class='bi bi-x-lg'></i></a>
</nav>
<div class='barraBusqueda'>
<button><i class='bi bi-search'></i></button>
<input type='text' placeholder='Busca tu producto'>
</div>
<a class='icoUser' href=''><i class='bi bi-person'></i></a>
<a class='icoCarrito' href=''><i class='bi bi-cart3'></i></a>

</div>`
