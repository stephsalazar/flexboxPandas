var cerrar = document.getElementsByClassName("cerrar");
var botonOrigen = document.getElementsByClassName("botones")[0];
var botonExtincion = document.getElementsByClassName("botones")[1];
var botonRestaurar = document.getElementsByClassName("botones")[2];

botonOrigen.addEventListener("click", vistaTextoOrigen);
botonExtincion.addEventListener("click", vistaTextoExtincion);
botonRestaurar.addEventListener("click", restaurarFotos);

function vistaTextoOrigen() {
  var parrafoOrigen = document.getElementsByTagName("p")[0];

  if(parrafoOrigen.style.visibility === "hidden"){
    parrafoOrigen.style.visibility = "visible";
  }else {
    parrafoOrigen.style.visibility = "hidden";
  }
}

function cerrarImagenesPandas() {
  [].forEach.call(cerrar,function(elemento){
    elemento.addEventListener("click", cerrarImagenPanda);
  });
}

function cerrarImagenPanda() {
  var imagenPanda = this.parentElement;
  imagenPanda.style.display = "none";
}

function vistaTextoExtincion() {
  var parrafoExtincion =  document.getElementsByTagName("p")[1];

  if(parrafoExtincion.style.visibility === "hidden"){
    parrafoExtincion.style.visibility = "visible";
  }else {
    parrafoExtincion.style.visibility = "hidden";
  }
}

function restaurarFotos() {
  for (var i = 0; i < cerrar.length; i++) {
    cerrar[i].parentElement.style.display = "inline-block";
  }
}

cerrarImagenesPandas();
