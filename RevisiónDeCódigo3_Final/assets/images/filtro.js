// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./assets/images/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./assets/images/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./assets/images/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./assets/images/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./assets/images/zapato-rojo.jpg"}
]; // Se añade el ;
 
// Accedemos al contenedor donde se mostrarán los productos
/*const li = document.getElementsByName("lista-de-productos")
const $i = document.querySelector('.input');*/
const lista = document.getElementById("lista-de-productos"); // El getElement debe de ser por id porque el div del html tiene id=lista-de-productos
const input = document.getElementById('input-busqueda'); // Se agregó el id en el html y se renombra la variable por algo más comprensible

function displayProductos(array) { // Se añade la función porque sino no va a jalar
  for (let i = 0; i < array.length; i++) { // cambio productos.length por array.length
    let divisionElement = document.createElement("div"); // var ya no se usa, se cambia "d" de variable y se termina con ;
    divisionElement.classList.add("producto"); // se agrega de nuevo la variable de divisionElement

    let ti = document.createElement("p"); // se quita ver y se pone el ;
    ti.classList.add("titulo"); // se añade ;
    ti.textContent = array[i].nombre; // se añade ;

    let imagen = document.createElement("img");
    imagen.setAttribute('src', array[i].img);

    divisionElement.appendChild(ti); // se sustiture la d por divisionElement
    divisionElement.appendChild(imagen) // se sustiture la d por divisionElement

    lista.appendChild(divisionElement); // se cambia d por divisionElement y li por lista.appendChild
  };
}; // Se añade la llave de la función


displayProductos(productos); // se añade el ;
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) { // se cambia li por lista
    lista.removeChild(lista.firstChild); // se cambia li por lista
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  displayProductos(productosFiltrados); // se manda a llamar la función en lugar de repetir toda la función
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  