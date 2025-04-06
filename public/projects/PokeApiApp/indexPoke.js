const pokeCard = {
  tipos: [],
  nombre: "",
  experienciaBase: "",
  estadisticas: [],
  id: ""
}

function poke(search) {
  const toLowerSearch = search.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${toLowerSearch}`)
    .then(response => response.json())
    .then((data) => {
      //Llamaremos a cada elemento de nuestro objeto haciendo un recorrido. Objeto.elemento
      //Luego le pasaremos cada "data" a usar de manera similar Data.elementoJSON
      pokeCard.image = mostrarFoto(data),
      pokeCard.tipos = data.types;
      pokeCard.nombre = data.name;
      pokeCard.experienciaBase = data.base_experience;
      pokeCard.estadisticas = data.stats;
      pokeCard.id = data.id;
      typeBorder();
      showPokemon();
    });
}

function mostrarFoto(data) {
  if(data.id<=99) {
    return data.sprites.other.dream_world.front_default;
  } else {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data.id}.png`
  }
}

function searchPokemon() {
  let contener = document.getElementById("pokemon").value;
  console.log(contener);
  if (contener == null ||contener == "") {
    alert("Ingresar ID o nombre");
  } else if (contener <= 0 || contener >= 1026) {
    alert("Ingrese un pokemon valido")
  } else {
    poke(contener);
  }
}

//Funcion que capitaliza la primera letra de un elemento.
function firstMayusc(string){
  return string.charAt(0).toUpperCase()+string.slice(1);
}

//Para mostrar el pokemon ya ingresado y guardado en pokeSEARCH()
function showPokemon(){
  const contenedor = document.getElementById('template-container');
  let tipos = "";
  pokeCard.tipos.forEach(function (e) {
    tipos += `<p> ${firstMayusc(e.type.name)}</p>`
  }); 
  let estadisticas = "";
  pokeCard.estadisticas.forEach(function (e) {
    estadisticas += `<p>${firstMayusc(e.stat.name)} ${e.base_stat}</p>`
    const contenido=`<img src="`+pokeCard.image+`" class="card-img-top" style="width: 14rem;">
        <ul class="list-group list-group-flush">
          <li><h5>Pokemon:</h5>  ${firstMayusc(pokeCard.nombre)}, ID:<h5>${pokeCard.id}</h5></li>
          <li><h5>Tipo(s) del Pokemon:</h5></li> ${tipos}
          <li><h5>Estadisticas:</h5></li>${estadisticas}
          <li><h5>Experiencia:</h5></li> <p>${pokeCard.experienciaBase}</p>
        </ul>
          `
  contenedor.innerHTML = contenido;
  });
}

//Funcion para randomizar la busqueda de la funcion principal "poke(search)"
function randomPokemon() {
  const randomId = Math.floor(Math.random()*1025)+1;

  const search = randomId.toString();
  poke(search);
}

//SWITCH PARA CAMBIAR BORDE SEGUN TIPO DE POKEMON

function typeBorder() {
  var bordeTarjeta = document.getElementById("bordeTarjeta");
    
  switch (pokeCard.tipos[0].type.name) {
    case "electric":
      bordeTarjeta.style.borderColor = "rgb(248,208,48)";
      console.log("rgb(248,208,48)");
      break;
    case "grass":
      bordeTarjeta.style.borderColor = "rgb(120,200,80)";
      break;
    case "psychic":
      bordeTarjeta.style.borderColor = "rgb(248,112,160)";
      console.log("rgb(248,112,160)");
      break;
    case "normal":
      bordeTarjeta.style.borderColor = "rgb(168,160,144)";
      console.log("rgb(168,160,144)");

      break;
    case "fire":
      bordeTarjeta.style.borderColor = "rgb(240,80,48)";
      console.log("rgb(240,80,48)");

      break;
    case "dark":
      bordeTarjeta.style.borderColor = "rgb(122,88,72)";
      console.log("rgb(122,88,72)");

      break;
    case "water":
      bordeTarjeta.style.borderColor = "rgb(56,153,248)";
      console.log("rgb(56,153,248)");

      break;
    case "poison":
      bordeTarjeta.style.borderColor = "rgb(176,88,160)";
      console.log("rgb(176,88,160)");

      break;
    case "rock":
      bordeTarjeta.style.borderColor = "rgb(184,160,88)";
      console.log("rgb(184,160,88)");
      break;
    case "ground":
      bordeTarjeta.style.borderColor = "rgb(184,160,88)";
      console.log("rgb(234,214,164)");
      break;
    case "flying":
      bordeTarjeta.style.borderColor = "rgb(152,168,240)";
      console.log("rgb(152,168,240)");

      break;
    case "fighting":
      bordeTarjeta.style.borderColor = "rgb(160,80,56)";
      console.log("rgb(160,80,56)");

      break;
    case "ice":
      bordeTarjeta.style.borderColor = "rgb(88,200,224)";
      console.log("rgb(88,200,224)");

      break;
    case "fairy":
      bordeTarjeta.style.borderColor = "rgb(231,159,231)";
      console.log("rgb(231,159,231)");

      break;
    case "ghost":
      console.log("rgb(96,96,176)");
      bordeTarjeta.style.borderColor = "rgb(96,96,176)";
      break;
    case "bug":
      bordeTarjeta.style.borderColor = "rgb(168,184,32)";
      console.log("rgb(168,184,32)");
      break;
    case "steel":
      bordeTarjeta.style.borderColor = "rgb(168,168,192)";
      console.log("rgb(168,168,192)");

      break;
    case "dragon":
      bordeTarjeta.style.borderColor = "rgb(160,80,56)"; 
      console.log("rgb(160,80,56)");
  }
}





