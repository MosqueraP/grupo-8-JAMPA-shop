let currentId = getMaxId() + 1; // Inicializa el ID con el máximo actual + 1

function getMaxId() {
    const rows = document.querySelectorAll('#tablaProductosBody tr');
    let maxId = 0;
    rows.forEach(row => {
        const id = parseInt(row.cells[0].textContent);
        if (id > maxId) {
            maxId = id;
        }
    });
    return maxId;
}

document.getElementById('agregarProductoBtn').addEventListener('click', agregarProducto);

function agregarProducto() {
    // Obtiene los valores del formulario
    var id = currentId++; // Usar y luego incrementar el ID actual
    var nombre = document.getElementById('productNombre').value;
    var precio = document.getElementById('productPrecio').value;
    var talla = document.getElementById('talla').value;
    var color = document.getElementById('color').value;
    var imagen1 = document.getElementById('productImagen1').files[0];
    var imagen2 = document.getElementById('productImagen2').files[0];

    // Convierte las imágenes a una URL
    var reader1 = new FileReader();
    var reader2 = new FileReader();

    reader1.onload = function(e) {
        var imageUrl1 = e.target.result;
        reader2.onload = function(e) {
            var imageUrl2 = e.target.result;
            // Crea una nueva fila en la tabla
            var table = document.getElementById('tablaProductosBody');
            var newRow = table.insertRow();

            // Inserta las celdas en la nueva fila
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 = newRow.insertCell(4);
            var cell6 = newRow.insertCell(5);
            var cell7 = newRow.insertCell(6);

            // Agrega el contenido a las celdas
            cell1.innerHTML = id;
            cell2.innerHTML = nombre;
            cell3.innerHTML = "$" + parseFloat(precio).toFixed(2);
            cell4.innerHTML = talla;
            cell5.innerHTML = color;
            cell6.innerHTML = '<img src="' + imageUrl1 + '" width="30">';
            cell7.innerHTML = '<img src="' + imageUrl2 + '" width="30">';

            // Limpia el formulario después de agregar el producto
            document.getElementById('productoForm').reset();
        }
        reader2.readAsDataURL(imagen2);
    }
    reader1.readAsDataURL(imagen1);
}

function filtrarTabla(tipo) {
    const input = document.getElementById(`filtro${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`).value.toLowerCase();
    const table = document.getElementById('tablaProductosBody');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        if (tipo === 'id') {
            match = cells[0].textContent.toLowerCase().includes(input);
        } else if (tipo === 'nombre') {
            match = cells[1].textContent.toLowerCase().includes(input);
        }
        rows[i].style.display = match ? '' : 'none';
    }
}