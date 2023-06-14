
let compras=[];

let comprar= document.getElementById("compraJuego")
comprar.addEventListener("click", e=>{
    e.preventDefault();
    let seleccionN= document.getElementById("selecName").value;
    let seleccionG= document.getElementById("selecGame").value;
    let encontraN = registros.find(cliente => cliente.nombre === seleccionN);
    let encontraG = games.find(game => game.name === seleccionG);
    console.log(seleccionN,seleccionG,encontraN, encontraG)

    let iva = encontraG.valor*16/100;
    let especial = encontraG.valor*4/100;
    let resulta= encontraG.valor + iva + especial

    let compra = {
        "idenCli": encontraN.identidad,
        "nombreCli": encontraN.nombre,
        "apellidoCli": encontraN.apellido,
        "puntos": encontraG.puntuacion
    }
    compras.push(compra);
    console.log(compras);

    let carta = `<div class="card-body">
    <h5 class="card-title fs-4 p-2 text-center" style="color: rgb(235, 156, 53);
    text-align: center;
    font-size: 30px; padding: 15px">COMPRA EXITOSA</h5>
    <p class="card-text">Comprado por:  ${encontraN.nombre}</p>
    <p class="card-text">Nombre Juego:  ${encontraG.name}</p>
    <p class="card-text">Costo:  ${encontraG.valor}</p>
    <p class="card-text">Iva:  ${iva}</p>
    <p class="card-text">Total:  ${resulta}</p>
    </div>`; 
    
    document.getElementById("cartas").innerHTML=carta;
  
})



