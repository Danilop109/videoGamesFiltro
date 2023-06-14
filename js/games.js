
let almacena= window.localStorage

// if (almacena.getItem('games')) {
//     games = JSON.parse(almacena.getItem('games'));
//   }
let games= [];

let enviaGame= document.getElementById("enviaGame")
enviaGame.addEventListener("click", e=>{
    e.preventDefault();

    guardarInformacion();
})


let tablaGame= document.getElementById("tablaGame");

function guardarInformacion() {
    let idGame= Date.now()
    let name= document.getElementById("name").value;
    let tema= document.getElementById("tema").value;
    let valor= parseFloat(document.getElementById("valor").value);
    let puntuacion= parseInt(document.getElementById("puntuacion").value);

    let info= {
        "idGame":idGame,
        "name": name,
        "tema":tema,
        "valor": valor,
        "puntuacion": puntuacion,
    }
console.log(info);
games.push(info);
console.log(games)

    almacena.setItem('games', JSON.stringify(games));

    
    agregarGame(games);
    document.getElementById("formGames").reset();

}


function agregarGame(games) {
tablaGame.innerHTML="";

  games.forEach(game => {
    tablaGame.innerHTML+=`<tr class="fila">
    <td>${game.name}</td>
    <td>${game.tema}</td>
    <td>${game.valor}</td>
    <td>${game.puntuacion}</td>
    <td><a href="#" class="btn btn-danger eliminar" onclick="borrarGame(${game.idGame})">Eliminar</a></td>

</tr>`
paraJuego(games)
  });

}

// -------------------------------funcion borrar-----------------------------

function borrarGame(idGame) {
  games = games.filter(game => game.idGame !== idGame);
  almacena.setItem('games', JSON.stringify(games));
  agregarGame(games);

}


function paraJuego(games){
    let selecGame= document.getElementById("selecGame")
    selecGame.innerHTML= "";

    games.forEach(game => {
        selecGame.innerHTML += `<option value="${game.name}">${game.name}</option>`
    });
}

