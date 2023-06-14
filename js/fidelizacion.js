

let muestra= document.getElementById("muestra");
muestra.addEventListener("click", e=>{
    e.preventDefault();
    let clientesPuntos= document.getElementById("clientesPuntos");
    clientesPuntos.innerHTML= "";
    compras.forEach(cliente=>{
        clientesPuntos.innerHTML+=`<tr>
        <td>${cliente.idenCli}</td>
        <td>${cliente.nombreCli}</td>
        <td>${cliente.apellidoCli}</td>
        <td>${cliente.puntos}</td>
        </tr>`
    })
    
})