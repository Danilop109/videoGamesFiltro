
let localS = window.localStorage;

// if (localS.getItem('registros')) {
//   registros = JSON.parse(localS.getItem('registros'));
// }

let registros = [];
let editando = false;
let numero = 1

let registra = document.getElementById("enviarCliente");
registra.addEventListener("click", e => {
    e.preventDefault();

    guardarInfo();


});


let cuerpoTabla = document.getElementById("tablaClientes");

function guardarInfo() {
    let identidad = document.getElementById("identidad").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("fecha").value;
    let nacion = document.getElementById("nacion").value;


    let dato = {
        "numero": numero++,
        "id": editando === false ? Date.now() : editando,
        "identidad": identidad,
        "nombre": nombre,
        "apellido": apellido,
        "telefono": telefono,
        "email": email,
        "fecha": fecha,
        "nacion": nacion
    }

    if (editando) {
        dato.id = editando
        registros = registros.map(cliente => cliente.id === editando ? dato : cliente)

        document.querySelector('#enviarCliente').textContent = 'Añadir';

        editando = false;
    } else {
        registros.push(dato);
    }

    editando = false;
    localS.setItem('registros', JSON.stringify(registros));


    agregarTabla(registros);
    document.getElementById('formClientes').reset();

}


function agregarTabla(registros) {
    cuerpoTabla.innerHTML = "";

    registros.forEach(cliente => {
        cuerpoTabla.innerHTML += `<tr class="fila">
    <td>${cliente.numero}</td>
    <td>${cliente.identidad}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.apellido}</td>
    <td>${cliente.telefono}</td>
    <td>${cliente.email}</td>
    <td>${cliente.fecha}</td>
    <td>${cliente.nacion}</td>
    <td><a href="#" class="btn btn-warning editar" onclick="cargarDatos(${cliente.id})">Editar</a></td>
    <td><a href="#" class="btn btn-danger eliminar" onclick="borrar(${cliente.id})">Eliminar</a></td>

</tr>`
        paraNombre(registros)
    });

}

function cargarDatos(id) {
    document.querySelector('#enviarCliente').textContent = 'Guardar Cambios';

    registros.forEach(cliente => {
        if (cliente.id === id) {
            numero = cliente.numero
            identidad.value = cliente.identidad
            nombre.value = cliente.nombre;
            apellido.value = cliente.apellido;
            telefono.value = cliente.telefono;
            email.value = cliente.email;
            fecha.value = cliente.fecha;
            nacion.value = cliente.nacion;
        }
    });

    editando = id;
}

// -------------------------------funcion borrar-----------------------------

function borrar(id) {
    registros = registros.filter(cliente => cliente.id !== id);
    localS.setItem('registros', JSON.stringify(registros));
    agregarTabla(registros);

}


let input = document.getElementById("buscarCliente");
input.addEventListener("keyup", e => {

    if (input.value === '') {
        agregarTabla(registros);
    } else {
        if (isNaN(input.value)) {
            let busqueda = registros.filter(function (cliente) {
                return (
                    cliente.apellido.toLowerCase().includes(input.value.toLowerCase()) ||
                    cliente.nombre.toLowerCase().includes(input.value.toLowerCase())
                );
            });

            agregarTabla(busqueda);
        } else {
            let busqueda = registros.filter(function (cliente) {
                return cliente.identidad.includes(input.value);
            });

            agregarTabla(busqueda);
        }
    }

})



function paraNombre(registros) {
    let selecName = document.getElementById("selecName")
    selecName.innerHTML = "";

    registros.forEach(cliente => {
        selecName.innerHTML += `<option value="${cliente.nombre}">${cliente.nombre}</option>`

    });
}

