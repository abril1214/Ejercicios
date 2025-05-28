// Se corrigió el selector: no existe un ID "form", pero sí una clase "formulario"
//var formulario = document.querySelector("#for");
var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {
  // Se corrigió el método prevent(): debe ser preventDefault()
  e.preventDefault();

  // Se cambiaron nombres de variables para mayor claridad
  /* var n = formulario.elements[0] 
  var e = formulario.elements[1] // e tiene el mismo nombre que el evento
  var na = formulario.elements[2]  */

  var nombreInput = formulario.elements[0];
  var edadInput = formulario.elements[1];
  var nacionalidadSelect = formulario.elements[2];

  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value); // Se agregó parseInt para validar correctamente ya que edad era un string

  var i = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  // Validaciones con resaltado de errores
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  // Se traduce la nacionalidad al nombre completo
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  // Se corrigió el método incorrecto "classList.added" por "classList.add"
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Se eliminó la duplicación del nombre (antes se agregaba manualmente antes de llamar a esta función)
  // Se usa solo crearElemento para todos los datos
  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  // Se agregó el botón de eliminar dentro del invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  // Se usa .remove() en lugar de ocultar el elemento
  botonBorrar.onclick = function () {
    botonBorrar.parentNode.remove();
  };
}