const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // <name> no existe
const $b = document.querySelector('.blog'); // busca un id, pero en html es class="blog"
const $l = document.querySelector('.location'); // en html no existe una clase "location"

async function displayUser(username) { // Se agrega el async para que funcione el await de abajo
try { // es recomendable usar el try y catch en funciones async para manejar errores y evitar que el programa se rompa si algo sale mal; que falle el fetch o que el usuario no exista.
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`); // await solo se puede usar en funciones async
  const data = await response.json(); // Todo lo del fetch se debe de pasar al formato .json
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
} catch (err){ // Se agrega el cath por lo mencionado en el try anteriormente
    handleError(err); // Se manda a llamr la función que se encuentra abajo
}
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);